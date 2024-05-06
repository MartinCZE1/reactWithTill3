export const getAllFastfoods = async () => {
    const req = await fetch("http://localhost:3000/fastfoods", {
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
  
  export const getFastfood = async (id) => {
    const req = await fetch(`http://localhost:3000/fastfoods/${id}`, {
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
  
  export const createFastfood = async (formData) => {
    const req = await fetch("http://localhost:3000/fastfoods", {
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
  
  export const updateFastfood = async (id, formData) => {
    const req = await fetch(`http://localhost:3000/fastfoods/${id}`, {
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
  
  export const deleteFastfood = async (id) => {
    const req = await fetch(`http://localhost:3000/fastfoods/${id}`, {
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
  