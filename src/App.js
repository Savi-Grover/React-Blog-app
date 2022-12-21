
import './App.css';
import NavBar from './Navbar';
import Home from './Home';
import Article from './Article';
import BlogList from './BlogList';

function App() {

  //declare title as const
  //const title="Welcome to my Blog";
  //declare like count
  //const likes =50;
  //const link="https://www.google.com";
  //decalre an object
  //const person = { firstname: 'savi',lastname: 'grover'};
  return (
    <div className="App">
      <NavBar/>
    <div classname="content">
      <Home/>
     {/*<h1>App Component</h1>*/}
     
     {/*<h2>{ title }</h2>*/}
     {/*<p> Liked {likes} times </p>*/}
    {/*<p> Blog owned by {person }</p>*/}
    </div>
    <Article/>
    </div>
  );
}

export default App;
