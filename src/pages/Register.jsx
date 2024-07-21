import { Form, useActionData } from "react-router-dom";
import { FormInput } from "../components";
import { useEffect } from "react";

//customhook
import { useRegister } from "../hooks/useRegister";

import { Link } from "react-router-dom";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  let photoURL = formData.get("photoURL");
  let displayName = formData.get("displayName");
  return { email, password, photoURL, displayName };
};

function Register() {
  const userData = useActionData();
  const { register, isPanding, registerWithGoogle } = useRegister();
  useEffect(() => {
    if (userData) {
      register(
        userData.email,
        userData.password,
        userData.displayName,
        userData.photoURL
      );
    }
  }, [userData]);

  return (
    <div className="grid min-h-screen">
      <video
        autoPlay
        loop
        muted
        className=" bg-cover h-screen absolute -z-10 opacity-90 object-cover w-full "
        src="/RegisterBg.mp4"
      ></video>
      <div className=" h-full  grid place-items-center px-4">
        <div className=" card bg-base-100 bg-opacity-60  w-full max-w-96 shadow-xl  px-8 py-4 ">
          <Form method="post" className="flex flex-col items-center ">
            <h1 className=" text-3xl font-semibold">Register</h1>
            <FormInput type="text" label="displayName" name="displayName" />
            <FormInput type="url" label="photoURL" name="photoURL" />
            <FormInput type="email" label="email" name="email" />
            <FormInput type="password" label="password" name="password" />
            <div className=" w-full mt-2">
              {!isPanding && (
                <button className="btn btn-primary btn-block">Register</button>
              )}
              {isPanding && (
                <button disabled className="btn btn-primary btn-block">
                  Loading...
                </button>
              )}
            </div>
          </Form>

          <div className=" w-full mt-5">
            {isPanding && (
              <button
                disabled
                onClick={registerWithGoogle}
                className="btn btn-secondary btn-block"
              >
                Loading...
              </button>
            )}
            {!isPanding && (
              <button
                onClick={registerWithGoogle}
                className="btn btn-secondary btn-block"
              >
                Google
              </button>
            )}
          </div>
          <div className="text-center mt-5">
            If you have an account,
            <Link to="/login" className="link link-primary">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
