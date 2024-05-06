import { Link } from "react-router-dom";

export default function DeodorantLink(props) {
  return (
    <>
      <Link to={`/deodorant/${props._id}`}>
        <p>Brand: {props.brand}</p>
        <p>View deodorant: {props._id}</p>
      </Link>
    </>
  );
}
