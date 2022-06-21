import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroeScreen } from '../components/heroes/HeroeScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
  return (
    <>
          <Navbar/>

          <div className='container'>
              <Routes>
                
                <Route path="/dc" element={<DcScreen />} />
                
                <Route path="/marvel" element={<MarvelScreen />} />
                
                <Route path="/hero/:heroeId" element={<HeroeScreen />} />
                
                <Route path="/search" element={<SearchScreen />} />
                            
              </Routes>

          </div>
        
          

     </>       

  )
}
