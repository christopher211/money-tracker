import NetWorthTable from "../components/TransactionsPage/NetWorth";
import RecentTransactions from "../components/TransactionsPage/RecentTransactions";
import NewTransaction from "../components/TransactionsPage/NewTransaction";
import { Wrapper } from "../components";
import Navigation from "../components/Navigation"

const Transactions = (props) => {
  return (
    <Wrapper>
      <h1>Transactions</h1>
      <div class="flexbox-container">
      <Navigation  class="flexbox-item"/>
        <NetWorthTable />
        <RecentTransactions />
        <NewTransaction />
      </div>
    </Wrapper>
  );
};

export default Transactions;
