import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function CarView() {
  const { id } = useParams();
  return (
    <>
      <h1>View car</h1>
      <p>{id}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
