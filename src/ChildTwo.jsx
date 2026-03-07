export default function ChildTwo({ user }) {
  return (
    <div>
      <h1>Display User Name - {user.name}</h1>
      <h1>Display User Address - {user.address.city}</h1>
      <h1>Display User Mobile - {user.mobile}</h1>
    </div>
  );
}
