import { Link, useParams } from "react-router-dom";

export default function CreatedDeodorant() {
  const { id } = useParams();
  return (
    <>
      <p>Your deodorant: {id}</p>

      <Link to={`/deodorant/${id}`}>
        <p>View deodorant</p>
      </Link>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
