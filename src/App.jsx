import { Layout } from 'antd';
import Navbar from './components/Navbar';
import TravelRoutes from './components/TravelRoutes';
import Footer from './components/Footer';
import './App.css';
import 'antd/dist/reset.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <TravelRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
