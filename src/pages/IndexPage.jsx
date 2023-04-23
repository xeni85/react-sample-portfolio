import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


function IndexPage() {

      return (
        <>
        <Header />
        <div className="container">
          <img src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' alt="My Picture" className="image" />
          <div className="text">
            <h2>About Me</h2>
            <p>
              Hi, my name is John Doe and I'm a software engineer based in San Francisco, California. I've been working in the tech industry for over 10 years, and I'm passionate about building innovative products that make people's lives easier.
            </p>
            <p>
              I've worked at several startups in the past, and I've gained a lot of experience in full-stack development, including React, Node.js, and SQL. I'm always learning new things and staying up-to-date with the latest technologies and best practices.
            </p>
            <p>
              When I'm not coding, you can find me hiking in the beautiful Bay Area mountains or playing guitar in my spare time. I'm also an avid traveler and love exploring new cultures and cuisines.
            </p>
          </div>
        </div>
        <Footer />
        </>
      );
    }

export default IndexPage;