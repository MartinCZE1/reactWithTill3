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

import DeodorantCreateForm from "./DeodorantCreateForm/DeodorantCreateForm";
import DeodorantUpdateForm from "./DeodorantUpdateForm/DeodorantUpdateForm";
import DeodorantView from "./DeodorantView/DeodorantView";
import DeodorantList from "./DeodorantList/DeodorantList";
import CreatedDeodorant from "./DeodorantCreateForm/CreatedDeodorant";

import FastfoodCreateForm from "./FastfoodCreateForm/FastfoodCreateForm";
import FastfoodUpdateForm from "./FastfoodUpdateForm/FastfoodUpdateForm";
import FastfoodView from "./FastfoodView/FastfoodView";
import FastfoodList from "./FastfoodList/FastfoodList";
import CreatedFastfood from "./FastfoodCreateForm/CreatedFastfood";

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
        <Route path="/createdstudent/:id" element={<CreatedStudent />}></Route>
        
        <Route path="/createdeodorant" element={<DeodorantCreateForm />} />
        <Route path="/updatedeodorant/:id" element={<DeodorantUpdateForm />} />
        <Route path="/deodorant/:id" element={<DeodorantView />} />
        <Route path="/deodorants" element={<DeodorantList />} />
        <Route path="/createddeodorant/:id" element={<CreatedDeodorant />}></Route>
        
        <Route path="/createfastfood" element={<FastfoodCreateForm />} />
        <Route path="/updatefastfood/:id" element={<FastfoodUpdateForm />} />
        <Route path="/fastfood/:id" element={<FastfoodView />} />
        <Route path="/fastfoods" element={<FastfoodList />} />
        <Route path="/createdfastfood/:id" element={<CreatedFastfood />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
