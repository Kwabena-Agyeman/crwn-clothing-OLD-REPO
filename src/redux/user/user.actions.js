export const setCurrentuser = (user) => {
  return {
    type: 'SET_CURRENT_USER',
    payload: user,
  };
};
