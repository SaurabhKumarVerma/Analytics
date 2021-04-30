import Contact from "./Component/Contact/contact";
import Header from "./Component/Header/header"
import Login from "./Component/Login/login";
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header/>
        {/*<Contact/>*/}
          <Login/>
      </header>
    </div>
  );
}

export default App;
