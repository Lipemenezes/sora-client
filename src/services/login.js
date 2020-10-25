import http from '../http-common';

const login = (email, password) => {
    return http.post('/login', { email, password });
};

exports = {
    login,
};
