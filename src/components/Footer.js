import { Facebook, Instagram,Twitter, YouTube, LinkedIn } from '@material-ui/icons';
import React from 'react';
import './Footer.css';

function Footer() {

    return (
        <footer className="footer">
            <div className="footerContainer">
                <div>
                    <p>Follow us on:</p>
                    <p>
                        <a href=" " target="_blank">
                            <Instagram className="icons instagram"  fontSize="large"/>
                        </a>
                        <a href=" " target="_blank">
                            <YouTube className="icons youtube" fontSize="large" />
                        </a>
                        <a href=" " target="_blank">
                            <Facebook className="icons linkedin"  fontSize="large"/>
                        </a>
                        <a href=" " target="_blank">
                            <Twitter className="icons twitter"  fontSize="large"/>
                        </a>
                        <a href=" " target="_blank">
                            <LinkedIn className="icons linkedin"  fontSize="large"/>
                        </a>
                       
                    </p>
                </div>
                <div>
                    <p>© 2023 HackOverflow 1.0</p>
                    <p> <a href="mailto:hackathon@phcet.tech">Email: hackathon@phcet.tech</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;