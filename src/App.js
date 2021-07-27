import {  Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";

//lazy loading
const Home = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./components/Home/Home")), 1000);
  });
});
const  Editor = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./components/Editor/Editor.js")), 1000);
  });
});

const App = () => {
  return (
    <Router>
        <Suspense fallback={<Loader/>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Editor" component={Editor} />
          </Switch>
        </Suspense>
    </Router>
  );
}

export default App;
