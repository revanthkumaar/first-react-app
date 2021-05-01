export default (state,action) => {
    console.log(action);
    console.log(state);
    //conditional statements
    switch(action.type){
        case "rotate":
            return {
                rotate: action.payload
            };
        default:
            return state;
    }
};