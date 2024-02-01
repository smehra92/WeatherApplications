import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import InputBox from './components/InputBox'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      {/* <Route path="/inputbox" element={<InputBox />} /> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
