import { Link } from "react-router-dom";

export default function PhoneLink(props) {
  return (
    <>
      <Link to={`/phone/${props._id}`}>
        <p>Model: {props.model}</p>
        <p>View phone: {props._id}</p>
      </Link>
    </>
  );
}
