export function userConnectInfos() {
    let user, username, isAuthenticated = false;
    if(localStorage.user){
        user            = JSON.parse(localStorage.user);
        isAuthenticated = true;
        username        = user.firstName + ' ' + user.lastName;
    }
    return { isAuthenticated, username };
}

  