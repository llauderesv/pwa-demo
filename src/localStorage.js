const saveToken = token => {
  try {
    const serializedToken = JSON.stringify(token);
    localStorage.setItem('token', serializedToken);
  } catch (err) {}
};

const removeItem = key => {
  try {
    localStorage.removeItem(key);
  } catch (err) {}
};

const getTokenItem = () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }

    return token;
  } catch (err) {}
};

export { saveToken, removeItem, getTokenItem };
