import { useState } from "react";

function Skills() {
  const [skill, setSkill] = useState([]);

  const handleSkills = (event) => {
    console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSkill([...skill, event.target.value]);
    } else {
      setSkill([...skill.filter((item) => item != event.target.value)]);
    }
  };

  const users = [
    {
      id: 1,
      name: "Umesh",
      email: "umesh@example.com",
      address: "Pune",
      edu: "B.Tech",
    },
    {
      id: 2,
      name: "Ramesh",
      email: "ramesh@example.com",
      address: "Mumbai",
      edu: "MBA",
    },
    {
      id: 3,
      name: "Suresh",
      email: "suresh@example.com",
      address: "Delhi",
      edu: "B.Com",
    },
  ];
  return (
    <div>
      Skills componenet <br />
      <br />
      <input type="checkbox" value="php" id="php" onChange={handleSkills} />
      <label htmlFor="php">PHP</label>
      <br />
      <input type="checkbox" value="react" id="react" onChange={handleSkills} />
      <label htmlFor="react">React</label>
      <br />
      <input type="checkbox" value="next" id="next" onChange={handleSkills} />
      <label htmlFor="next">Next</label>
      <br />
      <input
        type="checkbox"
        value="angular"
        id="angular"
        onChange={handleSkills}
      />
      <label htmlFor="angular">Angular</label>
      <br />
      <h1>Skills: {skill.toString()} </h1>
      <br />
      <br />
      <table border={1}>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>Education</th>

        {users.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.edu}</td>
            <td>{item.address}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Skills;
