function reducer(state = [{ task: "gaming", id: 1, isDone: false }], action) {
    switch (action.type) {
      case "ADDTODO":
        return [...state, action.payload];
  
      case "UPDATETODO":
        return state.map((element) =>
          element.id == action.payload.id
            ? { ...element, isDone: !element.isDone }
            : element
        );
        
      default:
        return state;
    }
  }

  export default reducer