import nodeMailer from "nodemailer";
import {google} from "googleapis";
import dotenv1 from "dotenv";
const {OAuth2} = google.auth
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground'

dotenv1.config();

const {
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN,
    SENDER_EMAIL_ADDRESS
} = process.env

const oauth2Client = new OAuth2(
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN,
    OAUTH_PLAYGROUND
)

//send mail
export const sendEmail = (to, url, txt) => {
    oauth2Client.setCredentials({
        refresh_token: MAILING_SERVICE_REFRESH_TOKEN
    })
    
    const accessToken = oauth2Client.getAccessToken()
    const smtpTransport = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: SENDER_EMAIL_ADDRESS,
            clientId: MAILING_SERVICE_CLIENT_ID,
            clientSecret: MAILING_SERVICE_CLIENT_SECRET,
            refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
            accessToken
        }
    });
    
    const mailOptions = {
        from: SENDER_EMAIL_ADDRESS,
        to: to,
        subject: "Computer Store",
        html: `
            <h1>Welcome to our Computer Store</h1>
            <p>Congratulations! You're almost set to start using our COMPUTER STORE.
            Just click the button below to validate your email address.
            </p>
            <a href=${url}>${txt}</a>
            <p>If the button doesn't work for any reason, you can also click on the link below:</p>

            <div>${url}</div>
        `
    }

    smtpTransport.sendMail(mailOptions, (err, infor) => {
        if(err) return err
        return infor
    })
}
export default sendEmail;