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
import Filter from './components/filter/Filter';
import RemoveAccount from './components/delete/Delete';
import forgetPassword from './components/forgetPassword/forgetPassword';
import Book from './components/book/Book';
import BookTheater from './components/bookTheater/BookTheater';
import Bill from './components/bill/Bill';
import Search from './components/search/Search';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/favorites" component={() => localStorage.getItem("token") ? <Favorites /> : <Redirect to="/login" />} />
          <Route exact path="/bookNow" component={BookNow} />
          <Route exact path="/" component={AboutUs} />
          <Route exact path="/password" component={forgetPassword} />
          <Route exact path="/filter" component={Filter} />
          <Route exact path="/:search" component={Search} />
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/logout" component={() => localStorage.getItem("token") ? <Logout /> : <Redirect to="/login" />} />
          <Route exact path="/remove" component={() => localStorage.getItem("token") ? <RemoveAccount /> : <Redirect to="/login" />} />
          <Route exact path="/book/:id" component={() => localStorage.getItem("token") ? <Book /> : <Redirect to="/login" />} />
          <Route exact path="/:theater/:id/:show" component={() => localStorage.getItem("token") ? <BookTheater/> : <Redirect to="/login" />} />
          <Route exact path="/bill/:id/:seat" component={() => localStorage.getItem("token") ? <Bill/> : <Redirect to="/login" />} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

