import axios from "axios";

async function getToken() {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api-token-auth', {
            username: 'apiClient',
            password: 'Cosmos1234'
        });
        return response.data.token;
    } catch (e) {
        throw new Error('Bad credentials');
    }
};

async function verifyToken(token: string) {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api-token-verify', {
            token: token,
        });
        return response.data.token;
    } catch (e) {
        throw new Error('Expired token');
    }
};

async function refreshToken(token: string) {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api-token-verify', {
            token: token,
        });
        if (response.data.non_field_errors) {
            throw new Error('Bad token');
        }
        return response.data.token;
    } catch (e) {
        console.log(e);
        return(e);
    }
};

async function getHeaders(token: string) {
    try {
        if (token===''){
            throw new Error('No token');
        }
        const verified = await verifyToken(token);
        axios.defaults.headers.common['Authorization'] = 'JWT ' +  verified;
        return verified;
    } catch (e) {
        try {
            const newIssuedToken = await getToken();
            axios.defaults.headers.common['Authorization'] = 'JWT ' + newIssuedToken;
            return newIssuedToken;
        } catch (e) {
            throw new Error('Bad credentials cant get token');
        }
    }
};

const ApiClient = {getHeaders};
export default ApiClient;