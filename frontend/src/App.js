import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateBlog from './components/CreateBlog';
import EditBlog from './components/EditBlog';
import SingleBlog from './components/SingleBlog';
import NotFound from './components/NotFound';
import { Route , Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home />
        </Route>
        <Route exact path="/createBlog">
          <Navbar />
          <CreateBlog />
        </Route>
        <Route exact path="/blog/:id">
          <Navbar />
          <SingleBlog />
        </Route>
        <Route exact path="/editBlog/:id">
          <Navbar />
          <EditBlog />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
