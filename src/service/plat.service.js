import { getRequest, postRequest } from "./axios.utils";

const apiUrl1 = "http://localhost:9000";

class AlapiService {
  static async getMerchant(alapiId) {
    let url = apiUrl1 + "/merchant/" + alapiId;
    const res = await getRequest(url);
    return res.data.merchant;
  }
  static async getRedirectUrl(alapiId, platKey) {
    let url = apiUrl1 + "/redirect";
    const res = await postRequest(url, {
      merchantId: alapiId,
      platKey: platKey,
    });
    return res.data.link;
  }
}

export default AlapiService;
