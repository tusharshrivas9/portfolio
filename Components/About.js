import React from 'react'
import "./Home.css"

const About = () => {
  return (
    <>
      <div className="cointainer1">
        <div className="left1">
         <h1 className='head1'>My Skills</h1>
         <p className='subhead1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ipsam ullam vero. Eos voluptatem et, quis est dicta laudantium, maxime totam eius soluta harum unde. Atque nemo sunt laboriosam praesentium.</p>
        </div>
        <div className="gallery1">
          <div className="box row" id='box1' style={{backgroundImage : `url(https://upload.wikimedia.org/wikipedia/commons/0/08/AutoCad_logo.svg)`}}></div>
          <div className="box col" style={{backgroundImage : `url(https://www.datocms-assets.com/14946/1638186862-reactjs.png?auto=format&corner-radius=16&fit=crop&h=312&mask=corners&q=45&w=568&dpr=4)`}}></div>
          <div className="box" style={{backgroundImage : `url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png)`}}></div>
          <div className="box row" style={{backgroundImage : `url(https://www.tutorialrepublic.com/lib/images/javascript-illustration.png)`}}></div>
          <div className="box col" style={{backgroundImage : `url(https://www.tutorialrepublic.com/lib/images/html-illustration.png)`}}></div>
          <div className="box" style={{backgroundImage : `url(https://www.tutorialrepublic.com/lib/images/css-illustration.png)`}}></div>
          <div className="box col" style={{backgroundImage : `url(https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg)`}}></div>
        </div>
      </div>
    </>
  )
}

export default About

