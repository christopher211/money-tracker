import "../../styles/global.css"

function NewTransaction() {

  return (
    <div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <button>Expense</button>
          </li>
          <li class="nav-item">
            <button>Transfer</button>
          </li>
          <li class="nav-item">
            <button>Income</button>
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
        <button>Submit</button>
      </div>
    </div>
  );
}

export default NewTransaction;