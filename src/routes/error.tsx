import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.message}</i>
      </p>
    </div>
  );
};

export default Error;
