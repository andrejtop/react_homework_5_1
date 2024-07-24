import './App.css';
import Card from './components/Card';

// Функциональный компонент приложения
function App() {
  return (
    <>
      <Card title="Limited Offer!" text="Limited time offer: Get 10 free Adobe Stock images." link="#" linkText="Get It!">
        <img src="https://bytepix.ru/ib/oqXZBGoNpx.png" className="card-img-top" alt="..." />
      </Card>    
    </>
  );
}

export default App;