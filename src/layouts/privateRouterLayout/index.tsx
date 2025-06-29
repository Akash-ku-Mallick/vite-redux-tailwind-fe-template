import React from 'react'
import { Outlet } from 'react-router-dom'

const PrivateRouterLayout = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default PrivateRouterLayout