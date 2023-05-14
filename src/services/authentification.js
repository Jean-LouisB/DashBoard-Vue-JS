const users = [
    {
        id:0,
        identifiant:"fabrice",
        password:"choualacreme"
    },
    {
        id:1,
        identifiant:"dania",
        password:"cegefos"
    },
]

function login (identifiant,password) {
    return users.find(user=>user.identifiant === identifiant && user.password === password)
}

export { login };