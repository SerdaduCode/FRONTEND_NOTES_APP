import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p className="my-2 italic">The page you are looking for doesn't exist.</p>
      <Link to="/" className="text-primary underline my-2">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
