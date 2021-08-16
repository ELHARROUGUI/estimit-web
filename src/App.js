import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Welcome from "./screens/welcome";
import Room from "./screens/room";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/room" component={Room} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
