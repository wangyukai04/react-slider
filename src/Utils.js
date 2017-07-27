export default {
    saveUser(user){
        let users = localStorage.getItem("users");
        users = users?JSON.parse(users):[];
        users.push(user);
        localStorage.setItem("users",JSON.stringify(users));
    },
    getUsers(){
        let users = localStorage.getItem("users");
        return users?JSON.parse(users):[];
    }
}