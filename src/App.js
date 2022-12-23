import './App.css';
import NavBar from './Navbar';
import Home from './Home';
import Article from './Article';
//import BlogList from './BlogList';
import NewBlog from './NewBlog';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetail from './BlogDetail';
import NotFound from './NotFound';

function App() {

  //declare title as const
  //const title="Welcome to my Blog";
  //declare like count
  //const likes =50;
  //const link="https://www.google.com";
  //decalre an object
  //const person = { firstname: 'savi',lastname: 'grover'};
  return (
    <Router>
    <div className="App">
      <NavBar/>
    <div classname="content">
      <Switch>
        <Route exact path='/'>
        <Home/>
        </Route>
        <Route exact path="/blogs/:id">
        <BlogDetail/>
        </Route>
        <Route exact path="/create">
        <NewBlog/>
        </Route>
        <Route exact path="/contact">
        <Contact/>
        </Route>
        <Route exact path="*">
        <NotFound/>
        </Route>
      </Switch>
     {/*<h1>App Component</h1>*/}
     
     {/*<h2>{ title }</h2>*/}
     {/*<p> Liked {likes} times </p>*/}
    {/*<p> Blog owned by {person }</p>*/}
    </div>
    <Article/>
    </div>
    </Router>
  );
}

export default App;
