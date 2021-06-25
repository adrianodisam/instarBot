function newUser() {

    let email = document.getElementById('userEmail').value;
    let senha = document.getElementById('userSenha').value;
    let url = document.getElementById('userUrl').value;

    let user = { email, senha, url };

    const options = {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(user)
    }
    fetch("http://localhost:8080/api/new", options).then(res => {
        console.log(JSON.stringify(res));
    });
    fetch("http://localhost:8080/api/puppeteer", options).then(res => {
        console.log(JSON.stringify(res));
    });
    document.getElementById('userEmail').value = "";
    document.getElementById('userSenha').value = "";
    document.getElementById('userUrl').value = "";

}