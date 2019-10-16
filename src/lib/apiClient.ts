import axios from "axios";

const ALFRED_HOST = process.env.REACT_APP_ALFRED_SERVICE_HOST;

const MOCKED_CREDENTIALS = {
  username: process.env.REACT_APP_ALFRED_SERVICE_USER,
  password: process.env.REACT_APP_ALFRED_SERVICE_PASS
};

async function getToken(): Promise<string> {
  try {
    const response = await axios.post(`${ALFRED_HOST}/api-token-auth`, MOCKED_CREDENTIALS);
    return response.data.token;
  } catch (e) {
    throw new Error('Bad credentials');
  }
};

async function validToken(token: string): Promise<boolean> {
  try {
    const response = await axios.post(`${ALFRED_HOST}/api-token-verify`, {token});
    return !!response.data.token;
  } catch(e) {
    return false;
  }
};

function setAuthorization(token: string): void {
  axios.defaults.headers.common['Authorization'] = `JWT ${token}`;
}

async function subscribe(): Promise<void> {
  try {
    const token = localStorage.getItem('alfred-token');
  
    if (token) {
      const isValid = await validToken(token);
  
      if(isValid) {
        return setAuthorization(token);
      }
    }
  
    const newIssuedToken = await getToken();
    localStorage.setItem('alfred-token', newIssuedToken);
    return setAuthorization(newIssuedToken);
  } catch (e) {
    throw e;
  }
};

const ApiClient = { subscribe };
export default ApiClient;