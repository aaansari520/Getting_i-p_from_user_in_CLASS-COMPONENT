import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID P56U2MF2QU0XJZ6Qnn4-a5Ztsz0YcOxBvce88P1gdCg",
  },
});
