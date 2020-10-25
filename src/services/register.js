import http from '../http-common';

const register = (email, password, firstName, lastName) => {
    return http.post('/register', { email, password, firstName, lastName });
};

exports = {
    register,
};
