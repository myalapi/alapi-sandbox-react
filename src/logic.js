import axios from "axios";

const clientId = "75919becb50bafdce04938f8";
const clientSecret = "3eb346707d5ba45a8095bf20";

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
        params: body,
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
