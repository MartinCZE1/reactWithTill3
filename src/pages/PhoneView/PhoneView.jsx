import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPhone, deletePhone } from "../../models/Phone";

export default function PhoneView() {
  const { id } = useParams();
  const [phone, setPhone] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getPhone(id);
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setPhone(data.payload);
      setLoaded(true);
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (phone.brand === formData) {
      const data = await deletePhone(id);
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
        <p>Phone not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Phone is loading</p>
      </>
    );
  }

  return (
    <>
      <h1>View phone</h1>
      <p>{id}</p>
      <p>{phone.brand}</p>
      <p>{phone.os}</p>
      <p>{phone.color}</p>
      <p>{phone.price}</p>

      <Link to={`/updatephone/${id}`}>
        <p>Update phone</p>
      </Link>

      <form>
        <input type="text" onChange={handleChange} placeholder={phone.brand} />
        <button onClick={handleDelete}>Delete phone</button>
        <p>{info}</p>
      </form>

      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
