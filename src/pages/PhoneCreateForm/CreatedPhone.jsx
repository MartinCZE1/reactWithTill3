import { Link, useParams } from "react-router-dom";

export default function CreatedPhone() {
  const { id } = useParams();
  return (
    <>
      <p>Your phone: {id}</p>

      <Link to={`/phone/${id}`}>
        <p>View phone</p>
      </Link>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
