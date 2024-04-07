
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import UserRouters from "./routes/userRouter/UserRouters";
import AdminRouters from "./routes/userRouter/AdminRouters";
import { InstructorRouter } from "./routes/instructorRouter/InstructorRouter";


function App() {
 
  return (
    
    <>
    <div className="App">
        <Router>
          <Routes>
            <Route path="/*" element={<UserRouters/> } />
            <Route path="/admin/*" element={<AdminRouters/> } />
            <Route path="/instructor/*" element={<InstructorRouter/> } />
          </Routes>
        </Router>
    </div>
    </>
  )
}

export default App
