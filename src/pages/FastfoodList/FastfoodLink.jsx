import { Link } from "react-router-dom";

export default function FastfoodLink(props) {
  return (
    <>
      <Link to={`/fastfood/${props._id}`}>
        <p>Company: {props.company}</p>
        <p>View fastfood: {props._id}</p>
      </Link>
    </>
  );
}
