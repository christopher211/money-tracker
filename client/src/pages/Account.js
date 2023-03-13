import { Wrapper } from "../components";
import SignIn from "../components/AccountPage/SignIn";
import image from "../components/images/black.svg"

const Account = (props) => {

  return (
    
    <Wrapper>
      <h1>Account</h1>
      <SignIn />
    </Wrapper>
  )
}

export default Account