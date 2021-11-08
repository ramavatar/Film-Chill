import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from '../src/components/login/Login';
import Register from '../src/components/register/Register';
import Movies from '../src/components/movies/Movies';
import Favorites from '../src/components/favorites/Favorites';
import AboutUs from '../src/components/aboutUs/AboutUs';
import Logout from '../src/components/logout/Logout';
import './App.css';
import Details from './components/details/Details';
import BookNow from './components/bookNow/BookNow';
import Search from './components/search/Search';
import Filter from './components/filter/Filter';
import FilterHighRated from './components/filter/FilterHighRated';
import FilterPopular from './components/filter/FilterPopular';
import FilterBestDrama from './components/filter/FilterBestDrama';
import RemoveAccount from './components/delete/Delete';
import forgetPassword from './components/forgetPassword/forgetPassword';
import ChooseTheater from './components/chooseTheater/ChooseTheater';
import BookSeat from './components/bookSeat/BookSeat';
import Bill from './components/bill/Bill';
import Header from './components/header/Header';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Movies} />
          <Route exact path="/favorites" component={() => localStorage.getItem("token") ? <Favorites /> : <Redirect to="/login" />} />
          <Route exact path="/bookNow" component={BookNow} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/password" component={forgetPassword} />
          <Route exact path="/filter" component={Filter} />
          <Route exact path="/filter/highRated" component={FilterHighRated} />
          <Route exact path="/filter/popular" component={FilterPopular} />
          <Route exact path="/filter/bestDrama" component={FilterBestDrama} />
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/logout" component={() => localStorage.getItem("token") ? <Logout /> : <Redirect to="/login" />} />
          <Route exact path="/remove" component={() => localStorage.getItem("token") ? <RemoveAccount /> : <Redirect to="/login" />} />
          <Route exact path="/choosetheater/:movieName" component={() => localStorage.getItem("token") ? <ChooseTheater /> : <Redirect to="/login" />} />
          <Route exact path="/book/:theater/:movieName/:showtiming" component={() => localStorage.getItem("token") ? <BookSeat/> : <Redirect to="/login" />} />
          <Route exact path="/bill/:movieName/:theater" component={() => localStorage.getItem("token") ? <Bill/> : <Redirect to="/login" />} />
          <Route exact path="/:search" component={Search} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

