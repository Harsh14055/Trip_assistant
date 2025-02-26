import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navigation";
import Home from "./pages/home";
import About from "./pages/About";
import Places from "./pages/Places";
import Contact from "./pages/Contact";
import FindFriends from "./pages/FindFriends";
import Auth from "./pages/Auth";
import Signup from "./pages/Auth"; // Added Signup Page
import Login from "./pages/Auth"; // Added Login Page
import Footer from "./components/footer";

function AppContent() {
  const location = useLocation(); // Get the current route

  return (
    <>
      {/* Show Navbar only if NOT on the Auth, Signup, or Login page */}
      {location.pathname !== "/auth" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/login" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/places" element={<Places />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/find-friends" element={<FindFriends />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/signup" element={<Signup />} /> {/* Signup Route */}
        <Route path="/login" element={<Login />} /> {/* Login Route */}
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
