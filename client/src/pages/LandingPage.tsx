import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/CodexX Logo.png';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero is-fullheight has-background-dark">
        <div className="hero-body is-flex is-flex-direction-column is-align-items-center">
          {/* Image placed above the container */}
          <div className="hero-logo">
            <img src={logoImage} alt="CodexX Logo" className="landing-logo" />
          </div>

          <div className="container has-text-centered content-container">
            {/* Hero Content */}
            <h1 className="title has-text-white">
              Welcome to CodexX
            </h1>

            <div className="landing-page">
              <p>
                <em>
                  Your Ultimate Hub for Game Discovery and Collection
                </em>
              </p>
              <br />
              <p>
                Step into CodexX, where gaming meets organization and discovery. Track your favorite titles, uncover hidden gems, and build a unique collection that reflects your gaming journey—all in one place!
              </p>
              <br />
              <p>
                <strong>
                  Personalized Profiles
                </strong>
                : Create a profile that showcases your top games, ratings, and wishlists.
              </p>
              <br />
              <p>
                <strong>
                  Explore & Discover
                </strong>
                : Search an expansive game library, from classics to fresh releases. Add what excites you to your wishlist or library and keep your gaming radar on point.
              </p>
              <br />
              <p>
                <strong>
                  Curate Your Game Codex
                </strong>
                : Rate and track every game you’ve played, building a personal codex that grows with each adventure.
              </p>
              <br />
              <p>
                CodexX brings your gaming world together, giving you a space to dive deeper and make every game count. Ready to level up your collection?
              </p>
            </div>
            <Link to="/login" className="button is-link mt-5">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
