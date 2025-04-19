import axios from "axios";

const api = axios.create({
  baseURL: "https://flight-radar1.p.rapidapi.com",

  headers: {
    'x-rapidapi-key': '5887bca765msh0ca9dcd8019bc35p157250jsnb91d487fed6c',
    'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
  },
});

export default api;
