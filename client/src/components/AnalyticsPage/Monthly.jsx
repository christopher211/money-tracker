import "../../styles/global.css"
import { Wrapper } from "../../components";


function Monthly() {

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
          <button class="btn">Submit</button>
        </ul>
      </div>
      </div>
    </Wrapper>
  );
}

export default Monthly;