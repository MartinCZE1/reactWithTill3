import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDeodorant, deleteDeodorant } from "../../models/Deodorant";

export default function DeodorantView() {
  const { id } = useParams();
  const [deodorant, setDeodorant] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getDeodorant(id);
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setDeodorant(data.payload);
      setLoaded(true);
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (deodorant.brand === formData) {
      const data = await deleteDeodorant(id);
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
        <p>Deodorant not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Deodorant is loading</p>
      </>
    );
  }

  return (
    <>
      <h1>View Deodorant</h1>
      <p>{id}</p>
      <p>{deodorant.brand}</p>
      <p>{deodorant.duration}</p>
      <p>{deodorant.price}</p>

      <Link to={`/updatedeodorant/${id}`}>
        <p>Update deodorant</p>
      </Link>

      <form>
        <input type="text" onChange={handleChange} placeholder={deodorant.brand} />
        <button onClick={handleDelete}>Delete deodorant</button>
        <p>{info}</p>
      </form>

      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
