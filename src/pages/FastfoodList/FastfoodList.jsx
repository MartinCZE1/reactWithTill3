import { Link } from "react-router-dom";
import FastfoodLink from "./FastfoodLink";
import { useState, useEffect } from "react";
import { getAllFastfoods } from "../../models/Fastfood";

export default function FastfoodList() {
  const [fastfoods, setFastfoods] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const load = async () => {
    const data = await getAllFastfoods();
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setFastfoods(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Fastfoods not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Fastfoods are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Show all fastfoods</h1>
      {fastfoods.map((fastfood, index) => (
        <FastfoodLink key={index} {...fastfood} />
      ))}
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
