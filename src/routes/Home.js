import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../store/auth.context";
import AlapiService from "../service/plat.service";
function Home() {
  const authContext = useContext(AuthContext);
  const [merchant, setMerchant] = useState(null);
  useEffect(() => {
    const temp = async () => {
      const alapiMerchant = await AlapiService.getMerchant(authContext.alapiId);
      setMerchant(JSON.stringify(alapiMerchant));
    };
    temp();
  }, [authContext]);

  async function onClick(e) {
    const link = await AlapiService.getRedirectUrl(
      authContext.alapiId,
      e.target.id
    );
    window.open(link, "_blank");
  }

  return (
    <div className="d-flex flex-column gap-3">
      <div>Comapny: {authContext.companyName}</div>
      <div>Alapi Id: {authContext.alapiId}</div>
      <div>Details: </div>
      <div>{merchant}</div>
      <div>Connect Platforms</div>
      <div>
        <button id="abde" onClick={onClick}>
          Zoho
        </button>
        <button id="abgf" onClick={onClick}>
          Tally
        </button>
      </div>
    </div>
  );
}

export default Home;
