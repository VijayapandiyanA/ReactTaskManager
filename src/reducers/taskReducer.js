 export function taskReducer(state, action) {
     console.log("Reducer Action:", action);
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "DELETE":
      return state.filter(task => task.id !== action.payload);

    case "TOGGLE":
      return state.map(task =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );

    default:
      return state;
     
  }
  
}