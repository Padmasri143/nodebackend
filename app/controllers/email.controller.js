const mailer = require("../config/mailer");

// Create and Save a new CountryList
exports.send = (req, res) => {
    let param= req;
    if (!req.body) {
        res.status(500).send({
            message:
              "please check your param details."
          });
    }else{
        mailer.sendMail(param, (err, result)=>{
            if(err){
                res.status(500).send({
                    message: "Some error occurred while sending enquiry."
                  });
            }else{
                res.status(200).send(result);
            }            
        });
    }
};

