import React from 'react';

import useAxios from 'axios-hooks';

// React hook that simplifies communication with a
// QCS tenant or QSE on Kubernetes deployment.
// `url` is a path to the API endpoint, e.g. /v1/users/me
export default function ({ url = '/', method = 'get', data = null, manual = false }) {
  const [{ data: resData, error, loading, response }, execute] = useAxios({
    url,
    method,
    data,
  }, { manual });
  return [resData, error, loading, response, execute];
};
