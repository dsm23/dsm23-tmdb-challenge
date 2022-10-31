import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context";
import Button from "./button";
import Input from "./input";

const Login = () => {
  const [apiKey, setApiKey] = useState("");
  const navigate = useNavigate();

  const { storeApiKey } = useAuth();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setApiKey(event.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    storeApiKey(apiKey);
    navigate("/");
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Enter your api key to continue
          </h1>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="key"
                  className="block text-sm font-medium text-gray-700"
                >
                  Api Key
                </label>
                <div className="mt-1">
                  <Input id="key" name="key" required onChange={handleChange} />
                </div>
              </div>

              <div>
                <Button type="submit" className="w-full">
                  Submit to store in context
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
