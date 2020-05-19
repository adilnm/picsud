import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID RnHWPZauIIMMwpPbAe0sTkKqbXnaBjUBQK4-07TpO2M"
  }
});
