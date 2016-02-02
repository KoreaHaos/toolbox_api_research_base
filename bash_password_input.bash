function get_password_twice_to_verify() {
    local PASSWORD_A;
    local PASSWORD_B;
    
    stty -echo
    printf "Password please : "
    read PASSWORD_A
    printf "\n"
    printf "Password again  : "
    read PASSWORD_B
    printf "\n"
    stty echo

    if [ "$PASSWORD_A" == "$PASSWORD_B" ]
        then printf "MATCH!\n"
        else printf "NO MATCH\n"
    fi
}

get_password_twice_to_verify
