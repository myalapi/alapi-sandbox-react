import React from 'react'
import { getInvoices, getRedirectUrl } from '../logic';

function Home() {

  async function onClick (e){
    console.log(e.target.id);
    const rurl = await getRedirectUrl(e.target.id);
  }

  async function clickInvoice(){
    await getInvoices()
  }
  return (
    <div>
      <button id="abde" onClick={onClick}>
        Zoho
      </button>
      <button id="bcde" onClick={onClick}>
        quickBooks
      </button>
      <button id="" onClick={clickInvoice}>
        Get Invoices
      </button>
    </div>
  )
}

export default Home