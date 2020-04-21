const init_state = {
    username: "bagas",
    
}

export default (state=init_state, action) => {
    if(action.type === "ON_CHANGE_TODO_USER_INPUT"){
        return { ...state, username: action.payload };
    }else{
        return { ...state };
    }
}