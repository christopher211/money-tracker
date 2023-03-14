import "../../styles/global.css"
import { Wrapper } from "../../components";
import { useEffect, useState } from "react";
import { useAppCtx } from "../../utils/AppContext";


function Expenses() {

  const { user } = useAppCtx();

  const [expenses, setExpenses] = useState({
    home: "",
    utilities: "",
    groceries: "",
    vehicle: "",
    phone:"",
    insurance: "",
    subscriptions: "",
    misc: "",
    total: "",
  });
  const [updateResult, setUpdateResult] = useState("");

  const handleInputChange = (e) => {
    setExpenses({ ...expenses, [e.target.name]: e.target.value });

    console.log(expenses);

  };

  const update = async (e) => {
    e?.preventDefault();
    const response = await fetch("/api/expenses", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expenses),
    })
    if (!response.ok) {
      return setUpdateResult("Failed to update");
    }
    setUpdateResult("success")
  };

  useEffect(() => {
    if (user) setExpenses({ ...expenses, home: expenses.home, utilities: expenses.utilities, groceries: expenses.groceries, vehicle: expenses.vehicle, phone: expenses.phone, insurance: expenses.insurance, subscriptions: expenses.subscriptions, misc: expenses.misc, total: expenses.total })
  }, [user]);


  return (
    <Wrapper>
      <div class="monthly-expenses">
      <div class="card" >
        <div class="card-header">
          Expenses
        </div>
        <form onSubmit={update} className="mb-2">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <span class="input-group-text" id="basic-addon1">Rent/Mortgage</span>
            <input type="text" class="form-control" placeholder="$" aria-label="Income" aria-describedby="basic-addon1" value={expenses.home} onChange={handleInputChange} name="home"></input>
          </li>
          <li class="list-group-item">
          <span class="input-group-text" id="basic-addon1">Utilities</span>
            <input type="text" class="form-control" placeholder="$" aria-label="Expenses" aria-describedby="basic-addon1" value={expenses.utilities} onChange={handleInputChange} name="utilities"></input>
          </li>
          <li class="list-group-item">
          <span class="input-group-text" id="basic-addon1">Groceries</span>
            <input type="text" class="form-control" placeholder="$" aria-label="Savings" aria-describedby="basic-addon1" value={expenses.groceries} onChange={handleInputChange} name="groceries"></input>
          </li>
          <li class="list-group-item">
          <span class="input-group-text" id="basic-addon1">Transportation</span>
            <input type="text" class="form-control" placeholder="$" aria-label="Balance" aria-describedby="basic-addon1" value={expenses.vehicle} onChange={handleInputChange} name="vehicle"></input>
          </li>
          <li class="list-group-item">
          <span class="input-group-text" id="basic-addon1">Phone</span>
            <input type="text" class="form-control" placeholder="$" aria-label="Balance" aria-describedby="basic-addon1" value={expenses.phone} onChange={handleInputChange} name="phone"></input>
          </li>
          <li class="list-group-item">
          <span class="input-group-text" id="basic-addon1">Insurance</span>
            <input type="text" class="form-control" placeholder="$" aria-label="Balance" aria-describedby="basic-addon1" value={expenses.insurance} onChange={handleInputChange} name="insurance"></input>
          </li>
          <li class="list-group-item">
          <span class="input-group-text" id="basic-addon1">Subscriptions</span>
            <input type="text" class="form-control" placeholder="$" aria-label="Balance" aria-describedby="basic-addon1" value={expenses.subscriptions} onChange={handleInputChange} name="subscriptions"></input>
          </li>
          <li class="list-group-item">
          <span class="input-group-text" id="basic-addon1">Misc.</span>

            <input type="text" class="form-control" placeholder="$" aria-label="Balance" aria-describedby="basic-addon1" value={expenses.misc} onChange={handleInputChange} name="misc"></input>
          </li>
          <li class="list-group-item">
          <span class="input-group-text" id="basic-addon1">Total</span>
            <input type="text" class="form-control" placeholder="$" aria-label="Balance" aria-describedby="basic-addon1" value={expenses.total} onChange={handleInputChange} name="total"></input>
          </li>
          <button class="btn">Submit</button>
        </ul>

        </form>
        <button class="btn">Submit</button>
      </div>
      
      </div>
    </Wrapper>
  );
}

export default Expenses;