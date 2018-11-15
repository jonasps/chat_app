
export const setErrorMessage = (errorCode) => {
    switch (errorCode) {
        case 422:
            return "Problem with username or socket connection";
        case 409:
            return "Username is already taken";
        default:
            return "A problem occurred please try again";
    }
}