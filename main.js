// import your components, pages and services
import NavBar from "./components/navbar.js";
import HomePage from "./pages/home.js";
import FacilitiesPage from "./pages/facilities.js";
import WinterbathingPage from "./pages/winterbathing.js";
import EventsPage from "./pages/events.js";
import ContactPage from "./pages/contact.js";
import spaService from "./services/spa.js";

// Declare and init
let navbar = new NavBar();
let homePage = new HomePage();
let facilitiesPage = new FacilitiesPage();
let winterbathingPage = new WinterbathingPage();
let eventsPage = new EventsPage();
let contactPage = new ContactPage();

// init services
spaService.init();

window.pageChange = () => spaService.pageChange();
