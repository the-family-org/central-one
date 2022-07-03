#!/bin/bash
script_name="first-install.sh"
initial_directory=$(pwd)
# Go to the script directory.
cd $(dirname "${BASH_SOURCE[0]}")
script_directory=$(pwd)
app_directory=$(dirname "$(dirname "$(pwd)")")
app_api_directory="$app_directory/packages/api"
app_web_directory="$app_directory/packages/web"
app_api_secrets_directory="$app_api_directory/secrets"
app_web_secrets_directory="$app_web_directory/secrets"
dependency_array=("yarn" "lerna" "mkcert" "docker" "node")
command_to_run_module="yarn"
command_to_install_all_modules="yarn bootstrap"
certificate_host="localhost 127.0.0.1 ::1"
database_container_name="central_db"

# Give execution permission to all shell scripts inside the folder.
chmod +x *.sh

# "Echo" command with colors: echo_step, echo_action, echo_info, echo_success,
# echo_warning, echo_error, echo_question.
source "shell-styles.sh"

echo_info "Script initialized - $script_name"

# -----------------------------------------------------------------------------

echo_step "Handle dependency checking"

# Check if the dependency command is installed on the system.
handle_dependency_checking() {
  if ! [ -x "$(command -v $1)" ]; then
    echo_error "\"$1\" is not installed on your system."
    echo_info "Install the dependecy and then run the script again."
    exit
  fi

  echo_success "Dependency \"$1\" is installed on your system."
}

echo_action "Checking dependencies..."
for dependency in "${dependency_array[@]}"; do
  handle_dependency_checking $dependency
done

# -----------------------------------------------------------------------------

echo_step "Handle \".pem\" certificates"

# Create the ".pem" certificates.
./generate-certificates.sh -i -t "$certificate_host" -d "$app_api_secrets_directory"
./generate-certificates.sh -t "$certificate_host" -d "$app_web_secrets_directory"

# -----------------------------------------------------------------------------

echo_step "Handle \".env\" files"

# Create ".env" file if it doesn't exist in the target directory.
handle_env_file() {
  if [ -f "$1/.env" ]; then
    echo_success "The \".env\" file already exists in: $1"
  else
    echo_action "Creating the \".env\" file..."
    cp -v "$1/.env.example" "$1/.env"
  fi
}

handle_env_file "$app_api_directory"
handle_env_file "$app_web_directory"

# -----------------------------------------------------------------------------

echo_step "Handle node modules installation with \"Lerna\""
echo_info "Command that will be used to install: $command_to_install_all_modules"

echo_action "Installing modules..."
cd "$app_directory"
$command_to_install_all_modules

cd "$script_directory"

# -----------------------------------------------------------------------------

echo_step "Handle database docker container"

cd "$app_api_directory"

echo_action "Removing the database container if it exists..."
docker compose rm -fsv $database_container_name

echo_action "Starting the database docker container..."
docker compose up -d $database_container_name

echo_action "Waiting 9 seconds to ensure the database container has started..."
sleep 9

cd "$script_directory"

# -----------------------------------------------------------------------------

echo_step "Update database and types with Prisma"

cd "$app_api_directory"

echo_action "Running \"$command_to_run_module prisma db push\" to update database..."
$command_to_run_module prisma db push

echo_action "Running \"$command_to_run_module prisma generate\" to update types..."
$command_to_run_module prisma generate

cd "$script_directory"

# -----------------------------------------------------------------------------

# Go to the initial directory and finish the script.
cd "$initial_directory"
echo_info "Script finished - $script_name"
exit
