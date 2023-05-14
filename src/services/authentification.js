const usersData = [
    {
        id:0,
        userFirstName:"fabrice",
        userName:"Kopf",
        password:"choualacreme",
        email:"fkopf@orange.fr"
    },
    {
        id:1,
        userFirstName:"Dania",
        userName:"Benyoussef",
        password:"cegefos",
        email:"dania@cegefos.fr"
    },
]

function login (email,password) {
    return usersData.find(user=>user.email === email && user.password === password)
}

export { login };
export { usersData }