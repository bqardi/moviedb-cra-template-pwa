import "./App.scss";
import Movies from "./view/Movies";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Router } from "@reach/router";
import Movie from "./view/Movie";
import Home from "./view/Home";
import { createContext, useContext, useState } from "react";

var GlobalContext = createContext();

export function useSearch(){
	return useContext(GlobalContext);
}

function GlobalProvider({children}){
	var [searchResult, setSearchResult] = useState({});
	var [value, setValue] = useState("");
	
	return (
		<GlobalContext.Provider value={{
      searchResult, setSearchResult,
      value, setValue
    }}>
			{children}
		</GlobalContext.Provider>
	);
}

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Router>
          <Header to="/" default />
          <Header path="/movies/:id" to="/movies" />
        </Router>
        <div className="App__fill">
          <Router>
            <Home path="/" />
            <Movies path="/movies" />
            <Movie path="/movies/:id" />
          </Router>
        </div>
        <Footer />
      </div>
    </GlobalProvider>
  );
}

Notification.requestPermission(function(status) {
  console.log("Notification permission status: ", status)
})

export default App;
