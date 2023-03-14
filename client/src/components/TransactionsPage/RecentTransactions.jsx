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
            <input type="text" class="form-control" placeholder="00/00/0000"></input>
            <text>Amount</text>
            <input type="text" class="form-control" placeholder="+$100"></input>
          </li>
          <button class="btn">Edit</button>
        </ul>
      </div>
    </div>

  );
}

export default RecentTransactions;