import { Link } from "react-router-dom";
import StudentLink from "./StudentLink";
import { useState, useEffect } from "react";
import { getAllStudents } from "../../models/Student";

export default function StudentList() {
  const [students, setStudents] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const load = async () => {
    const data = await getAllStudents();
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setStudents(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Students not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Students are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Show all students</h1>
      {students.map((student, index) => (
        <StudentLink key={index} {...student} />
      ))}
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
