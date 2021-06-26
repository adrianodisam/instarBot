module.exports = {



    users: [


    ],
    newUser(email, senha, url) {
        this.users = [];
        this.users.push(email);
        this.users.push(senha);
        this.users.push(url);





    }
}