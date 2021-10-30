import Header from './components/header/Header';
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
import Book from './components/book/Book';
import BookCarnivels from './components/bookCarnivels/BookCarnivels';
import BookPVR from './components/bookPVR/BookPVR';

function App() {
  return (
    <div>
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/movies" component={Movies}/>
          <Route exact path="/favorites" component={() => localStorage.getItem("token") ? <Favorites /> : <Redirect to="/login" />} />
          <Route exact path="/bookNow" component={BookNow}/>
          <Route exact path="/" component={AboutUs} />
          <Route exact path="/filter" component={Filter} />
          <Route exact path="/book" component={() => localStorage.getItem("token") ? <Book /> : <Redirect to="/login" />} />
          <Route exact path="/bookPVR" component={() => localStorage.getItem("token") ? <BookPVR /> : <Redirect to="/login" />} />
          <Route exact path="/bookCarnivels" component={() => localStorage.getItem("token") ? <BookCarnivels /> : <Redirect to="/login" />} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/logout" component={() => localStorage.getItem("token") ? <Logout /> : <Redirect to="/login" />} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

