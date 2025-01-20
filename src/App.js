import './App.css';
import Header from './layout/Header';
import { Introduce, Carousel, CategoryProduct, MassageChair, WhatCustomerSay, Showroom, NewAndEvent } from './pages';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <Carousel />
      <Introduce />
      <CategoryProduct />
      <MassageChair />
      <WhatCustomerSay />
      <Showroom />
      <NewAndEvent />
    </div>
  );
}

export default App;
