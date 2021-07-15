const aws = require("aws-sdk");
require("dotenv").config();

var ses = new aws.SES({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
});

module.exports.senEmail = (recipientemail) => {
  const recipient = recipientemail;

  const subject = "Email Verification";
  const body_text = "";
  const body_html = `<html>
<head></head>
<body>
  <h1>zohaibalishah github</h1>
  <p>
    <a href='https://github.com/zohaibalishah'>github</a> .</p>
</body>
</html>`;

  // The character encoding for the email.
  const charset = "UTF-8";

  // Specify the parameters to pass to the API.
  var params = {
    Source: process.env.SOURCE_EMAIL,
    Destination: {
      ToAddresses: [recipient],
    },
    Message: {
      Subject: {
        Data: subject,
        Charset: charset,
      },
      Body: {
        Text: {
          Data: body_text,
          Charset: charset,
        },
        Html: {
          Data: body_html,
          Charset: charset,
        },
      },
    },
    //   ConfigurationSetName: configuration_set
  };

  ses.sendEmail(params, function (err, data) {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Email sent! Message ID: ", data.MessageId);
    }
  });
};
