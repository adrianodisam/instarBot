const express = require('express');
const puppeteer = require('puppeteer');
const users = require('./models/users')
const apiRoute = require('./router/api')
const app = express();
const path = require('path');
const port = 8080;

// craindo a rota api 

// usar pagina html com caminho da pastas paa acessar os arquivos path.join junta as partes de um caminho  v__dirname diretorio do projeto mais concatenado com a minha pasta public
app.use('/api', apiRoute)
app.use(express.static(path.join(__dirname, "public")));


app.use('/api', apiRoute, async function logar() {
    let email = (users.users[0]);
    let senha = (users.users[1]);
    let url = (users.users[2]);
    let comentarios = (users.users[3]);
    let tempo = (users.users[4]);
    let pausa = (users.users[5]);
    console.log(comentarios, tempo, pausa);
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 400
    });
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto('https://www.instagram.com/'); // vai para a pagina de login
    await page.waitForTimeout(4000)

    function minutos(valor) {
        let mile = 1000;
        let result = valor * mile;
        return Math.floor(Math.random() * result + 3000);
    };



    await page.type('[name="username"] ', email);
    await page.type('[name="password"]', senha);
    await page.waitForTimeout(4000); //tempo para ir para o proximo comando

    await page.click('.sqdOP.L3NKy.y3zKF');
    await page.waitForTimeout(4000);
    //vai para a postagem especifica
    await page.goto(url);
    await page.waitForTimeout(3000);
    let arr = ['Eu quero', 'Já ganhei', 'Eu', 'dessa vez eu ganho', 'Fé que vou ganhar', 'É meu', 'premio é meu já', 'meuuu', 'ganho com certeza', 'ja vaoi  chegar pra mim', 'entrega pra mim', 'ja tá chegando'];

    for (let x = 1; x < comentarios; x++) {
        //sorteia o array random
        var item = arr[Math.floor(Math.random() * arr.length)];

        // comenta o array selecionadp
        await page.type('.Ypffh', item);
        await page.waitForTimeout(3000);

        //clica no botão
        await page.click('[type="submit"]')

        console.log(x)
        await page.waitForTimeout(minutos(tempo));

    }
    await page.waitForTimeout(minutos(pausa));


    for (let x = 1; x < comentarios; x++) {
        //sorteia o array random
        var item = arr[Math.floor(Math.random() * arr.length)];

        // comenta o array selecionadp
        await page.type('.Ypffh', item);
        await page.waitForTimeout(3000);

        //clica no botão
        await page.click('[type="submit"]')

        console.log(x)
        await page.waitForTimeout(minutos(tempo));

    }
    await page.waitForTimeout(minutos(pausa));


    for (let x = 1; x < comentarios; x++) {
        //sorteia o array random
        var item = arr[Math.floor(Math.random() * arr.length)];

        // comenta o array selecionadp
        await page.type('.Ypffh', item);
        await page.waitForTimeout(3000);

        //clica no botão
        await page.click('[type="submit"]')

        console.log(x)
        await page.waitForTimeout(minutos(tempo));

    }
    await page.waitForTimeout(minutos(pausa));


    for (let x = 1; x < comentarios; x++) {
        //sorteia o array random
        var item = arr[Math.floor(Math.random() * arr.length)];

        // comenta o array selecionadp
        await page.type('.Ypffh', item);
        await page.waitForTimeout(3000);

        //clica no botão
        await page.click('[type="submit"]')

        console.log(x)
        await page.waitForTimeout(minutos(tempo));

    }
    await page.waitForTimeout(minutos(pausa));


    for (let x = 1; x < comentarios; x++) {
        //sorteia o array random
        var item = arr[Math.floor(Math.random() * arr.length)];

        // comenta o array selecionadp
        await page.type('.Ypffh', item);
        await page.waitForTimeout(3000);

        //clica no botão
        await page.click('[type="submit"]')

        console.log(x)
        await page.waitForTimeout(minutos(tempo));

    }
    await page.waitForTimeout(minutos(pausa));
    for (let x = 1; x < comentarios; x++) {
        //sorteia o array random
        var item = arr[Math.floor(Math.random() * arr.length)];

        // comenta o array selecionadp
        await page.type('.Ypffh', item);
        await page.waitForTimeout(3000);

        //clica no botão
        await page.click('[type="submit"]')

        console.log(x)
        await page.waitForTimeout(minutos(tempo));

    }
    await page.waitForTimeout(minutos(pausa));


    //fecha o browser
    await browser.close();
});

app.listen(process.env.PORT || port);