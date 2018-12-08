import axios from 'axios';

const API_KEY = 'e9e719462ac34df0a024d71fff0989ad';


export default axios.create({
  headers: { Authorization: `Bearer ${API_KEY}` },
});
