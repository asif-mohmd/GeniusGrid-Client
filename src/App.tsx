
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import UserRouters from "./routes/userRouter/UserRouters";


function App() {
 
  return (
    <>
    <div className="App">
        <Router>
          <Routes>
            <Route path="/*" element={<UserRouters/> } />
          </Routes>
        </Router>
    </div>
 
    </>
  )
}

export default App
