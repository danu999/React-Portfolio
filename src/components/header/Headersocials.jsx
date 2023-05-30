import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
import {FaDribbbleSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/danu-saputra-a33b08258/"><FaLinkedin/></a>
      <a href="https://github.com/danu999"><FaGithubSquare/></a>
      <a href="https://dribbble.com/danu090909"><FaDribbbleSquare/></a>
    </div>
  )
}

export default HeaderSocials