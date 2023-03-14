import "../../styles/global.css"
import { Wrapper } from "../../components";


function Expenses() {

  return (
    <Wrapper>
      <div class="monthly-expenses">
      <div class="card" >
        <div class="card-header">
          Expenses
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <span class="input-group-text" id="basic-addon1">Rent/Mortgage</span>
            <input type="text" class="form-control" placeholder="$" aria-label="Income" aria-describedby="basic-addon1"></input>
          </li>
          <li class="list-group-item">
          <span class="input-group-text" id="basic-addon1">Utilities</span>
            <input type="text" class="form-control" placeholder="$" aria-label="Expenses" aria-describedby="basic-addon1"></input>
          </li>
          <li class="list-group-item">
          <span class="input-group-text" id="basic-addon1">Groceries</span>
            <input type="text" class="form-control" placeholder="$" aria-label="Savings" aria-describedby="basic-addon1"></input>
          </li>
          <li class="list-group-item">
          <span class="input-group-text" id="basic-addon1">Transportation</span>
            <input type="text" class="form-control" placeholder="$" aria-label="Balance" aria-describedby="basic-addon1"></input>
          </li>
          <li class="list-group-item">
          <span class="input-group-text" id="basic-addon1">Phone</span>
            <input type="text" class="form-control" placeholder="$" aria-label="Balance" aria-describedby="basic-addon1"></input>
          </li>
          <li class="list-group-item">
          <span class="input-group-text" id="basic-addon1">Insurance</span>
            <input type="text" class="form-control" placeholder="$" aria-label="Balance" aria-describedby="basic-addon1"></input>
          </li>
          <li class="list-group-item">
          <span class="input-group-text" id="basic-addon1">Subscriptions</span>
            <input type="text" class="form-control" placeholder="$" aria-label="Balance" aria-describedby="basic-addon1"></input>
          </li>
          <li class="list-group-item">
          <span class="input-group-text" id="basic-addon1">Misc.</span>
            <input type="text" class="form-control" placeholder="$" aria-label="Balance" aria-describedby="basic-addon1"></input>
            
          </li>
          <button class="btn">Submit</button>
        </ul>
        
      </div>
      
      </div>
    </Wrapper>
  );
}

export default Expenses;