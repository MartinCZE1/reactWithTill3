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

      <Link to={"/createstudent"}>
        <p>Create student</p>
      </Link>

      <Link to={"/students"}>
        <p>Student</p>
      </Link>
      
      <Link to={"/deodorants"}>
        <p>Deodorants</p>
      </Link>

      <Link to={"/createdeodorant"}>
        <p>Create deodorant</p>
      </Link>
      
      <Link to={"/fastfoods"}>
        <p>Fastfoods</p>
      </Link>

      <Link to={"/createfastfood"}>
        <p>Create fastfood</p>
      </Link>
    </>
  );
}
