import { Route, Routes } from "react-router"
import PageLayout from "./components/Layout/PageLayout"
import { useState } from "react"
import Home from "./pages/Home"
import Teachers from "./pages/Teachers"
import Students from "./pages/Students"
import AllStudentsLists from "./components/AllStudentsLists"
import AddNew from "./components/AddNew"
import Fees from "./pages/Fees"
import Finance from "./pages/Finance"
import FeesManagement from "./components/FeesManagement"
import SchoolExpenses from "./components/SchoolExpenses"
import Calender from "./pages/Calender"
import Timetable from "./pages/Timetable"
import Message from "./pages/Message"
import Settings from "./pages/Settings"
import PageNotFound from "./pages/PageNotFound"



function App() {
  const  [isAdmin, setIsAdmin] = useState(true)
  return (
    <div>
      <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home isAdmin={isAdmin} />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="students" element={<Students />}>
              <Route index element={<AllStudentsLists />} />
              <Route path="addnew" element={<AddNew />} />
            </Route>
            <Route path="fees" element={<Fees />} />
            <Route path="finance" element={<Finance />}>
              <Route index element={<FeesManagement />} />
              <Route path="schoolexpenses" element={<SchoolExpenses />} />
            </Route>
            <Route path="calendar" element={<Calender />} />
            <Route path="timetable" element={<Timetable />} />
            <Route path="message" element={<Message />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
      </Routes>
    </div>
      

  )
}

export default App
