source room_builder.bash;
function build_secrect_club_haos() {

    local _directory_path=~
    local _directory_name=secret_club_haos
    
    local _directory_path_and_name=$_directory_path/$_directory_name
    
    if [ ! -d "$_directory_path_and_name" ]
        then
            mkdir "$_directory_path_and_name"
        else
            #printf "* * DIRECTORY ALREADY EXISTS!! * * \n";
            exit 1
    fi
    
    add_rooms_to_secrect_club_haos
}

function add_rooms_to_secrect_club_haos() {
    
    local _secret_club_haos_rooms=(github google digital_ocean)
    
    for room in "${_secret_club_haos_rooms[@]}"
    do
        local _new_room_location=$_directory_path_and_name/$room
        mkdir "$_new_room_location"
        decorate_room "$room" "$_new_room_location"
    done
}

function decorate_room() {
    if [ -z "$1" ]
        then 
            # printf "I do not know which room to decorate!\n"
            exit 1
    fi

    if [ -z "$2" ]
        then 
            # printf "I need to know where the $1 room is!\n"
            exit 1
    fi

    case $1 in
        github)
            #printf "Decorating github room!\n"
            default_room_decorator "$1" "$2"
            build_github_api_secret_room
            ;;
        google)
            #printf "Decorating google room!\n"
            default_room_decorator "$1" "$2"
            ;;
        
        digital_ocean)
            #printf "Decorating digital_ocean room!\n"
            default_room_decorator "$1" "$2"
            ;;
        
        *)
            #printf "Default Decoration!!\n"
            default_room_decorator "$1" "$2"
            ;;
    esac
        
    #local _decoration_string="$1\_secrets =  { \"room\": \"cloud9\", \"db_password\": \"password1234\" }; module.exports = $1\_secrets;"
}

function default_room_decorator() {
    if [ -z "$1" ]
        then 
            # printf "I do not know which room to decorate!\n"
            exit 1;
        else 
            local _default_decoration="var secret_data = { \"room_name\": \"$1\", \"room_location\": \"$2\" }; module.exports = secret_data;" 
            echo $_default_decoration > $2/config.js
    fi
}

build_secrect_club_haos

printf "Destroy secret clubhouse? (Y/n) : "
read user_is_destructive;
if [ "$user_is_destructive" == "Y" ]
    then
        printf "Aren't you a bad ass!\n"
        rm -rf "~/secret_club_haos"
fi
