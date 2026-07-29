import React from 'react'
import { useRouteError, isRouteErrorResponse } from 'react-router'
const Error = () => {
    const error = useRouteError();
    {/** way to write comment in JSX */}

    if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>{error.status}</h1>
        <p>{error.statusText}</p>
        <p>{error.data}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error.message}</p> 
    </div>
  );
}

export default Error
