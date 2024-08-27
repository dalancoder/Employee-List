import React, { useState } from 'react';
import List from './components/List.jsx';
import data from "./helper/data"

function App() {
  // mevcut sayfa tutulması;
  const[mevcutSayfa, setMevcutSayfa]=useState(0);
  //datayı bölmeden önce baslamaindeksi belirleme
  const startIndeks = mevcutSayfa * 5;
  //sayfaveriye mevcut sayfada yer alacak veriyi belirleme
  const sayfaVeri = data.slice(startIndeks, (startIndeks+5));
  //next butonu yapacakları
  const handleNext =()=>  
      setMevcutSayfa(mevcutSayfa+1)
    
  
  //Prev butonu yapacağı;
  const handlePrev = ()=>  
      setMevcutSayfa(mevcutSayfa-1)


  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Employees {startIndeks+1} to {startIndeks+5})
        </h5>
        <List data = {sayfaVeri} />
        <div className='btns'>
          <button onClick={handlePrev} >Prev</button>
          <button onClick={handleNext} >Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
