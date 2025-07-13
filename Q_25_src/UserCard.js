const UserCard = ({ name, email, age }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <button onClick={() => console.log(`Clicked on ${name}`)}>Click Me</button>
    </div>
  );
};
export default UserCard;
