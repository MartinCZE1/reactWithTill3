export const getAllPhones = async () => {
  const req = await fetch("http://localhost:3000/phones", {
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

export const getPhone = async (id) => {
  const req = await fetch(`http://localhost:3000/phones/${id}`, {
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

export const createPhone = async (formData) => {
  const req = await fetch("http://localhost:3000/phones", {
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

export const updatePhone = async (id, formData) => {
  const req = await fetch(`http://localhost:3000/phones/${id}`, {
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

export const deletePhone = async (id) => {
  const req = await fetch(`http://localhost:3000/phones/${id}`, {
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
