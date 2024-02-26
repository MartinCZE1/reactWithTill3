import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import Clicker from "./Clicker/Clicker";
import CarCreateForm from "./CarCreateForm/CarCreateForm";
import CarUpdateForm from "./CarUpdateForm/CarUpdateForm";
import CarView from "./CarView/CarView";
import CarList from "./CarList/CarList";
import CreatedCar from "./CarCreateForm/CreatedCar";

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
      </Routes>
    </BrowserRouter>
  );
}
