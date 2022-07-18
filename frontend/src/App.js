import Header from './component/Header'
import MainBanner from './component/MainBanner'
import { Button } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Login from './page/Login'
import axios from 'axios'

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header></Header>
              <MainBanner></MainBanner>
              <Button
                onClick={() => {
                  axios
                    .get('/api/hello')
                    .then((request) => {
                      console.log(request.data)
                    })
                    .catch((error) => {
                      console.log(error)
                    })
                }}
              >
                {' '}
                지연님 여기 버튼입니다.
              </Button>
            </>
          }
        />
        <Route path="/login" element={<Login></Login>} />
      </Routes>
    </div>
  )
}

export default App
