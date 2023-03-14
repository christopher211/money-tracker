import "../../styles/global.css"
import { Wrapper } from "../../components";
import { useEffect, useState } from "react";
import { useAppCtx } from "../../utils/AppContext";


function Monthly() {
  const { user } = useAppCtx();

  const [monthly, setMonthly] = useState({
    income: "",
    expenses: "",
    savings: "",
    balance: "",
  });
  const [updateResult, setUpdateResult] = useState("");

  const handleInputChange = (e) => {
    setMonthly({ ...monthly, [e.target.name]: e.target.value });

    console.log(monthly);

  };

  const update = async (e) => {
    e?.preventDefault();
    const response = await fetch("/api/monthly", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(monthly),
    })
    if (!resp.ok) {
      return setUpdateResult("Failed to update");
    }
    setUpdateResult("success")
  };

  useEffect(() => {
    if (user) setMonthly({ ...monthly, user: user._id });{











  return (
    <Wrapper>
      <div class="monthly">
      <div class="card" >
        <div class="card-header">
          Monthly
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <span class="input-group-text" id="basic-addon1">Income</span>
            <input type="text" class="form-control" placeholder="$" aria-label="Income" aria-describedby="basic-addon1"></input>
          </li>
          <li class="list-group-item">
          <span class="input-group-text" id="basic-addon1">Expenses</span>
            <input type="text" class="form-control" placeholder="$" aria-label="Expenses" aria-describedby="basic-addon1"></input>
          </li>
          <li class="list-group-item">
          <span class="input-group-text" id="basic-addon1">Savings</span>
            <input type="text" class="form-control" placeholder="$" aria-label="Savings" aria-describedby="basic-addon1"></input>
          </li>
          <li class="list-group-item">
          <span class="input-group-text" id="basic-addon1">Balance</span>
            <input type="text" class="form-control" placeholder="$" aria-label="Balance" aria-describedby="basic-addon1"></input>
          </li>
        </ul>
        <button class="btn">Submit</button>
      </div>
      </div>
    </Wrapper>
  );
}

export default Monthly;