import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getStudent, deleteStudent } from "../../models/Student";

export default function CarView() {
  const { id } = useParams();
  const [student, setStudent] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getStudent(id);
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setStudent(data.payload);
      setLoaded(true);
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (student.model === formData) {
      const data = await deleteStudent(id);
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
        <p>Student not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Student is loading</p>
      </>
    );
  }

  return (
    <>
      <h1>View Student</h1>
      <p>{id}</p>
      <p>{student.name}</p>
      <p>{student.isic}</p>
      <p>{student.classroom}</p>

      <Link to={`/updatestudent/${id}`}>
        <p>Update student</p>
      </Link>

      <form>
        <input type="text" onChange={handleChange} placeholder={student.model} />
        <button onClick={handleDelete}>Delete student</button>
        <p>{info}</p>
      </form>

      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
