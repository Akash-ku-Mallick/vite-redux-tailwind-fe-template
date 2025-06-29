import React from 'react'
import { Outlet } from 'react-router-dom'

const SettingsPage = () => {
  return (
    <div>
        <div>
            Tabs
        </div>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default SettingsPage