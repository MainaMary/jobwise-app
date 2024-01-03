import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log({ error });
  return (
    <div>
      Error page
      <Link to="/">Back home</Link>
    </div>
  );
};

export default Error;
