import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import NoMatch from './components/NoMatch'
import AddAssets from './components/AddAssets'

function App() {

  return (
    <div className='w-full max-h-fit overflow-y-clip'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Home>
              </Home>
            </>
          }
        ></Route>
        <Route
          path='/admin'
          element={
            <>
              <AddAssets />
            </>
          }
        ></Route>
        <Route
          path='*'
          element={
            <>
              <NoMatch />
            </>
          }
        ></Route>
      </Routes>
    </div>
  )
}

export default App
