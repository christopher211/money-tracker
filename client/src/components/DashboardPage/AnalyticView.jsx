import "../../styles/global.css"
import { Wrapper } from "../../components";
import { Col, Container, Row, Card } from "react-bootstrap";
import Chart from "../AnalyticsPage/Chart";

function AnalyticView() {

  return (
<>

<Card xs={12} md={12} lg={6} className="dash-item ">
      <h1>Analytics Chart</h1>
      <Chart />
      </Card>


</>
  );
}

export default AnalyticView;