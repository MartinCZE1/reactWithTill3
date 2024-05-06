import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createDeodorant } from "../../models/Deodorant";

export default function DeodorantCreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const deodorant = await createDeodorant(formData);
    if (deodorant.status === 201) {
      redirectToSuccesPage(deodorant.payload._id);
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
  const redirectToSuccesPage = (id) => {
    navigate(`/createddeodorant/${id}`);
  };

  return (
    <>
      <h1>Deodorant create form</h1>
      <form>
        <input
          type="text"
          name="brand"
          required
          placeholder="Enter brand"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="duration"
          required
          placeholder="Enter duration"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          name="price"
          required
          placeholder="Enter price"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create deodorant</button>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
