import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import Main from "./components/Main/Main"
import Sidebar from "./components/Sidebar/Sidebar"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Sidebar />} />
        </Routes>
      </Router>
      <Main />

    </>
  )
}

export default App