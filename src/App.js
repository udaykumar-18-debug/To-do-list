import './App.css';
import Header from './MyComponent/Header';
import Todos from './MyComponent/Todos';
import Footer from './MyComponent/Footer';

function App() {
  let todos = [
    {
      sno: 1,
      title: "Learn Apptitude",
      Description: "You need to learn apptitude for your placements."
    },
    {
      sno: 2,
      title: "Learn DSA",
      Description: "You need to learn apptitude for your placements."
    },
    {
      sno: 3,
      title: "Learn Development",
      Description: "You need to learn apptitude for your placements."
    }
  ]
  return (
  <>
    <Header title = "My Todo List"  searchBar = {true}/>
    <Todos todos= {todos}/>
    <Footer/>
  </>
  );
}

export default App;
