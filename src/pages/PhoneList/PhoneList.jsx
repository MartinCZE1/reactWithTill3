import { Link } from "react-router-dom";
import PhoneLink from "./PhoneLink";
import { useState, useEffect } from "react";
import { getAllPhones } from "../../models/Phone";

export default function PhoneList() {
  const [phones, setPhones] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const load = async () => {
    const data = await getAllPhones();
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setPhones(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Phones not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Phones are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Show all phones</h1>
      {phones.map((phone, index) => (
        <PhoneLink key={index} {...phone} />
      ))}
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
