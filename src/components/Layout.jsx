import {Link,Outlet} from 'react-router-dom';

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";


const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export {Layout};