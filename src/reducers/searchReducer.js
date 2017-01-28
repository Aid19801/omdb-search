export default function searchReducer(state = [], action) {
  switch(action.type){
    case 'SEARCH_MOVIES':
    return [...state,
      Object.assign({}, action.title)
    ];
    default:
      return state;
  }
}
