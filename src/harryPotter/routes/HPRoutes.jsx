import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import { Navbar } from '../../ui/component/Navbar'
import { GriffindorPage, RavenclawPage, SearchPage, SlytherinPage, CharacterPage } from '../pages'


export const HPRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container mt-3'>
        <Routes>
          <Route path='/gryffindor' element={<GriffindorPage />} />
          <Route path='/slytherin' element={<SlytherinPage />} />
          <Route path='/ravenclaw' element={<RavenclawPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/character/:apodo' element={<CharacterPage />} />

          <Route path='/*' element={<Navigate to="/gryffindor" />} />
        </Routes>
      </div>

    </>
  )
}
