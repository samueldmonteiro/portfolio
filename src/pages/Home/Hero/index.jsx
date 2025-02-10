import React from 'react'
import CodeImage from "../../../assets/images/code.png"
import GithubIcon from "../../../assets/icons/github-dark.svg"
import LinkedinIcon from "../../../assets/icons/linkedin-dark.svg"
import BookIcon from "../../../assets/icons/book-dark.svg"

const Hero = () => {
  return (
    <section className="home-hero">
      <div className="home-hero__content">
        <div className="title-main">
          <img src={CodeImage} alt=""/>
          <h1 className="heading-primary">Programador</h1>
            <h1 className="heading-primary">Full-Stack.</h1>
        </div>
        <div className="home-hero__info">
          <p className="text-primary">
            Conhecimentos em desenvolvimento Web Front-end e Back-end.<br/>1 ano de experiência atuando como
              freelancer.
          </p>
        </div>
        <div className="home-hero__cta">
          <a href="./#projects" className="btn btn--bg">Mais...</a>
        </div>
      </div>
      <div className="home-hero__socials">
        <div className="home-hero__social">
          <a href="https://www.linkedin.com/in/samuel-m-4a4432250" className="home-hero__social-icon-link" rel="noreferrer"
            target="_blank">
            <img src={LinkedinIcon} alt="Ram Maheshwari Linkedin Profile"
              className="home-hero__social-icon" />
          </a>
        </div>


        <div className="home-hero__social">
          <a href="https://github.com/samueldmonteiro" className="home-hero__social-icon-link" rel="noreferrer"
            target="_blank">
            <img src={GithubIcon} alt="RammCodes Github Profile" className="home-hero__social-icon" />
          </a>
        </div>

        <div className="home-hero__social">
          <a href="https://dev.to/samueldmonteiro" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
            <img src={BookIcon} alt="RammCodes DEV.to Blog Profile" className="home-hero__social-icon" />
          </a>
        </div>
      </div>
      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
    </section>
  )
}

export default Hero