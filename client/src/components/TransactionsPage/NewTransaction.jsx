import "../../styles/global.css"

function NewTransaction() {

  return (
    <div class="new-transaction">
      <div class="card text-center">
        <div class="card-header">
          <ul class="transaction-nav nav-pills card-header-pills">
            <li class="transaction-nav-item">
              <button class="btn">Expense</button>
            </li>
            <li class="transaction-nav-item">
              <button class="btn">Transfer</button>
            </li>
            <li class="transaction-nav-item">
              <button class="btn">Income</button>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <div class="card">
            <input type="text" class="form-control" placeholder="From"></input>
          </div>
          <div class="card">
            <input type="text" class="form-control" placeholder="Amount"></input>
          </div>
          <div class="card">
            <input type="text" class="form-control" placeholder="Date"></input>
          </div>
          <div class="card">
            <input type="text" class="form-control" placeholder="Note"></input>
          </div>
          <button class="btn">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default NewTransaction;