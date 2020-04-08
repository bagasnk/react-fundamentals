import React from 'react';
import logo from './logo.svg';
import NewScreen from './views/screens/NewScreen'
import TableProduct from './views/components/TableProduct'
import './App.css';

function App() {
  let arr = ['Bandung', 'Jakarta', 'Tanggerang', 'Papua']

  const renderArr = () => {
    return arr.map(val => {
      return (
        <>
          <p>{val}</p>
          <NewScreen />
        </>
      )
    })
  }

  return (
    <div className="App">
      <h1>HELLO WORLD !!</h1>
      <h2 style={{ border: '1px solid red', marginTop: '30px' }}>Test Styling</h2>
      {/* {renderArr()}   */}
      <TableProduct/>    
    </div>
  )
}

export default App;
