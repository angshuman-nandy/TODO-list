const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          showEdit: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);


    case 'EDIT_TODO':
      return state.map(
        todo => (todo.id === action.id ? { ...todo,showEdit: !todo.showEdit, text: action.val } : todo)
      );

      case 'TOGGLE_EDIT':
         return state.map(
        todo =>
          todo.id === action.id ? { ...todo, showEdit: !todo.showEdit } : todo
      );

      default:
       return state
  }
};

export default todos;
