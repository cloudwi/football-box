import Header from './component/Header'
import MainBanner from './component/MainBanner'
import { Routes, Route } from 'react-router-dom'
import Login from './page/Login'
import Signup from './page/Signup'
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
        <Route path="/signup" element={<Signup></Signup>} />
      </Routes>
    </div>
  )
}

export default App
