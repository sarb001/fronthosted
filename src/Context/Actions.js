export const Loginstart = () => ({
    type : "LOGIN_START",
});

export const Loginsuccess = (user) => ({
    type : "LOGIN_SUCCESS",
    payload : user,
});

export const Loginfailure = () => ({
    type : "LOGIN_FAIL",
});