import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Clicker() {
  //hooky poznáme pomocí počínajícího slova use
  //název proměnné, setter = useState(základníh_odnota)
  const [cookies, setCookies] = useState(0);

  //funkce useEffectu se zavolá, když se hodnota v [] změní
  useEffect(() => {
    document.title = `Cookies: ${cookies}`
  }, [cookies])
  
  //pokud necháme [] prázdné, fce useEffectu se zavolá jen při načtení componenty
  useEffect(() => {
    document.title = `Page loaded`
  }, [])

  const increaseCookies = () => {
    setCookies(cookies + 1);
  };

  return (
    <>
      <h1>Clicker</h1>
      <button onClick={increaseCookies}>Incerase cookie</button>
      <p>Number of cookies: {cookies}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
