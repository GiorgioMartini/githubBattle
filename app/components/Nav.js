import React from 'react'
import { ThemeConsumer } from '../contexts/theme'
import { NavLink } from 'react-router-dom'


const activeStyle = {
  color: 'rgb(255,0,0)',

}

export default function Nav () {
  return (
    <ThemeConsumer>
      {({theme, toggleTheme}) => (
        <nav className='row space-between'>
          <ul>
            <li>
              <NavLink exact className='nav-link' to='/' activeStyle={activeStyle}>Popular</NavLink>
            </li>
            <li>
              <NavLink className='nav-link' to='/battle' activeStyle={activeStyle}>Battle</NavLink>
            </li>
          </ul>
         <button
          style={{fontSize: 30}}
          className='btn-clear'
          onClick={toggleTheme}
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  )
} 
