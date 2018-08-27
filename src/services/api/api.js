import { ajax } from "rxjs/ajax";

const constants = {
  apiKey: "wbFoesSTyPwLl1xmgfR0jkplGeIh2LNG",
  baseUrl: "http://api.giphy.com",
  limit: 10
};

export default {
  home: () => {
    return ajax({
      url: `${constants.baseUrl}/v1/gifs/trending?api_key=${
        constants.apiKey
      }&limit=${constants.limit}`,
      method: "GET",
      responseType: "json"
    });
  },
  random: () => {
    return ajax({
      url: `${constants.baseUrl}/v1/gifs/random?api_key=${
        constants.apiKey
      }&limit=${constants.limit}`,
      method: "GET",
      responseType: "json"
    });
  }
};
