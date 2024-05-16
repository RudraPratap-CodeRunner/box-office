import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import AppTitle from './AppTitle'

const MainLayout = () => {
  return (
    <div>
        <Nav/>
        <AppTitle/>
        <Outlet/>
    </div>
  )
}

export default MainLayout