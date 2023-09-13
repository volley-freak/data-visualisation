import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Insights from './components/Insights';
import MainBody from './components/MainBody';
import Sidebar from './components/Sidebar';

function App() {


  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <main className='p-5'>
            <Header />
            <MainBody />
          </main>
        </div>
      </div>


    </div>
  );
}

export default App;
