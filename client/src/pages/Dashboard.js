import Navigation from "../components/Navigation"
import { Wrapper } from "../components";
import { Card } from "react-bootstrap";

const Dashboard = (props) => {

  return (
    <>
    <Wrapper>
    <h1>Dashboard</h1>
    <div class="flexbox-container">
  

    </div>
  </Wrapper>
  <div className="flexbox-container row">
      <Card className="col-6 m-10">
      <h1>Chart</h1>
      </Card>
      <Card className="col-6 m-10">
      <h1>Stats</h1>
      </Card>
    </div>
    <Card className="m-10">
      <h1>Recent Transactions</h1>
    </Card>
    </>
  )
}

export default Dashboard