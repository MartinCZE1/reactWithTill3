import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFastfood, deleteFastfood } from "../../models/Fastfood";

export default function FastfoodView() {
  const { id } = useParams();
  const [fastfood, setFastfood] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getFastfood(id);
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setFastfood(data.payload);
      setLoaded(true);
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (fastfood.company === formData) {
      const data = await deleteFastfood(id);
      if (data.status === 200) {
        navigate("/");
      } else {
        setInfo(data.msg);
      }
    } else {
      setInfo("Wrong input");
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Fastfood not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Fastfood is loading</p>
      </>
    );
  }

  return (
    <>
      <h1>View Fastfood</h1>
      <p>{id}</p>
      <p>{fastfood.company}</p>
      <p>{fastfood.menu}</p>
      <p>{fastfood.price}</p>

      <Link to={`/updatefastfood/${id}`}>
        <p>Update fastfood</p>
      </Link>

      <form>
        <input type="text" onChange={handleChange} placeholder={fastfood.company} />
        <button onClick={handleDelete}>Delete fastfood</button>
        <p>{info}</p>
      </form>

      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
