//rrd
import { Form, useActionData } from "react-router-dom";
import { Link } from "react-router-dom";

//components
import { FormInput } from "../components";

//react
import { useEffect } from "react";

//custom-hooks
import { useLogin } from "../hooks/useLogin";
import { useRegister } from "../hooks/useRegister";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  return { email, password };
};

function Login() {
  const userData = useActionData();

  const { loginUser, isPanding } = useLogin();
  const { isPanding: IsPandingUseRegister, registerWithGoogle } = useRegister();

  useEffect(() => {
    if (userData) {
      loginUser(userData.email, userData.password);
    }
  }, [userData]);
  return (
    <div className="grid min-h-screen">
      <video
        autoPlay
        loop
        muted
        className=" bg-cover h-screen absolute -z-10 opacity-90 object-cover w-full "
        src="/LoginBg.mp4"
      ></video>

      <div className=" h-full  grid place-items-center px-4">
        <div className=" card bg-base-100 bg-opacity-60  w-full max-w-96 shadow-xl  p-8 ">
          <Form method="post" className="flex flex-col items-center gap-5">
            <h1 className=" text-3xl font-bold">Login</h1>
            <FormInput type="text" label="email" name="email" />
            <FormInput type="password" label="password" name="password" />
            <div className=" w-full">
              {!isPanding && (
                <button className="btn btn-primary btn-block">Login</button>
              )}
              {isPanding && (
                <button disabled className="btn btn-primary btn-block">
                  Loading...
                </button>
              )}
            </div>
          </Form>
          <div className=" w-full mt-5">
            {!IsPandingUseRegister && (
              <button
                onClick={registerWithGoogle}
                className="btn btn-secondary btn-block"
              >
                Google
              </button>
            )}
            {IsPandingUseRegister && (
              <button
                disabled
                onClick={registerWithGoogle}
                className="btn btn-secondary btn-block"
              >
                Loading...
              </button>
            )}
          </div>
          <div className="text-center mt-5 text-neutral">
            If you don't have account,
            <Link to="/register" className="link link-primary">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
