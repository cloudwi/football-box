import Header from './component/Header'
import MainBanner from './component/MainBanner'
import { Routes, Route } from 'react-router-dom'
import Login from './page/Login'
<<<<<<< HEAD
import Signup from './page/Signup'
=======
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useState } from 'react'
import Box from '@mui/material/Box'
>>>>>>> 4151894 (calender add)
function App() {
  const [value, setValue] = useState(new Date())

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainBanner></MainBanner>
              <Box sx={{ m: 5 }}></Box>
              <Calendar onChange={setValue} value={value}></Calendar>
            </>
          }
        />
        <Route path="/login" element={<Login></Login>} />
<<<<<<< HEAD
        <Route path="/signup" element={<Signup></Signup>} />
=======
        <Route path="/match" element={<div></div>} />
        <Route path="*" element={<div></div>} />
>>>>>>> 4151894 (calender add)
      </Routes>
    </div>
  )
}

export default App
