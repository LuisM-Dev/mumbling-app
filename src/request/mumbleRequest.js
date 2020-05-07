import axios from "axios";

const url = "https://mumble-server.herokuapp.com/mumbling";

export default async value => {
  const response = await axios.post(url, { string: value });
  return response.data;
};
