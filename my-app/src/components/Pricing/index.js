import Header from '../Header'
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import logo512 from '../../../src/logo512.png'
import './index.css'

const Pricing = () => {

    const getFooterSectionPricing = () =>(
        <div className='footer-home'>
        <div className='footer-first-container'>
            <div className='footer-container-second'>
                <img src={logo512} className='logo-footer' alt='logo' />
                <p className='paragraph-footer'>Where humans and AI collaborate seamlessly</p>
            </div>
            <div className='footer-container-second'>
                <h1 className='footer-header-one'>Company</h1>
                <a href='/about' target='_blank' className='footer-paragraph-one'>About us</a>
                <a href='pricing' target='_blank' className='footer-paragraph-one'>Pricing</a>
                <a href='contact' target='_blank' className='footer-paragraph-one'>Contact</a>
            </div>
            <div className='footer-container-second'>
                <h1 className='footer-header-one'>Resources</h1>
                <a href='/blogs' target='_blank' className='footer-paragraph-one'>Blog</a>
                <a href='/faqs' target='_blank' className='footer-paragraph-one'>FAQs</a>
            </div>
            {/*
            <div className='footer-container-second'>
                <h1 className='footer-header-one'>Legal Terms</h1>
                <p className='footer-paragraph-one'>Terms & Conditions</p>
                <p className='footer-paragraph-one'>User Conduct Guidelines</p>
                <p className='footer-paragraph-one'>Support Commitment</p>
                <p className='footer-paragraph-one'>Privacy Policy</p>
                <p className='footer-paragraph-one'>Security Overview</p>
            </div> */}
        </div>
        <div className='main-footer-container-last'>
            <div className='icons-container-footer'>
                <FaLinkedin className='icon-footer'/>
                <FaXTwitter className='icon-footer' />
                <FaYoutube className='icon-footer' />
            </div>
        </div>
        </div>
    )

    const getFooterAboveSectionPricing = () =>(
        <div className='main-container-empower-home-ai'>
            <div className='inner-container-lines inner-container-empower-home'>
                <h1 style={{fontSize:35}}>Empower your team with WYGE.<br/> take the first step now!</h1>
                <p style={{fontSize:20,marginTop:0}}>Stay informed and be the first to know about upcoming releases.</p>
                <a href='/login' target='_blank' className='link-element-signIn-button'>
                <button type='button' className='signupButton-home'>Signup for Free</button>
                </a>
            </div>
        </div>
    )

    return (
    <div style={{boxSizing:'border-box'}}>
        <Header/>
        <hr style={{marginTop:'0px'}} />
        <div className='pricing-main-container'>
            <h1>Plans & Pricing</h1>
            <p>Find the right plan for your goals</p>
            <div className='pricing-card-container'>
                <div className='pricing-card-one'>
                    <h1 className='pricing-card-heading'>Free</h1>
                    <p className='pricing-desc-one'>Features at No Cost</p>
                    <h1 className='heading-two-pricing-card'>$0/mo</h1>
                    <a href="/login" target='_blank' className=''>
                        <button className='signupButton-home'>GET STARTED</button>
                    </a>
                </div>
                <div className='pricing-card-one'>
                    <h1 className='pricing-card-heading'>ENTERPRICE</h1>
                    <p className='pricing-desc-one'>Complete Solutions</p>
                    <h1 className='heading-two-pricing-card'>Custom</h1>
                    <a href='/contact' target="_blank" className=''>
                        <button className='signupButton-home'>CONTACT US</button>
                    </a>
                </div>
            </div>
        </div>
        {getFooterAboveSectionPricing()}
        {getFooterSectionPricing()}
    </div>
)
}
export default Pricing