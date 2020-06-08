// == Import npm
import React, { useEffect } from 'react';
import { Route, useParams } from 'react-router-dom';


// == Import
import Header from 'src/containers/Header';
import NavbarUser from 'src/containers/NavbarUser';
import Home from 'src/containers/Home/Home';
import GroceryLists from 'src/containers/GroceryLists';
import GroceryList from 'src/containers/GroceryList';
import UserData from 'src/containers/UserData';
import SignUp from 'src/containers/SignUp';
import SignIn from 'src/containers/SignIn';
import Footer from 'src/components/Footer';
import MobileNavbar from 'src/containers/MobileNavbar';
import ForgottenPwd from 'src/containers/ForgottenPwd';
import ResetPwd from 'src/containers/ResetPwd';
import FavoriteRecipes from 'src/containers/FavoriteRecipes';

import GlobalStyles from 'src/styles/GlobalStyles';
import AppStyled from './AppStyled';

// == Composant
const App = ({ isConnected, loadData }) => {
  // console.log(isConnected);
  useEffect(() => {
    const userToken = sessionStorage.getItem('userToken');
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    console.log(userData);
    if(userToken !== null){
      loadData(userData);
    }; 
  }, []);
  return (
    <AppStyled>
      <GlobalStyles />
      <div className="top-page">
        <Header />
        <NavbarUser />
      </div>
      <div className="middle-page">
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/grocery-lists">
          <GroceryLists />
        </Route>
        <Route exact path="/grocery-lists/:id" component={GroceryList} />
        <Route exact path="/user-data">
          <UserData />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
        <Route exact path="/sign-in">
          <SignIn />
        </Route>
        <Route exact path="/forgotten-pwd">
          <ForgottenPwd />
        </Route>
        <Route exact path="/reset-pwd/:token" component={ResetPwd} />
        <Route exact path="/favorite-recipes">
          <FavoriteRecipes />
        </Route>
        <div className="footer-mobile">
          <Footer />
        </div>
      </div>
      <div className="footer-desktop">
        <Footer />
      </div>
      <div className="mobile-navbar">
        <MobileNavbar />
      </div>
    </AppStyled>
  );
};

// == Export
export default App;
