const sgMail=require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'aneeshpandey22@gmail.com',
        subject:'Thanks for joining in!',
        text:`Welcome to the Task Manager app, ${name}. Let's get some work done!`
    })
}

const sendByeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'aneeshpandey22@gmail.com',
        subject:'It is sad to see you go!',
        text:`Hey ${name}, please let us know what went wrong!`
    })
}

module.exports={
    sendWelcomeEmail,
    sendByeEmail
}