import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function CarUpdateForm() {
  const { id } = useParams();
  return (
    <>
      <h1>Update car</h1>
      <p>{id}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
