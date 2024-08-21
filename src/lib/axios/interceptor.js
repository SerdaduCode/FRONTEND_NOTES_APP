const onRequest = (req) => {
  return req;
};

const onRequestError = (err) => {
  return Promise.reject(err);
};

const onResponse = (res) => {
  return res;
};

const onResponseError = (err) => {
  return Promise.reject(err);
};

export const setupInterceptor = (instance) => {
  instance.interceptors.request.use(
    onRequest,
    onRequestError,
  );
  instance.interceptors.response.use(
    onResponse,
    onResponseError,
  );
  return instance;
};
