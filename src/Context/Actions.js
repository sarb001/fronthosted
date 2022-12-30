
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

export const Logout = () => ({
    type : "LOGOUT",
});

// For Updating User 


export const  Updatestarted = () => ({
    type : "UPDATE_START",
});

export const  Updatesuccess = (user) => ({
    type : "UPDATE_SUCCESS",
    payload : user,
});

export const Updatefailure = () => ({
    type : "UPDATE_FAIL",
});
