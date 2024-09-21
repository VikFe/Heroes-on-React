import './App.css';
import data from "./data.json";
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      {data.map((hero, index) => (
        <Card 
        key={index}
        name={hero.name}
        universe={hero.universe}
        alterego={hero.alterego}
        occupation={hero.occupation}
        friends={hero.friends}
        superpowers={hero.superpowers}
        url={hero.url}
        info={hero.info}
        />
      ))}
    </div>
  );
}

export default App;
