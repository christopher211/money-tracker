import "../../styles/global.css"


function NetWorthTable() {

  return (
    <div class="net-worth">
      <div class="card">
        <div class="card-header">
          Net Worth:
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cash:
          <input type="text" class="form-control" placeholder=""></input></li>
          <li class="list-group-item">Bank:
          <input type="text" class="form-control" placeholder=""></input></li>
          <button class="btn">Edit</button>
        </ul>
      </div>
    </div>

  );
}

export default NetWorthTable;