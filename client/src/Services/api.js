import axios from "axios";

const sendMail = async (data) => {
  await axios.post(
    "http://localhost:5000/api/sendMail",
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

export default {
  sendMail,
};
