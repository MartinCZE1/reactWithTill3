import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateFastfood, getFastfood } from "../../models/Fastfood";

export default function FastfoodUpdateForm() {
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

  const postForm = async () => {
    const fastfood = await updateFastfood(id, formData);
    if (fastfood.status === 200) {
      navigate(`/fastfood/${id}`);
    } else {
      setInfo(fastfood.msg);
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
      <h1>Update Fastfood</h1>
      <p>{id}</p>
      <form>
        <input
          type="text"
          defaultValue={fastfood.company}
          name="company"
          required
          placeholder="Enter company"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          defaultValue={fastfood.menu}
          name="menu"
          required
          placeholder="Enter menu"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          defaultValue={fastfood.price}
          name="price"
          required
          placeholder="Enter price"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update fastfood</button>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
