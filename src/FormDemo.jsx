import React, {
  startTransition,
  useState,
  useTransition,
  useActionState,
} from "react";

import { useId } from "react";

export const FormDemo = () => {
  const id = useId();

  const handleSubmit = async (previousData, formData) => {
    let name = formData.get("name");
    let email = formData.get("email");

    await new Promise((res) => setTimeout(res, 2000));

    console.log("called", name, email);

    if (name && email) {
      return { message: "data submitted" };
    } else {
      return { error: "fail to submit" };
    }
  };
  const [data, action, pending] = useActionState(handleSubmit, undefined);

  return (
    <div>
      <form action={action}>
        <div>
          <label htmlFor={id}>Username</label>
          <input id={id} type="text" />
        </div>

        <input type="text" placeholder="Name" name="name" />
        <br />
        <br />
        <input type="text" placeholder="Email" name="email" />
        <br />
        <br />
        <button disabled={pending}> Submit</button>
        {data?.error && <span style={{ color: "red" }}>{data.error}</span>}
        {data?.message && (
          <span style={{ color: "green" }}>{data.message}</span>
        )}
      </form>
    </div>
  );
};

export default FormDemo;
