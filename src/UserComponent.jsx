export function User({ data }) {
  return (
    <>
      <div>{data.name}</div>
      <div>{data.email}</div>
      <div>{data.address}</div>
    </>
  );
}

export default User;
