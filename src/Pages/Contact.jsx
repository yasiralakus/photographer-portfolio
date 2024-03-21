export default function Contact() {


    return (
        <div className="contact-page">

            <div className="slide-in-left">
                <h1>London Studio</h1>
                <h6>ADDRESS</h6>
                <p>40 Compton Street <br /> London ED1V 0BC</p>
                <h6>PHONE</h6>
                <p>+44 (845) 1235 800</p>
                <img src="./img/icons/home.png" alt="" />
                <a href="">Get Directions</a>
            </div>

            <div className="slide-in-top">
                <h1>New York Studio</h1>
                <h6>ADDRESS</h6>
                <p>285 Lexington Ave <br /> New York, 12603 NY</p>
                <h6>PHONE</h6>
                <p>+001 (845) 123 456</p>
                <img src="./img/icons/home2.png" alt="" />
                <a href="">Get Directions</a>
            </div>

            <img className="slide-in-bottom" src="./img/home-page/photo09b.jpg" alt="" />

            <form className="slide-in-right">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <textarea name="" id="" cols="30" rows="7" placeholder="Your Message"></textarea>
                <button>SEND</button>
            </form>

        </div>
    )
}