import { Link } from "react-router-dom";
import DeodorantLink from "./DeodorantLink";
import { useState, useEffect } from "react";
import { getAllDeodorants } from "../../models/Deodorant";

export default function DeodorantList() {
  const [deodorants, setDeodorants] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const load = async () => {
    const data = await getAllDeodorants();
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setDeodorants(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Deodorants not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Deodorants are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Show all deodorants</h1>
      {deodorants.map((deodorant, index) => (
        <DeodorantLink key={index} {...deodorant} />
      ))}
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
