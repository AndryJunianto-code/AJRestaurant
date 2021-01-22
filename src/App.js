import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Error from "./pages/Error";
import SingleFoodInfo from "./pages/SingleFoodInfo";
import UserAccount from "./pages/UserAccount";
import Cart from "./components/Cart";
function App(props) {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/menu" component={Menu} />
        <Route
          exact
          path="/menu/:food"
          component={SingleFoodInfo}
          props={props}
        />
        <Route exact path="/user" component={UserAccount} />
        <Route exact path="/cart" component={Cart} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
