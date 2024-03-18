export const getAllStudents = async () => {
    const req = await fetch("http://localhost:3000/students", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "GET",
    });
    const data = await req.json();
    return {
      payload: data.payload,
      msg: data.msg,
      status: req.status,
    };
  };
  
  export const getStudent = async (id) => {
    const req = await fetch(`http://localhost:3000/students/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "GET",
    });
    const data = await req.json();
    return {
      payload: data.payload,
      msg: data.msg,
      status: req.status,
    };
  };
  
  export const createStudent = async (formData) => {
    const req = await fetch("http://localhost:3000/students", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    });
    const data = await req.json();
    return {
      payload: data.payload,
      msg: data.msg,
      status: req.status,
    };
  };
  
  export const updateStudent = async (id, formData) => {
    const req = await fetch(`http://localhost:3000/students/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "PUT",
      body: JSON.stringify(formData),
    });
    const data = await req.json();
    return {
      payload: data.payload,
      msg: data.msg,
      status: req.status,
    };
  };
  
  export const deleteStudent = async (id) => {
    const req = await fetch(`http://localhost:3000/students/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "DELETE",
    });
    const data = await req.json();
    return {
      payload: data.payload,
      msg: data.msg,
      status: req.status,
    };
  };
  