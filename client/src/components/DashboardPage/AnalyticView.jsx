import "../../styles/global.css"
import { Wrapper } from "../../components";
import { Col, Container, Row, Card } from "react-bootstrap";
import Chart from "../AnalyticsPage/Chart";

function AnalyticView() {

  return (
<>

<Card className="col-5 dash-item ">
      <h1>Analytics Chart</h1>
      <Chart />
      </Card>


</>
  );
}

export default AnalyticView;