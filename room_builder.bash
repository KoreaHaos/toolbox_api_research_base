function build_github_api_secret_room() {
    #printf "BUILDING github_api_secret_room\n"
    
    if [ -z "$1" ]
        then
            node add_club_vip_pass.js
        else
            node add_club_vip_pass.js "$1"
    fi

}
 <<'END'
if [ -z "$1" ]
    then
        printf "build_github_api_secret_room called!"
    else
        if [ "$1" == "git_builder_solo" ]
            then
                build_github_api_secret_room "$1"
            else
                printf "NOT SURE WHAT TO DO!"
                exit 1;
        fi
fi
END