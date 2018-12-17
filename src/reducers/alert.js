// Check if the alert type is valid
const getAlertType = value => {
  const validAlertTypes = [
    'danger',
    'warning',
    'primary',
    'info',
    'light',
    'secondary',
    'success',
  ];

  const alert = validAlertTypes.filter(alert => {
    if (alert === value) return alert;
  })[0];

  return alert || 'primary';
};

const alert = (
  state = {
    show: false,
    type: null,
  },
  action
) => {
  if (!action) return state;

  switch (action.type) {
    case 'SHOW_ALERT':
      return {
        show: action.payload.show,
        type: getAlertType(action.payload.type),
      };
    case 'HIDE_ALERT':
      return Object.assign({}, state, { show: false });
    default:
      return state;
  }
};

export default alert;
