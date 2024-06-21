import React from 'react';

const Column = ({ title, content }) => {
  return (
    <section style={columnStyle}>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
};

const columnStyle = {
  flex: 1,
  padding: '20px',
  border: '1px solid #ccc',
  margin: '10px',
  backgroundColor: '#f9f9f9'
};

export default Column;
