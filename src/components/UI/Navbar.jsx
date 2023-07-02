import React, { useRef } from 'react'
import {FaBars, FaTimes } from 'react-icons/fa'
import './NavBar.css'
import {useNavigate} from 'react-router-dom'
import logo from './logo.png'

const Navbar = () => {

const navRef = useRef()

const showNavBar=()=>{
  navRef.current.classList.toggle("responsive_nav")
}


  return (
 <header>

    <img src= {logo}alt="logo" className='logo' />
    <nav ref={navRef}>
        <a href="/home">HOME</a>
        <a href="/about">ABOUT</a>
        <a href="/new-expense">ADD NEW EXPENSE</a>
        <a href="/expenses">EXPENSE LIST</a>
        <button onClick={showNavBar} className='nav-btn nav-close-btn'> <FaTimes/> </button>
    </nav>
    <button onClick={showNavBar} className='nav-btn nav-open-btn'><FaBars/></button>
 </header>
  )
}

export default Navbar
