import { Link } from "react-router-dom";

export default function StudentLink(props) {
  return (
    <>
      <Link to={`/student/${props._id}`}>
        <p>Name: {props.name}</p>
        <p>View student: {props._id}</p>
      </Link>
    </>
  );
}
