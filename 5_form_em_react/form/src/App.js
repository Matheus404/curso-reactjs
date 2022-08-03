import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{ name: "Josias", email: "Josias@Gmail.com", bio: "programmer", role: "admin"}} />
    </div>
  );
}

export default App;
