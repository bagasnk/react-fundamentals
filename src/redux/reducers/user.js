const init_state = {
    id: 0,
    username: "",
    fullName: "",
    role: "",
    errMsg: "",

}

export default (state = init_state, action) => {
    if (action.type === "ON_CHANGE_TODO_USER_INPUT") {
        return { ...state, username: action.payload };
    } else if (action.type === "ON_LOGIN_SUCCESS") {
        const { username, fullName, role, id } = action.payload;

        return {
            ...state,
            username,
            fullName,
            role,
            id
        };
    } else if (action.type === "ON_LOGIN_FAIL") {
        return { ...state, errMsg: action.payload };


    } else if (action.type === "ON_REGISTER_SUCCESS") {
        const { username, fullName, role, password, id } = action.payload;

        return {
            ...state,
            username,
            fullName,
            role,
            password,
            id
        };
    } else if (action.type === "ON_REGISTER_FAIL") {
        return { ...state, errMsg: action.payload }
    } else if (action.type === "ON_LOGOUT"){
        return {
            ...state,
            username: action.payload,
            fullName : action.payload,
            role : action.payload,
            password : action.payload,
            id : action.payload,
            errMsg : "Berhasil Logout"
        };
    }
    return { ...state };
}
