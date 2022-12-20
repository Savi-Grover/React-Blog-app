import logo from './logo.svg';
import './App.css';

function App() {

  //declare title as const
  const title="Welcome to my Blog";
  //declare like count
  const likes =50;
  const link="https://www.google.com";
  //decalre an object
  //const person = { firstname: 'savi',lastname: 'grover'};
  return (
    <div className="App">
    < div classname="content">
     <h1>App Component</h1>
     
     <h2>{ title }</h2>
     <p> Liked {likes} times </p>
    {/*<p> Blog owned by {person }</p>*/}
    <p>{3 + 4}</p>
    <p>{Math.random() * 20}</p>
    <a href={link} >Google Site </a>
    </div>
    </div>
  );
}

export default App;
