import React from 'react';
import Header from './header'
import Footer from './footer'
import List from './list'
import Login from './login'

var islogin = true;
var isregister = true;


function App() {
  return (
    <div className="content">
      <React.StrictMode> <Header />
        {islogin === true ? <List /> : <Login Isreg={isregister} />}
        <Footer /> </React.StrictMode>
    </div>
  );
}

export default App;