import './header.css';
import dot from "../Images/Nine-dots.jpeg"

function Header() {

    return (<header className="flex-container">

        <div className='two-items'>
            <p><a href='https://about.google/?fg=1&utm_source=google-CA&utm_medium=referral&utm_campaign=hp-header'>About</a></p>
            <p><a href='https://store.google.com/CA?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-CA'>Store</a></p>
        </div>

        <div className='four-items'>

            <p><a href="https://mail.google.com/mail/u/0/?ogbl">Gmail</a></p>
            <p><a href="https://www.google.ca/imghp?hl=en&authuser=0&ogbl">Images</a></p>
            <p>
                <a href="https://www.google.ca/intl/en/about/products" className="round-padding">
                    <img src={dot} alt='cube'></img>
                </a>
            </p>

            <p id="signID">
                <a href="https://mail.google.com/mail/u/0/?ogbl"
                    id='signInBluePadding'>
                    Sign in
                </a>
            </p>

        </div>
    </header>);

}


export default Header;