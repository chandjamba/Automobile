import "./footer.scss";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__upper-box">
                <div className="footer__heading-box">
                    <h1 className="footer__heading">MORENT</h1>
                    <p className="footer__heading-line">Our vision is to provide convenience and help increase your sales business.</p>
                </div>
                <div className="footer__links-box">
                    <div className="footer__about-box">
                        <h1 className="footer__about-heading">About</h1>
                        <p className="footer__about-c1">How it works</p>
                        <p className="footer__about-c2">Partnership</p>
                        <p className="footer__about-c3">Featured</p>
                    </div>
                    <div className="footer__community-box">
                    <h1 className="footer__community-heading">Community</h1>
                    <p className="footer__community-c1">Event</p>
                        <p className="footer__communityc2">Blog</p>
                        <p className="footer__communityc3">Podcast</p>
                    </div>
                    <div className="footer__socials-box">
                    <h1 className="footer__socials-heading">Socials</h1>
                    <p className="footer__socials-c1">Instagram</p>
                        <p className="footer__socials-c2">Twitter</p>
                        <p className="footer__socials-c3">Facebook</p>
                    </div>
                </div>
            </div>
            <div className="footer__lower-box">
                <div className="footer__rights-reserved-box">
                    <p className="footer__rights-reserved">©2022 MORENT. All rights reserved</p>
                </div>
                <div className="footer__policy-and-terms-box">
                    <div className="footer__policy-box">
                        <p className="footer__policy">Privacy & Policy</p>
                    </div>
                <div className="footer__terms-and-conditions-box">
                    <p className="footer__terms-and-conditions">Terms & Conditions</p>
                </div>
                </div>
            </div>

        </div>
    )
}