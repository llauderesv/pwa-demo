import React from 'react';
import Button from '../Button';
import { getTokenItem, removeItem } from '../../localStorage';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Todo
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Feed <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          {getTokenItem() && (
            <li className="nav-item">
              <Button
                className="nav-link"
                onClick={() => {
                  removeItem('token');
                  window.location.href = '/';
                }}
              >
                Sign Out
              </Button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
