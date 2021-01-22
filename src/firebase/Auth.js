import React, { useState } from "react";
import { projectAuth, projectFirestore } from "../config";

export default function Auth({ loggedIn }) {
  const [suToggle, setsuToggle] = useState(false);
  const [siToggle, setsiToggle] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [siEmail, setSiEmail] = useState("");
  const [siPassword, setSiPassword] = useState("");
  const [suError, setSuError] = useState("");
  const [siError, setsiError] = useState("");

  const suHandler = () => {
    setsuToggle(!suToggle);
  };
  const siHandler = () => {
    setsiToggle(!siToggle);
  };
  const suSubmit = (e) => {
    e.preventDefault();
    projectAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setPassword("");
        setEmail("");
        setsuToggle(false);
      })
      .catch((err) => {
        setSuError(err.message);
      });
  };

  const siSubmit = (e) => {
    e.preventDefault();
    projectAuth
      .signInWithEmailAndPassword(siEmail, siPassword)
      .then(() => {
        setSiPassword("");
        setSiEmail("");
        setsiToggle(false);
      })
      .catch((err) => {
        setsiError(err.message);
      });
  };

  const logoutHandler = () => {
    projectAuth.signOut();
  };

  return (
    <section className="auth">
      {loggedIn === false && (
        <div className="modal-signup modal">
          <div className="modal-content">
            <h3 className="nav-links" onClick={suHandler}>
              Sign up
            </h3>
            {suToggle && (
              <form className="signup-form">
                <div className="input-field">
                  <input
                    type="email"
                    id="signup-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label htmlFor="signup-email">Email Address</label>
                </div>
                <div className="input-field">
                  <input
                    type="password"
                    id="signup-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label htmlFor="signup-password">Choose Password</label>
                </div>
                <button className="signup-btn" onClick={suSubmit}>
                  Sign Up
                </button>
                {suError && <p className="error pink-text">{suError}</p>}
              </form>
            )}
          </div>
        </div>
      )}
      {/* SIGN IN */}
      {loggedIn === false && (
        <div className="modal-signin modal">
          <div className="modal-content">
            <h3 className="nav-links" onClick={siHandler}>
              Log in
            </h3>
            {siToggle && (
              <form className="signin-form">
                <div className="input-field">
                  <input
                    type="email"
                    id="signin-email"
                    value={siEmail}
                    onChange={(e) => setSiEmail(e.target.value)}
                    required
                  />
                  <label htmlFor="signin-email">Email Address</label>
                </div>
                <div className="input-field">
                  <input
                    type="password"
                    id="signin-password"
                    value={siPassword}
                    onChange={(e) => setSiPassword(e.target.value)}
                    required
                  />
                  <label htmlFor="signin-password">Choose Password</label>
                </div>
                <button className="signin-btn" onClick={siSubmit}>
                  Log In
                </button>
                {siError && <p className="error pink-text">{siError}</p>}
              </form>
            )}
          </div>
        </div>
      )}
      {/* END SIGN IN */}
      {/* LOGOUT */}
      {loggedIn && (
        <div className="modal-logout">
          <div className="modal-conten">
            <h3 className="nav-links" onClick={logoutHandler}>
              {" "}
              Log out
            </h3>
          </div>
        </div>
      )}
      {/* END LOGOUT */}
    </section>
  );
}
