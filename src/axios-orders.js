import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerbuilder-82668.firebaseio.com/",
});

export default instance;
