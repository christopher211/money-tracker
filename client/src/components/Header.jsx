import icon from "./images/cash-favicon.png"

const Header = () => {


  return (
    <header class="header-container" style={{ borderBottom: "1px solid #333" }}>
      <h1 class="page-name-h1"> <a class="page-name" href="/">Spend Sense</a></h1>
      <img class="moneybag" src={icon} alt="Moneybag Icon" width="80px" height="80px"></img>
    </header>
  )
}


export default Header