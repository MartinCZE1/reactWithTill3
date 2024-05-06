export const getAllDeodorants = async () => {
    const req = await fetch("http://localhost:3000/deodorants", {
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
  
  export const getDeodorant = async (id) => {
    const req = await fetch(`http://localhost:3000/deodorants/${id}`, {
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
  
  export const createDeodorant = async (formData) => {
    const req = await fetch("http://localhost:3000/deodorants", {
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
  
  export const updateDeodorant = async (id, formData) => {
    const req = await fetch(`http://localhost:3000/deodorants/${id}`, {
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
  
  export const deleteDeodorant = async (id) => {
    const req = await fetch(`http://localhost:3000/deodorants/${id}`, {
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
  