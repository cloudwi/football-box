import Header from './component/Header'
import MainBanner from './component/MainBanner'
import { Routes, Route } from 'react-router-dom'
import Login from './page/Login'

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainBanner></MainBanner>
            </>
          }
        />
        <Route path="/login" element={<Login></Login>} />
      </Routes>
    </div>
  )
}

export default App
