

let listUsers = [
    {
        id: "KUGF-57JNJ-JFNJDK-OUH3",
        username: "Glouglou43",
        firstName: "Henrique",
        lastName: "Vieira",
        age: 35,
        isAdmin: true,
    },
]

exports.getUsers = (req, res, next)=>{
    return listUsers
}

exports.pushNewUser = (body)=>{
    console.log(body);
    listUsers.push(body)
    // console.log("fini");
}