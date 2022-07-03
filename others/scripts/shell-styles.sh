dark_gray="\e[90m"
red="\e[91m"
green="\e[92m"
yellow="\e[93m"
pink="\e[95m"
cyan="\e[96m"
white="\e[97m"
bold="\e[1m"
reset_styles="\e[0m"

echo_step() { echo -e "$bold$cyan✭ Step:$reset_styles $white$1$reset_styles"; }
echo_action() { echo -e "$pink➤$reset_styles $1"; }
echo_info() { echo -e "$dark_gray✱$reset_styles $1"; }
echo_success() { echo -e "$green✔$reset_styles $1"; }
echo_warning() { echo -e "$bold$yellow⚑$reset_styles $1"; }
echo_error() { echo -e "$bold$red✖$reset_styles ERROR: $bold$1$reset_styles"; }
echo_question() { echo -e "$bold$yellow✚$reset_styles $1"; }
