import React from 'react'
import { Routes, Route, Outlet} from 'react-router-dom'

import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
  return (

     <>
     <h1>Marvel Comics</h1>
     <hr/>

       <HeroList publisher="Marvel Comics"/>
    </>
  
    
  )
}
