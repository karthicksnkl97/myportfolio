import "./contact.css"
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
    
        formData.append("access_key", "9eb0822a-a7d3-4177-81c4-bbf85585ca6a");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
    return (
        <div id="contact" className="contact-page">
            <h1 className="contact-name">Contact</h1>
            <div className="contact">
            <div className="contact-me">
                <div>
                    <h1>Let's talk</h1>
                    <p>I'm currently avaliable to take on new projects, so feel free to sendme a message about anything that you want me to work on, You cancontact anytime.</p>
                </div>
                <div>
                    <div className="contact-section">
                        <ul>
                            <li><EmailRoundedIcon /></li>
                            <li className="contact-text">karthicksnkl97@gmail</li>
                        </ul>
                        <ul>
                            <li><PhoneRoundedIcon /></li>
                            <li className="contact-text">+91 8778794357</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <form onSubmit={onSubmit} className="contact-form" >
                    <label>Your Name</label>
                    <input type="text" name="name"  placeholder="Enter your name"/>
                    <label>Your Email</label>
                    <input type="email" name="email" placeholder="Enter your email"/>
                    <label>Write your message here</label>
                    <textarea name="message" placeholder="Enter your message"></textarea>
                    <button className="contact-btn" type="submit"> Submit</button>
                </form>
            </div>
            </div>
        </div>
    )
}
export default Contact;