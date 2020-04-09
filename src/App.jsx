import React from 'react';
import logo from './logo.svg';
import NewScreen from './views/screens/NewScreen'
import TableProduct from './views/components/TableProduct'
import CounterScreen from './views/screens/CounterScreen'
import ProductCard from './views/components/ProductCard'
import ProductBooks from './views/components/ProductBooks'
import Brave from './brave.png'
import Crazy from './crazyRich.png'
import Educated from './educated.png'
import Handmaid from './handmaid.png'
import 'font-awesome/css/font-awesome.min.css';



import './App.css';

function App() {
  // let arr = ['Bandung', 'Jakarta', 'Tanggerang', 'Papua']

  // let arrProducts = [
  //   {
  //     nama: "Sepatu Basket",
  //     harga: 2300000,
  //     desc: "Sepatu basket keluaran terbaru loh! Pake sepatu ini auto menang",
  //     discount: 20,
  //     stock: 10,
  //   },
  //   {
  //     nama: "Kaos Polo",
  //     harga: 250000,
  //     desc: "Tingkatkan penampilanmu menggunakan kaos berkelas ini",
  //     discount: 40,
  //     stock: 0,
  //   },
  //   {
  //     nama: "Celana Jeans",
  //     harga: 550000,
  //     desc: "Nyaman dan dengan bahan premium gan, stock selalu ready!",
  //     discount: 0,
  //     stock: 5,
  //   },
  // ]

  let arrBooks = [
    {
      author: "Margaret Atwood",
      title: "The handmaid's tale",
      review: 4,
      desc: `This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...`,
      price: 18.99,
      discount: 60,
      image: Handmaid,
      stock: 7,
    },
    {
      author: "Kevin Kwan",
      title: "Crazy rich asians",
      review: 5,
      desc: `the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...`,
      price: 24.12,
      discount: 80,
      image: Crazy,
      stock: 0,
    },
    {
      author: "Aldous Huxley",
      title: "Brave new world",
      review: 3,
      desc: `dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...`,
      price: 18.99,
      discount: 60,
      image: Brave,
      stock: 3,
    },
    {
      author: "Tara Westover",
      title: "Educated",
      review: 4.5,
      desc: `It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...`,
      price: 34.21,
      discount: 0,
      image: Educated,
      stock: 3,
    },
  ];

  const renderProduct = () => {
    return arrBooks.map(val => {
      return <div className='col-md-6'><ProductBooks productData={val} /></div>
    })
  }

  return (
    <div className='App'>
      <h1>Hallo World</h1>
      <div className='row'>{renderProduct()}</div>
    </div>
  )

  // const renderProduct = () => {
  //   return arrProducts.map(val => {
  //     return <ProductCard productData={val} />
  //   })
  // }

  // return <div className='App'>{renderProduct()}</div>


  // const renderArr = () => {
  //   return arr.map(val => {
  //     return <CounterScreen kota={val} />
  //       // <>
  //       //   <p>{val}</p>
  //       //   <NewScreen />
  //       // </>
  //   })
  // }

  // return <div className='App'>{renderArr()}</div>



  return (
    <div className="App">
      {/* <h1>HELLO WORLD !!</h1> */}
      {/* <h2 style={{ border: '1px solid red', marginTop: '30px' }}>Test Styling</h2> */}
      {/* {renderArr()}   */}
      {/* <TableProduct />     */}
      {/* <CounterScreen terserah='kamu' /> */}
      {/* <ProductCard /> */}
    </div>
  )
}

export default App;
