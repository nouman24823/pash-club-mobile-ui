import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import UserRoutes from './routes/UserRoutes'

const App = () => {
  return (
    <div className="flex bg-[#E4DFD5] justify-center items-center h-screen font-sans">
      <div className="mobile overflow-hidden border-3 bg-[#F0EDE8] w-[310px] rounded-[36px] border-[#1C1510] h-[90vh] flex flex-col shadow-2xl relative">
        <BrowserRouter>
          <UserRoutes />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App