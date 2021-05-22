import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import CreateItem from "./components/create_item.component";

import ItemList from "./components/crud_list.component";

import EditItem from "./components/edit_item.component";

import Navbar from "./components/navbar";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
    <Navbar/>
  <br/>
  <Route path="/create" component={CreateItem} />

  <Route path="" component={ItemList} />

  <Route path="/update/:username" component={EditItem} />
        </Router>

  );
}

export default App;
