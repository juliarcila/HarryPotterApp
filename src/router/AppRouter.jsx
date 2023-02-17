import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { LoginPage } from '../auth'
import { HPRoutes } from '../harryPotter/routes/HPRoutes'
import { PrivateRouter, PublicRouter } from './index'


export const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route path="/login" element={
          <PublicRouter>
            <LoginPage />
          </PublicRouter>
        } />


        
        <Route path='/*' element={
          <PrivateRouter>
            <HPRoutes />
          </PrivateRouter>
        } />
        
        {/* <Route path='/login' element={ <LoginPage /> } /> */}
        {/* <Route path='*' element={ <HPRoutes /> } /> */}
        

      </Routes>
    </>
  )
}
