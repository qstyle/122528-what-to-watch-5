export const ActionType = {
  sortGanre: `SORT_GANRE`,
  sortGanreDefault: `SORT_GANRE_DEFAULT`
};

export const ActionCreator = {
  sortGanre: (genre) => ({
    type: ActionType.sortGanre,
    payload: genre,
  }),

  sortDefault: () => ({
    type: ActionType.sortGanreDefault,
  })
};
