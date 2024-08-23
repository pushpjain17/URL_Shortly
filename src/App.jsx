import './App.css'
import Navbar from './Components/Header'
import HomePage from './Components/Home'
import Footer from './Components/Footer'
import AboutPage from './Components/About'
import ContactPage from './Components/Contact'
import ResourcesPage from './Components/Resources'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'

function App() {
  // let p=fetch(( 'https://cleanuri.com/api/v1/shorten' )
  // p.then(val1) =>{
  //   return val1.json()
  // }).then((val2) => {
  //   console.log(val2)
  // })

//   let p = fetch('https://cleanuri.com/api/v1/shorten');

// p.then(val1 => {
//   return val1.json();
// }).then(val2 => {
//   console.log(val2);
// }).catch(error => {
//   console.error('Error fetching data:', error);
// });

  // fetch('https://cleanuri.com/api/v1/shorten')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //   })
  //   .catch(error => {
  //     console.error('Error fetching data:', error);
  //   });

  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar /><HomePage /><Footer /></>
    },
    {
      path:"/contact",
      element:<><Navbar /><ContactPage /><Footer /></>
    },
    {
      path:"/resources",
      element:<><Navbar /><ResourcesPage /><Footer /></>
    },
    {
      path:"/about",
      element:<><Navbar /><AboutPage /><Footer /></>
    }

  ]
  )

  return (
    <>
      
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
