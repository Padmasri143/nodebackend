const nodemailer = require('nodemailer');
  
let mailTransporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: 'prabakaransantosh@gmail.com', //mailid
        pass: '*********' //password
    }
});
  

exports.sendMail = (req,result)=>{
    let mailDetails = {
        from: 'prabakaransantosh@gmail.com',
        to: 'prabakaran@firebeetechnoservices.com',
        subject: 'New Enquiry From '+req.body.productname,
        html: '<table>'+
        '<tr><th>Enquirer Name</th><td>'+req.body.enquirer+'</td></tr>'+
        '<tr><th>Enquirer E-Mail</th><td>'+req.body.emailid+'</td></tr>'+
        '<tr><th>Enquirer Contact</th><td>'+req.body.mobile+'</td></tr>'+
        '<tr><th>Enquirer Location</th><td>'+req.body.location+'</td></tr>'+
        '<tr><th>Enquiry</th><td>'+req.body.message+'</td></tr>'+
        '</table>'
    };
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            result(true, err );
        } else {            
            result(null, "Enquiry sent" );
        }
    });
};
