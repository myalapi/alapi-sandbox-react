import axios from 'axios';

const clientId = "0b630fa548a7f87797e1ab20";
const clientSecret = "6db6804f9e1b03e918c14383";
const base64 = require("base-64");


export const createMerchant = async (onComplete, onError) => {
    const body = {
        merchantId: "123123123",
        merchantName: "New Merchant"
    };
    let url = "http://localhost:2000/user/merchant";
    try {
        const res = await axios.post(
            url, body, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + base64.encode(clientId + ':' + clientSecret),
            }
        }
        );
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
