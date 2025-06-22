import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from 'relay-runtime';
import React from 'react';

export function useRelayEnv() {
  const [environment, setEnvironment] = React.useState(() =>
    createEnvironment()
  );
  const [version, setVersion] = React.useState(0);

  const resetEnvironment = React.useCallback(() => {
    const newEnvironment = createEnvironment();
    setEnvironment(newEnvironment);
    setVersion((prevVersion) => prevVersion + 1);
  }, [setEnvironment, setVersion]);

  return {environment, resetEnvironment, version};
}

function createEnvironment() {
  function fetchQuery(
    operation: RequestParameters,
    variables: Variables,
  ) {
    return fetch('https://localhost:5001/graphql', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        query: operation.text, // GraphQL query string
        variables,
      }),
    }).then(response => {
      console.log(response);
      return response.json();
    });
  }

  const network = Network.create(
    fetchQuery,
  );

  const store = new Store(new RecordSource());

  return new Environment({
    network,
    store,
  });
}

// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:

// Create a network layer from the fetch function
