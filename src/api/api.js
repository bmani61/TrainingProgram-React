import axios from "axios";

const instance = axios.create({
  baseURL: "https://trainingprogram.azurewebsites.net/",
  headers: {
    headerType: "example header type",
  },
});
export default instance;
