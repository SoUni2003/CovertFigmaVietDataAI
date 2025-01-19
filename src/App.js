import './App.css';
import Header from './layout/Header';
import { Introduce, Carousel, CategoryProduct, MassageChair, WhatCustomerSay } from './pages';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <Carousel />
      <Introduce />
      <CategoryProduct />
      <MassageChair />
      <WhatCustomerSay />
    </div>
  );
}

export default App;
