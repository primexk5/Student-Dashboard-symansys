import React from 'react'
import ManagementDashboard from '../components/Dashboard/ManagementDashboard'
import StudentDashboard from '../components/Dashboard/StudentDashboard'

const Home = ({isAdmin}) => {
  return (
    <div className='px-4'>
        {isAdmin? <ManagementDashboard />: <StudentDashboard />}
    </div>
  )
}

export default Home