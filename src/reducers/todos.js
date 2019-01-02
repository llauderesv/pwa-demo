const defaultState = [
  {
    id: 1,
    title: 'Read books',
    desc:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi eum cum est fugit, pariatur ex itaque eaque, iusto voluptatem ipsum nesciunt dolorem nihil accusantium incidunt alias exercitationem! Obcaecati, doloremque eum!',
  },
  {
    id: 2,
    title: 'Eat Breakfast',
    desc:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi eum cum est fugit, pariatur ex itaque eaque, iusto voluptatem ipsum nesciunt dolorem nihil accusantium incidunt alias exercitationem! Obcaecati, doloremque eum!',
  },
];

const todos = (state = defaultState, action) => {
  if (!action) return state;

  switch (action.type) {
    case 'ADD_TODO':
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default todos;
