import Navigation from "../components/Navigation"
import { Wrapper } from "../components";
import { Card } from "react-bootstrap";
import "../styles/global.css"
import  TransView  from "../components/DashboardPage/TransView";
import  AnalyticView  from "../components/DashboardPage/AnalyticView";
import DashChart from "../components/DashboardPage/DashChart"

const Dashboard = (props) => {

  return (
    <>
    <Wrapper>
    <h1>Dashboard</h1>
    
  
  <div className="flexbox-container row dashview">
      
      <AnalyticView/>
      
      <DashChart/>

    </div>
    
    <TransView/>
    
    </Wrapper>
    </>
  )
}

export default Dashboard