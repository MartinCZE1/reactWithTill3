import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <h1>Hlavní stránka</h1>
      <Link to={"/createcar"}>
        <p>Create car</p>
      </Link>

      <Link to={"/cars"}>
        <p>Cars</p>
      </Link>
    </>
  );
}
