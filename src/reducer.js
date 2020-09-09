export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  //  token:
  //    'BQCoM9KlAY-PGzo-v-krIf0abRbNak7qr9jRjKuGkljLWnSUsjPAt9m1bbaXnsXuPO-JyfqszgYspIqe2qnhsFaeHSj3hgcaKayKN8YVSoz7jtstlDI4hl_rjn8EWAa4NKVXBKIBmKHJtW5j1DbvYdSZ3qUhrg',
};

//REMOVEEEEEEEE TOKEN

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
