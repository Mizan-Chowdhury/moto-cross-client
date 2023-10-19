import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-3">
      <h1 className="text-6xl font-bold">Oops!</h1>
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-xl">{error.statusText || error.message}</p>
    </div>
  );
};

export default Error;
