import { createMerchant } from "../logic";
import { useNavigate } from "react-router-dom";

export default function Index() {
  let navigate = useNavigate();
  const onComplete = () => {
    navigate("/home");
  };
  const onSubmit = (e) => {
    e.preventDefault();

    //create account in finance ai and gets a merchant Id

    createMerchant(onComplete, (m) => {
      alert(m);
    });
  };
  return (
    <div className="App">
      <h1>Welcome to Finance.ai</h1>
      <h2>Log in to get a loan</h2>
      <div>
        <form onSubmit={onSubmit}>
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
