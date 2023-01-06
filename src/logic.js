import axios from "axios";

const clientId = "2981f70b889b43c0d6855cda";
const clientSecret = "85f439472c721b15a1ceae49";

const base64 = require("base-64");

export const createMerchant = async (onComplete, onError) => {
  const body = {
    merchantId: "123123123",
    merchantName: "Ginkgos",
  };
  let url = "http://localhost:2000/user/merchant";
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
      onComplete();
    } else {
      onError(res.data.msg);
    }
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

export const getRedirectUrl = async (platformId, onError=()=>{}) => {
  const body = {
    merchantId: "123123123",
    platformId: platformId,
  };
  let url = "http://localhost:2000/user/getUrl";
  try {
    const res = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + base64.encode(clientId + ":" + clientSecret),
      },
    });
    if (res.data.success) {
      const rurl = res.data.redirectUrl;
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
export const getData = async (dataType, onError=()=>{}) => {
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
