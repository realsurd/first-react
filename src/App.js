import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './components/data';
import './App.css';

function App() {
  const cards =data.map (item => {
    return (
      <Card 
    key={item.id}
    item={item}
    />
    )
  })

  return (
    <div className='contacts'>
    <Navbar />
    <Hero />
    <section className='cards-list'>
      {cards}
    </section>
    
    </div>
  );
}

export default App;

  