import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCar, deleteCar } from "../../models/Car";

export default function CarView() {
  const { id } = useParams();
  const [car, setCar] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getCar(id);
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setCar(data.payload);
      setLoaded(true);
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    if (car.model === formData) {
      const data = await deleteCar(id);
      if (data.status === 200) {
      } else {
      }
    } else {
      setInfo("Wrong input");
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Car not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Car is loading</p>
      </>
    );
  }

  return (
    <>
      <h1>View car</h1>
      <p>{id}</p>
      <p>{car.brand}</p>
      <p>{car.model}</p>
      <p>{car.color}</p>
      <p>{car.price}</p>

      <form>
        <input type="text" onChange={handleChange} placeholder={car.model} />
        <button>Delete car</button>
        <p>{info}</p>
      </form>

      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
