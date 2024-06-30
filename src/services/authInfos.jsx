export function userConnectInfos() {
    let user, username, isAuthenticated, adresse, email, civilite = false;
    if(localStorage.user){
        user            = JSON.parse(localStorage.user);
        isAuthenticated = true;
        username        = user.firstName + ' ' + user.lastName;
        adresse         = user.address;
        civilite        = user.gender === 'male' ? 'Monsieur ' : (user.gender === 'female' && (user.maidenName !== user.lastName) ? 'Madame ' : 'Mademoiselle ');
        email           = user.email;
    }
    return { isAuthenticated, username, adresse, email, civilite };
}
export async function getOneUserById(id) {
    let user;
    await fetch(`https://dummyjson.com/users/${id}`)
    .then(res => res.json())
    .then(res => user = res);

    return user;
}

  