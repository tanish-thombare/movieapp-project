import MainMenu from "./MainMenu";

function Userlogin(props) {
  if (props.name == "Anil" && props.password == "sevenmentor") {
    return <MainMenu></MainMenu>;
  } else {
    return <h2>Please login</h2>;
  }
}
export default Userlogin;
