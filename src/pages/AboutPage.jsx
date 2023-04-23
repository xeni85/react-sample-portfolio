import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
    return (
        <>
        <Header />
        <div className='about'>
          <h2>About Us</h2>
          <img src="https://via.placeholder.com/600x400" alt="About Us" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum, turpis in tempus rhoncus, risus magna aliquet mi, id euismod nulla magna eget velit. Vestibulum tempus, libero vel convallis laoreet, sapien velit feugiat eros, a dictum justo augue at tellus. Suspendisse potenti. Aliquam vitae venenatis lectus, non interdum ipsum. Sed sed libero id risus aliquam fermentum. Donec in ex eu nisl mattis hendrerit vel sed velit. Ut quis massa libero. Sed convallis, enim id fringilla mollis, lacus augue rutrum lorem, ac euismod elit elit vel elit. Nullam vitae imperdiet lorem.
          </p>
        </div>
        <Footer />
        </>
      );
}

export default AboutPage