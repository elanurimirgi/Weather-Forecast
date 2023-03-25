import './App.css';
import Container from './container';
import { Weathercontext } from './weathercontext';
function App() {
  return (
    <div className="App">
      <Weathercontext>
        <Container />
      </Weathercontext>
    </div>
  );
}

export default App;
