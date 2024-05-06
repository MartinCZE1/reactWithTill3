import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateDeodorant, getDeodorant } from "../../models/Deodorant";

export default function DeodorantUpdateForm() {
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

  const postForm = async () => {
    const deodorant = await updateDeodorant(id, formData);
    if (deodorant.status === 200) {
      navigate(`/deodorant/${id}`);
    } else {
      setInfo(deodorant.msg);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handlePost = (e) => {
    e.preventDefault();
    postForm();
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
      <h1>Update Deodorant</h1>
      <p>{id}</p>
      <form>
        <input
          type="text"
          defaultValue={deodorant.brand}
          name="brand"
          required
          placeholder="Enter brand"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          defaultValue={deodorant.duration}
          name="duration"
          required
          placeholder="Enter duration"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          defaultValue={deodorant.price}
          name="price"
          required
          placeholder="Enter price"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update deodorant</button>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
