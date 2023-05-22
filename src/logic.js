import axios from "axios";

const clientId = "20da64b66ebe8bcc9f9359ee";
const clientSecret = "3ce3282486ff36f960320071";

const base64 = require("base-64");

export const createMerchant = async (name) => {
  const body = {
    merchantId: Date.now().toLocaleString(),
    merchantName: `${name ? name : "Ginkgos"}`,
  };
  let url = "http://localhost:2000/v1/merchant";
  try {
    const res = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + base64.encode(clientId + ":" + clientSecret),
      },
    });
    if (res.data.success) {
      const data = res.data;
      console.log(data.id, data.name);
      return true;
    } else {
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
// Temporary COmment
export const getRedirectUrl = async (platformId, onError = () => {}) => {
  const body = {
    platformKey: platformId,
  };
  let url =
    "http://localhost:2000/v1/merchant/63f64c349eb34527e6a1a304/platform";
  try {
    const res = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + base64.encode(clientId + ":" + clientSecret),
      },
    });
    if (res.data.success) {
      const rurl = res.data.link;
      console.log(rurl);
      window.location.href = rurl;
    } else {
      onError(res.data.msg);
    }
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
export const getData = async (dataType, onError = () => {}) => {
  const body = {
    merchantId: "123123123",
  };
  let url = `http://localhost:2000/api/accounting/${dataType}`;
  try {
    const res = await axios.get(url, {
      params: body,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + base64.encode(clientId + ":" + clientSecret),
      },
    });
    if (res.data.success) {
      const data = res.data.data;
      console.log(data);
      return data;
    } else {
      onError(res.data.msg);
    }
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
