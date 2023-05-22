import { createMerchant } from "../logic";
import { useNavigate } from "react-router-dom";

export default function Index() {
  let navigate = useNavigate();
  const onComplete = () => {
    navigate("/home");
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    //create account in recure ai and gets a merchant Id

    const res = await createMerchant(e.target.company.value);
    if (res) {
      onComplete();
    } else {
      alert("Error");
    }
  };
  return (
    <div className="App">
      <h1>Welcome to Recur Club</h1>
      <h2>Log in to get a loan</h2>
      <div>
        <form onSubmit={onSubmit}>
          <input required id="company" type="text" placeholder="company name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
