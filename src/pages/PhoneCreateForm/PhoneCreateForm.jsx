import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createPhone } from "../../models/Phone";

export default function PhoneCreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const phone = await createPhone(formData);
    if (phone.status === 201) {
      redirectToSuccesPage(phone.payload._id);
    } else {
      setInfo(phone.msg);
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
    navigate(`/createdphone/${id}`);
  };

  return (
    <>
      <h1>Phone create form</h1>
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
          name="os"
          required
          placeholder="Enter OS"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="color"
          required
          placeholder="Enter color"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          name="price"
          required
          placeholder="Enter price"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create phone</button>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
