import { useLoaderData } from "react-router-dom";

const UpdateData = () => {
  const singleData = useLoaderData();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const updatedDetails = { username, email, password };
    console.log(updatedDetails);
    fetch(`http://localhost:5001/users/${singleData?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  console.log(singleData);
  return (
    <div>
      <h1>Update Data</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          defaultValue={singleData?.username}
        ></input>
        <br></br>
        <input
          type="email"
          name="email"
          defaultValue={singleData?.email}
        ></input>
        <br></br>
        <input
          type="password"
          name="password"
          defaultValue={singleData?.password}
        ></input>
        <br></br>
        <button type="submit">Update Details</button>
      </form>
    </div>
  );
};

export default UpdateData;
