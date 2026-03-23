import "./App.css";
import { ToDo } from "./ToDo";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <ToDo task= 'Learn React' isDone={false}></ToDo>
      <ToDo task= 'Learn Js' isDone={true}></ToDo>
      <ToDo task= 'Take a shower' isDone={false}></ToDo>
      {/* <Person />
      <Person />
      <Devloper name="md salim islam" tech="js"></Devloper>
      <Devloper name="mst djfk" tech="Python"></Devloper>
      <Devloper name="sdfdjfh" tech="angular"></Devloper>
      <Player name="tamin iqbal" runs='5000'></Player> */}
    </>
  );
}

function Player({name,runs}){
  return(
    <div>
      <h3>Name:{name}</h3>
      <p>Players run: {runs} </p>
    </div>
  )
}

function Devloper(props) {
  return (
    <div
      style={{
        border: "2px solid red",
        borderRadius: "20px",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <h3>Devloper: {props.name} </h3>
      <p>Technology: {props.tech} </p>
    </div>
  );
}
function Person() {
  const age = 17;
  return <p>Hello i am a person. my age is {age}</p>;
}

export default App;
