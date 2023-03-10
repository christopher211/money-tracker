import "../../styles/global.css"
import { Wrapper } from "../../components";


function SignIn() {

  return (
    <Wrapper>
      <div class="sign-in">
        <h2>Welcome!</h2>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Email" aria-label="Recipient's username"></input>
          
      </div>
      <div class="input-group mb-3">
      <input type="Password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"></input>
      </div>
      <div class="buttons">
        <button class="btn">Sign Up</button>
        <button class="btn">Log In</button>
      </div>
      </div>
    </Wrapper>
  );
}

export default SignIn;