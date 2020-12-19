var nodemailer = require('nodemailer')
var express = require('express')
var app  = express();

app.post('/send-email', (req, res)=>{
    var transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        post: 587,
        secure: false,
        auth:{
            user: 'jonatan.harris@ethereal.email',
            pass: 'mUPUwjNqdbgXm5EA8c'
        },
    });
    var mailOptions = {
        from: 'Remitente',
        to: 'abbas_9589_new@hotmail.com',
        subject: 'Enviado desde nodemailer',
        html: `<!DOCTYPE html>
        <html lang="en" style="margin: 0;padding: 0;box-sizing: border-box;">
        <head style="margin: 0;padding: 0;box-sizing: border-box;">
            <meta charset="UTF-8" style="margin: 0;padding: 0;box-sizing: border-box;">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" style="margin: 0;padding: 0;box-sizing: border-box;">
            <title style="margin: 0;padding: 0;box-sizing: border-box;">Extratos Facil</title>
            <style style="margin: 0;padding: 0;box-sizing: border-box;">
                *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body{
            background-color: #F5F5F5;
        }
        .container{
            margin: 100px auto;
            width: 500px;
            height: 400px;
            background: #FFFFFF;
        }
        .title{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 900;
            background-color:#94C769;
        }
        .conteudo{
            margin-top: 10px;
            display: flex;
            justify-content: center;
            font-size: 15px;
            font-family: Arial, Helvetica, sans-serif;
            
        }
        .botao{
            display: flex;
            justify-content: center;
            padding: 10px;
            margin: 30px auto;
            border-radius: 5px;
            background-color: #94C769;
            color: #ffffff;
            font-family: Arial, Helvetica, sans-serif;
            width: 200px;
        }
        .linha {
            display: flex;
            justify-content: center;
            font-family: Arial, Helvetica, sans-serif;
            color: rgb(29, 28, 28);
        }
        .linha span::after{
            content: '';
            width: 300px;
            height: 1.5px;
            display: block;
            background: #000000;
        }
        .linha span::before{
            content: '';
            width: 300px;
            height: 1.9px;
            display: block;
            background: #000000;
        }
        .email{
            margin-left: 100px;
            color: blue;
        }
        .email span{
            color: #F3A530;
        }
        .data-limite span::after{
            content: '';
            width: 300px;
            height: 1.5px;
            display: block;
            background: #dfd5d59c;
        }
        .data-limite span::before{
            content: '';
            width: 300px;
            height: 1.9px;
            display: block;
            background: #dfd5d59c;
        }
        
        .data-limite{
            margin-top: 10px;
            margin-left: 100px;
        }
        .visualizar{
            margin-top: 50px;
            margin-left: 180px;
        }
        .visualizar a{
            font-weight: bold;
            color: blue;
        }
            </style>
        </head>
        <body style="margin: 0;padding: 0;box-sizing: border-box;background-color: #F5F5F5;">
            <div class="container" style="margin: 100px auto;padding: 0;box-sizing: border-box;width: 500px;height: 400px;background: #FFFFFF;">
                <div class="title" style="margin: 0;padding: 0;box-sizing: border-box;display: flex;justify-content: center;align-items: center;height: 50px;font-family: Arial, Helvetica, sans-serif;font-weight: 900;background-color: #94C769;">
                    <span style="margin: 0;padding: 0;box-sizing: border-box;">extrato$facil</span>
                </div>
                <section class="conteudo" style="margin: 0;padding: 0;box-sizing: border-box;margin-top: 10px;display: flex;justify-content: center;font-size: 15px;font-family: Arial, Helvetica, sans-serif;">
                    <h1 style="margin: 0;padding: 0;box-sizing: border-box;">Solicitacao de Assinaturas de Extratos Facil</h1>
                </section>
                <div class="botao" style="margin: 30px auto;padding: 10px;box-sizing: border-box;display: flex;justify-content: center;border-radius: 5px;background-color: #94C769;color: #ffffff;font-family: Arial, Helvetica, sans-serif;width: 200px;">
                    Visualizar para assinar
                </div>
                <div class="linha" style="margin: 0;padding: 0;box-sizing: border-box;display: flex;justify-content: center;font-family: Arial, Helvetica, sans-serif;color: rgb(29, 28, 28);">
                    <span style="margin: 0;padding: 0;box-sizing: border-box;">Comprovante de oferta de lance.pdf</span>
                </div>
                <div class="email" style="margin: 0;padding: 0;box-sizing: border-box;margin-left: 100px;color: blue;">
                caio.sis@gmail.com: <span style="margin: 0;padding: 0;box-sizing: border-box;color: #F3A530;">Assinara como parte</span>
                </div>
                <div class="data-limite" style="margin: 0;padding: 0;box-sizing: border-box;margin-top: 10px;margin-left: 100px;">
                   <span style="margin: 0;padding: 0;box-sizing: border-box;">Data limite de Assinatura: 30/10/2020</span>
                </div>
                <div class="visualizar" style="margin: 0;padding: 0;box-sizing: border-box;margin-top: 50px;margin-left: 180px;">
                    <a href="" style="margin: 0;padding: 0;box-sizing: border-box;font-weight: bold;color: blue;">Visualizar para assinar</a>
                </div>
            </div>
        </body>
        </html>`
    }
    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            res.status(500).send(error.message);
        }else{
            console.log('Email enviado')
            res.status(200).jsonp(req.body)
        }
    })
})

app.listen(3080, ()=>{
    console.log('servidor em - > http//localhost:3080')
})