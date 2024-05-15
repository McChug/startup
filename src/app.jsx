import React from "react";
import "./app.css";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Rules } from "./rules/rules";
import { Open } from "./open/open";
import { Join } from "./join/join";
import { Demo } from "./demo/demo";

export default function App() {
  return (
    <BrowserRouter>
      <div className="main-page">
        <Routes>
          <Route path="/" element={<Join />} exact />
          <Route path="/rules" element={<Rules />} />
          <Route path="/open" element={<Open />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
        <script src="join.js"></script>
        <script src="play.js"></script>
      </div>
    </BrowserRouter>
  );
}

function Footer() {
  const location = useLocation();
  if ("/" === location.pathname) {
    return (
      <footer>
        <nav>
          <menu>
            <li>
              <NavLink className="nav-link" to="rules">
                How to Play
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="open">
                Open Lobby
              </NavLink>
            </li>
            <li>
              <a href="https://github.com/McChug/startup">GitHub</a>
            </li>
          </menu>
        </nav>
      </footer>
    );
  } else if (["/rules", "/open", "/demo"].includes(location.pathname)) {
    return (
      <footer>
        <nav>
          <menu>
            <li>
              <NavLink className="nav-link" to="/">
                Return
              </NavLink>
            </li>
          </menu>
        </nav>
      </footer>
    );
  }
}

function NotFound() {
  return <main>404: Sorry, buddy. Address unkown.</main>;
}
