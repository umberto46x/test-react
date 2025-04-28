import "bootstrap/dist/css/bootstrap.css";
import { ToDo } from "./components/ToDo";
import { TextAreaWithLimit } from "./components/TextAreaWithLimit";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Exercises</h1>
      <TextAreaWithLimit />
      <ToDo />
    </div>
  );
}

export default App;
