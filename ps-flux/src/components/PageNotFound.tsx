import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <h1>Page not found!</h1>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </>
  );
}

export default PageNotFound;
