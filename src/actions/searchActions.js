export function searchMovies(title) {
  return {
    type: 'SEARCH_MOVIES',
    title: title
  };
}
