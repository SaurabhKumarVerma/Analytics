import Contact from "./Component/Contact/contact";
import Header from "./Component/Header/header"
import Login from "./Component/Login/login";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router-dom";
import Analytic from "./Component/Analytics/analytic";
function App() {
  return (
    <div className="App">
      <header className="App-header">

          <BrowserRouter>
              <Header/>
              <switch>


                <Route path='/contact' component={Contact}/>
                  <Route path='/analytics' component= {Analytic}/>
                  <Route path='/login' component={Login}/>
                  {/*<Route path='/' component={Login}/>*/}

              </switch>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
