import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import Drawer from './components/Drawer';

function App() {
  const [selectedId, setSelectedId] = useState();

  return (
    <div className="App">
      <Header />
      <Banner />
      <Services selectedId={selectedId} setSelectedId={setSelectedId} />
      <Drawer
        open={selectedId !== undefined}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
      <div style={{ height: '1000px' }}></div>
    </div>
  );
}

export default App;
