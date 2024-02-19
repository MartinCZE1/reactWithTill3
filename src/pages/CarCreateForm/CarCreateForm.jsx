import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createCar } from "../../models/Car";

export default function CarCreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const car = await createCar(formData);
    if (car.status === 201) {
      redirectToSuccesPage(car.payload._id);
    } else {
      setInfo(car.msg);
    }
  };
  const handleChange = () => {};
  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };
  const redirectToSuccesPage = (id) => {
    navigate(`/createdcar/${id}`);
  };

  return (
    <>
      <h1>Car create form</h1>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
