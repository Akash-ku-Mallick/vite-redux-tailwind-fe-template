import React from 'react'
import { Outlet } from 'react-router-dom'
import CurrentPlan from './components/currentPlan'
import OtherPlans from './components/otherPlans'

const PlansPage = () => {
  return (
    <div>
        <div>
            <CurrentPlan />
        </div>
        <div>
            <Outlet />
        </div>
        <div>
            <OtherPlans />
        </div>
    </div>
  )
}

export default PlansPage