import { Link, useParams } from "react-router-dom";

export default function CreatedFastfood() {
  const { id } = useParams();
  return (
    <>
      <p>Your fastfood: {id}</p>

      <Link to={`/fastfood/${id}`}>
        <p>View fastfood</p>
      </Link>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
