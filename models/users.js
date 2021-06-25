module.exports = {



    users: [


    ],
    newUser(email, password, url) {
        this.users = []
        this.users.push({ email });
        this.users.push({ password });
        this.users.push({ url });





    }
}