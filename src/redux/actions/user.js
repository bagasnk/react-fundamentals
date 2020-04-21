export const todoInputUserHandler = (text) => {
    return {
        type:"ON_CHANGE_TODO_USER_INPUT",
        payload: text,
    }
}