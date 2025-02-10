import React from 'react'
import LinkedinIco from "../../assets/icons/linkedin-ico.png"
import GithubIco from "../../assets/icons/github-ico.png"

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div id="footer" className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/samuel-m-4a4432250">
                <img className="main-footer__icon" src={LinkedinIco}
                  alt="Ram Maheshwari Linkedin Profile" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/samueldmonteiro">
                <img className="main-footer__icon" src={GithubIco} alt="RammCodes Github Profile" />
              </a>
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h2 className="heading heading-sm text-lt">Samuel Davi</h2>
            <a href="https://api.whatsapp.com/send?phone=5598970051778&text=Ol%C3%A1,%20quero%20criar%20um%20site!"
              className="main-footer__short-desc" target="_blank">
              WhatsApp: +55 (98) 970051778
            </a>
            <p>
              <a href="mailto: samuel.dvmonteiro@gmail.com" className="main-footer__short-desc" target="_blank">
                Email: samuel.dvmonteiro@gmail.com
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/sdavi._/" className="main-footer__short-desc" target="_blank">
                Instagram: sdavi_
              </a>
            </p>
          </div>
        </div>

        <div className="main-footer__lower">
          &copy; Copyright {currentYear}
          <a target={"_blank"} href={"https://api.whatsapp.com/send?phone=5598970051778&text=Ol%C3%A1,%20quero%20criar%20um%20site!"}>Criado por Samuel Davi.</a>
        </div>
      </div>
  </div>
  )
}

export default Footer;