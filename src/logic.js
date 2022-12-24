import axios from "axios";

const clientId = "daa0afc7cfda262b10fd7c55";
const clientSecret = "d1ddc68598b1d5d4b26b5870";

const base64 = require("base-64");

export const createMerchant = async (onComplete, onError) => {
  const body = {
    merchantId: "123123123",
    merchantName: "New Merchant",
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
export const getInvoices= async ( onError=()=>{}) => {
    const body = {
      merchantId: "123123123",
    };
    let url = "http://localhost:2000/api/accounting/invoices";
    try {
      const res = await axios.get(url, {
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
