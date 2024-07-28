
// import './App.css';
// import React, { Component } from 'react'
// import Navbar from './components/Navbar';
// import News from './components/news';
// import { Router } from 'react-router-dom';
// // Import Bootstrap CSS in your React component
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";



// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//         {/* <Navbar/> */}
//         <Navbar/>
//         <News pageSize={5} country="in" category="sports"/>

//         {/* hello my first react class based app{this.c} */}

//         <Routes>
//           <Route path="/about">
//             <About />
//           </Route>
         
//           <Routes/>
//         </Router>
//       </div>
//     )
//   }
// }

import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/news';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  pageSize=15;
  render() {
   
    return (
      <div>
        <Router>
          <Navbar />
          {/* <News pageSize={5} country="in" category="sports" /> */}

          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country="in" category="health" />} />
            <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} country="in" category="science" />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country="in" category="technology" />} />


          </Routes>
        </Router>
      </div>
    );
  }
}

// Define the About component here or import it from another file
function About() {
  return <h2>About Page</h2>;
}
