import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home (){
  return (
      <>
    <div>Home</div>
    
    <NavLink exact to="/test" >Test component</NavLink>
      </>
  )
}
