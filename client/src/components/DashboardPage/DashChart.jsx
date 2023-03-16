import "../../styles/global.css"
import { Wrapper } from "..";
import { Col, Container, Row, Card } from "react-bootstrap";
import Chart from "../AnalyticsPage/Chart";


function DashChart() {

  return (
<>
<Card xs={12} md={12} lg={6} className="dash-item ">
      <h1>Stats</h1>
      <ul>
        <li>You have made:${}</li>
        <li>SPENT:</li>
        <li>You have ${} left</li>
      </ul>
      </Card>
</>
  );
}

export default DashChart;