import { Link } from "react-router-dom";
import CarLink from "./CarLink";
import { useState, useEffect } from "react";
import { getAllCars } from "../../models/Car";

export default function CarList() {
  const [cars, setCars] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const load = async () => {
    const data = await getAllCars();
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setCars(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Cars not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Cars are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Show all car</h1>
      {cars.map((car, index) => (
        <CarLink key={index} {...car} />
      ))}
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
