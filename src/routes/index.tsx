import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Students from "../pages/Students";
import CreateStudent from "../pages/crud/createStudent";
import CreateCourse from "../pages/crud/createCourse";
import Teacher from "../pages/Teacher";
import CreateTeacher from "../pages/crud/createTeacher";
import Student from "../pages/Student/Student";
import NotFound from "../pages/NotFound";
import Semester from "../pages/Semester";

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/course" element={<Home />} />
        <Route path="/semester" element={<Semester />} />
        <Route path="/student" element={<Students />} />
        <Route path="/student/:id" element={<Student />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/createStudent" element={<CreateStudent />} />
        <Route path="/createCourse" element={<CreateCourse />} />
        <Route path="createTeacher" element={<CreateTeacher />} />
        <Route path="notFound" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
