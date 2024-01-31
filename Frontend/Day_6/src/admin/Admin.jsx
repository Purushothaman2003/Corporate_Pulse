import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Adminhome from './Adminhome'



function Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Adminhome />
    </div>
  )
}

export default Admin