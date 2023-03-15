import "../../styles/global.css"
import { Wrapper } from "../../components";
import { useEffect, useState } from "react";
import { useAppCtx } from "../../utils/AppContext";


function Yearly() {
  const { user } = useAppCtx();

  const [yearly, setYearly] = useState({
    income: "",
    expenses: "",
    savings: "",
    balance: "",
  });
  const [updateResult, setUpdateResult] = useState("");

  const handleInputChange = (e) => {
    setYearly({ ...yearly, [e.target.name]: e.target.value });

    console.log(yearly);

  };

  const update = async (e) => {
    e?.preventDefault();
    const response = await fetch("/api/yearly", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(yearly),
    })
    if (!response.ok) {
      return setUpdateResult("Failed to update");
    }
    setUpdateResult("success")
  };

  useEffect((yearly) => {
    if (user) setYearly({ ...yearly, income: yearly.income, expenses: yearly.expenses, savings: yearly.savings, balance: yearly.balance })
  }, [user]);






  return (
    <Wrapper>
      <div class="yearly">
        <div class="card" >
          <div class="card-header">
            Yearly
          </div>
          <form onSubmit={update} className="mb-2">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <span class="input-group-text" id="basic-addon1">Income</span>
                <input type="text" class="form-control" placeholder="$" aria-label="Income" aria-describedby="basic-addon1" value={yearly.income} onChange={handleInputChange} name="income"></input>
              </li>
              <li class="list-group-item">
                <span class="input-group-text" id="basic-addon1">Expenses</span>
                <input type="text" class="form-control" placeholder="$" aria-label="Expenses" aria-describedby="basic-addon1" value={yearly.expenses} onChange={handleInputChange} name="expenses"></input>
              </li>
              <li class="list-group-item">
                <span class="input-group-text" id="basic-addon1">Savings</span>
                <input type="text" class="form-control" placeholder="$" aria-label="Savings" aria-describedby="basic-addon1" value={yearly.savings} onChange={handleInputChange} name="savings"></input>
              </li>
              <li class="list-group-item">
                <span class="input-group-text" id="basic-addon1">Balance</span>
                <input type="text" class="form-control" placeholder="$" aria-label="Balance" aria-describedby="basic-addon1" value={yearly.balance} onChange={handleInputChange} name="balance"></input>
              </li>
            </ul>
          </form>
          <button class="btn">Submit</button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Yearly;