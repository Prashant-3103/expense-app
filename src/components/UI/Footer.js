import React from 'react'
import './Footer.css'
import{FaInstagram, FaGithub, FaLinkedin,FaGlobe} from 'react-icons/fa'

const Footer = () => {
  const handleGithubLink = () => {
    window.open('https://github.com/Prashant-3103', '_blank');
  };
  const handleLinkedInLink = () => {
    window.open('https://www.linkedin.com/in/prashant-kumar-choudhary-5a5337207/', '_blank');
  };
  return (
<div>
  <footer>
    <ul class="logo">
      <h1>EXPENSE APP</h1>
    </ul>
    <ul class="links">
      <li>HOME</li>
      <li>About</li>
      <li>Full project</li>
    </ul>
    <ul class="social-icons">

    <li>  <FaGithub onClick={handleGithubLink}/> </li>
   <li> <FaLinkedin onClick={handleLinkedInLink} /></li>
      <li><FaGlobe/></li>
    </ul>
  </footer>
</div>

  )
}

export default Footer
