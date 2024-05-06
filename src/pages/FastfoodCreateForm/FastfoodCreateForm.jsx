import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createFastfood } from "../../models/Fastfood";

export default function FastfoodCreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const fastfood = await createFastfood(formData);
    if (fastfood.status === 201) {
      redirectToSuccesPage(fastfood.payload._id);
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
  const redirectToSuccesPage = (id) => {
    navigate(`/createdfastfood/${id}`);
  };

  return (
    <>
      <h1>Fastfood create form</h1>
      <form>
        <input
          type="text"
          name="company"
          required
          placeholder="Enter company"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="menu"
          required
          placeholder="Enter menu"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          name="price"
          required
          placeholder="Enter price"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create fastfood</button>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
