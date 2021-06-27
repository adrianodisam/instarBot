module.exports = {



    users: [


    ],
    newUser(email, senha, url, comentarios, tempo, pausa) {
        this.users = [];
        this.users.push(email);
        this.users.push(senha);
        this.users.push(url);
        this.users.push(comentarios);
        this.users.push(tempo);
        this.users.push(pausa);
    }
}