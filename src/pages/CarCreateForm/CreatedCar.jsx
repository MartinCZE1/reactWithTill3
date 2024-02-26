import { Link, useParams } from "react-router-dom";

export default function CreatedCar() {
  const { id } = useParams();
  return (
    <>
      <p>Your car: {id}</p>

      <Link to={`/car/${id}`}>
        <p>View car</p>
      </Link>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
