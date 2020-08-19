import axios from "axios";

const sendMail = async (data) => {
  await axios.post(
    "https://disruptiva-server.herokuapp.com/api/sendMail",
    {
      data: data,
    },
    {
      headers: {
        "Access-Control-Allow-Origin": true,
        "Content-Type": "application/json",
      },
    }
  );
};

const getVideos = async () => {
  const res = await axios.get(
    "https://disruptiva-server.herokuapp.com/api/getVideos",
    {
      headers: {
        "Access-Control-Allow-Origin": true,
      },
    }
  );
  return res.data;
};

const getPostsMedium = async () => {
  const res = await axios.get(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lioliveiraz"
  );
  return res.data.items;
};

export default {
  getPostsMedium,
  getVideos,
  sendMail,
};
