import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <h1>Hlavní stránka</h1>
      <Link to={"/clicker"}>
        <p>Go to Clicker</p>
      </Link>

      <Link to={"/createcar"}>
        <p>Go to create car</p>
      </Link>

      <Link to={"/updatecar"}>
        <p>Go to update car</p>
      </Link>

      <Link to={"/car"}>
        <p>Go to view car</p>
      </Link>
      
      <Link to={"/cars"}>
        <p>Go to list with cars</p>
      </Link>
    </>
  );
}
