import "../../styles/global.css"


function RecentTransactions() {

  return (
    <div class="recent-transactions">
      <div class="card">
        <div class="card-header">
          Recent Transactions:
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <text>Date</text>
            <input type="text" class="form-control" placeholder=""></input>
            <text>Amount</text>
            <input type="text" class="form-control" placeholder="ex. + or - $100"></input>
            <button>Edit</button>
          </li>
        </ul>
      </div>
    </div>

  );
}

export default RecentTransactions;