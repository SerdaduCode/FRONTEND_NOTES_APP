const onRequest = (req) => {
  console.log(`[axios] [onRequest] : ${JSON.stringify(req)}`);
  return req;
};

const onRequestError = (err) => {
  console.log(`[axios] [onRequestError]: ${JSON.stringify(err)}`);
  return Promise.reject(err);
};

const onResponse = (res) => {
  console.log(`[axios][onresponse]: ${JSON.stringify(res)}`);
  return res;
};

const onResponseError = (err) => {
  console.log(`axios [onRequestError] : ${JSON.stringify(err)}`);
  return Promise.reject(err);
};

export const setupInterceptor = (instance) => {
  instance.interceptors.request.use(onRequest, onRequestError);
  instance.interceptors.response.use(onResponse, onResponseError);
  return instance;
};
