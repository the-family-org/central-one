#!/bin/bash

# EXAMPLE: ./generate-certificates.sh -i -t "$certificate_host" -d "$secrets_directory"

script_name="generate-certificates.sh"
initial_directory=$(pwd)
# Go to the script directory.
cd $(dirname "${BASH_SOURCE[0]}")
script_directory=$(pwd)
target_directory="$script_directory/secrets"
host="localhost 127.0.0.1 ::1"
file="localhost"
install=false

# "Echo" command with colors: echo_step, echo_action, echo_info, echo_success,
# echo_warning, echo_error, echo_question.
source "shell-styles.sh"

echo_info "Script initialized - $script_name"

# Check if the "mkcert" is installed on the system.
if ! [ -x "$(command -v mkcert)" ]; then
  echo_error "\"mkcert\" is not installed on your system."
  echo_info "How to install: https://github.com/FiloSottile/mkcert#installation"
  exit
fi

# Check for parameters.
while getopts ":it:d:" opt; do
  case $opt in
  # Set mkcert installation.
  i)
    install=true
    ;;
    # Set a new host name.
  t)
    host="${OPTARG}"
    file=$(echo "${OPTARG}" | awk '{print $1}')
    ;;
    # Set a new directory.
  d)
    target_directory="${OPTARG}"
    ;;
  esac
done

echo_info "Target directory: $target_directory"
echo_info "Target host: $host"

# Go to the script directory.
cd "$script_directory"

# Create the target directory if it does not exist and then go to it.
mkdir -vp "$target_directory"
cd "$target_directory"

# Rename the certificate files if they already exist.
if [ -f $file*key.pem ]; then
  echo_success "Certificates already exists in: $target_directory"
  echo_action "Renaming the certificate files..."
  mv -v $file*key.pem private-key.pem
  mv -v $file*.pem public-certificate.pem
  echo_info "Certificate generator script finished"
  exit
fi

# If the certificates exist, go to the initial directory and finish the script.
if [ -f "public-certificate.pem" ] && [ -f "private-key.pem" ]; then
  echo_success "Certificates already exists in: $target_directory"
  cd "$initial_directory"
  echo_info "Certificate generator script finished"
  exit
fi

# Create a local certificate authoritie and then generate the files.
if [ "$install" = "true" ]; then
  echo_action "Installing the certificate authority..."
  mkcert -install
fi
echo_action "Generating certificate files..."
mkcert -cert-file "public-certificate.pem" -key-file "private-key.pem" $host

# Go to the initial directory and finish the script.
cd "$initial_directory"
echo_info "Script finished - $script_name"
exit
