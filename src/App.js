import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { Introduce, Carousel, CategoryProduct, MassageChair, WhatCustomerSay, Showroom, NewAndEvent, Contact } from './pages';

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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
