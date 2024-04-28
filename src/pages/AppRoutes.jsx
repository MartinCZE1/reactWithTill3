import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import Clicker from "./Clicker/Clicker";
import CarCreateForm from "./CarCreateForm/CarCreateForm";
import CarUpdateForm from "./CarUpdateForm/CarUpdateForm";
import CarView from "./CarView/CarView";
import CarList from "./CarList/CarList";
import CreatedCar from "./CarCreateForm/CreatedCar";
import StudentCreateForm from "./StudentCreateForm/StudentCreateForm";
import StudentUpdateForm from "./StudentUpdateForm/StudentUpdateForm";
import StudentView from "./StudentView/StudentView";
import StudentList from "./StudentList/StudentList";
import CreatedStudent from "./StudentCreateForm/CreatedStudent";

import PhoneCreateForm from "./PhoneCreateForm/PhoneCreateForm";
import PhoneUpdateForm from "./PhoneUpdateForm/PhoneUpdateForm";
import PhoneView from "./PhoneView/PhoneView";
import PhoneList from "./PhoneList/PhoneList";
import CreatedPhone from "./PhoneCreateForm/CreatedPhone";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/clicker" element={<Clicker />} />
        <Route path="/createcar" element={<CarCreateForm />} />
        <Route path="/updatecar/:id" element={<CarUpdateForm />} />
        <Route path="/car/:id" element={<CarView />} />
        <Route path="/cars" element={<CarList />} />
        <Route path="/createdcar/:id" element={<CreatedCar />}></Route>
        <Route path="/createstudent" element={<StudentCreateForm />} />
        <Route path="/updatestudent/:id" element={<StudentUpdateForm />} />
        <Route path="/student/:id" element={<StudentView />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/createdstudent/:id" element={<CreatedStudent />} />

        <Route path="/createphone" element={<PhoneCreateForm />} />
        <Route path="/updatephone/:id" element={<PhoneUpdateForm />} />
        <Route path="/phone/:id" element={<PhoneView />} />
        <Route path="/phones" element={<PhoneList />} />
        <Route path="/createdphone/:id" element={<CreatedPhone />} />
      </Routes>
    </BrowserRouter>
  );
}
