import React from 'react';
import Header from './comp/Header';
import Column from './comp/Col';
import Footer from './comp/Footer';

const App = () => {
  return (
    <div style={appStyle}>
      <Header />
      <div style={containerStyle}>
        <Column title="Column 1" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <Column title="Column 2" content="Integer euismod augue id nisl bibendum, non condimentum massa tristique." />
        <Column title="Column 3" content="Phasellus at ante a nunc pellentesque imperdiet." />
      </div>
      <Footer />
    </div>
  );
};

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
};

const containerStyle = {
  display: 'flex',
  flex: 1,
  maxWidth: '1200px',
  margin: '0 auto'
};

export default App;
