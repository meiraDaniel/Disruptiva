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

export default {
  getVideos,
  sendMail,
};
