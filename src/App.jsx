import { Route, Routes } from "react-router"
import Root from "./Root"


function App() {


  return (
    <>
      <Routes>
          <Route path="/" element={<Root />}/>
      </Routes>
    </>
  )
}

export default App
