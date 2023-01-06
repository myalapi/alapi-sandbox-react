import React, { useState } from 'react'
import { getData, getRedirectUrl } from '../logic';

function Home() {

  const [data, setData] = useState(null);

  async function onClick (e){
    console.log(e.target.id);
    const rurl = await getRedirectUrl(e.target.id);
  }

  async function click(e) {
    setData(await getData(e.target.id));
  }
  return (
    <div>
      <div>
        <button id="abde" onClick={onClick}>
          Zoho
        </button>
        <button id="bcde" onClick={onClick}>
          quickBooks
        </button>
        <button id="invoices" onClick={click}>
          Get Invoices
        </button>
        <button id="expenses" onClick={click}>
          Get Expenses
        </button>
        <button id="bills" onClick={click}>
          Get Bills
        </button>
        <button id="creditNotes" onClick={click}>
          Get Credit Notes
        </button>
      </div>

      <div>
        {JSON.stringify(data)}
      </div>
    </div>
  )
}

export default Home