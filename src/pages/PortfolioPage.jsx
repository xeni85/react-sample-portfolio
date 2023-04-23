import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';

const PortfolioPage = () => {
    return (
        <>
         <Header />
       
        <div className='portfolio'>
           
          <h2>Portfolio</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae velit euismod, tristique libero quis, euismod nibh. Etiam auctor, enim eget commodo vehicula, eros odio malesuada lacus, eu laoreet orci lorem nec libero.
          </p>
          <img src="https://via.placeholder.com/600x400" alt="Project 1" />
          <p>
            Fusce ornare malesuada est, ac tincidunt orci semper nec. Pellentesque nec quam massa. Praesent in elit commodo, convallis nisi eu, semper nisi.
          </p>
          <img src="https://picsum.photos/600/400" alt="Project 2" />
          <p>
            Aliquam ac libero id turpis tincidunt efficitur a eget eros. Etiam sit amet orci ut magna aliquam fringilla. Nullam venenatis sodales dolor, non auctor turpis vestibulum in. 
          </p>
          <img src="https://placeimg.com/600/400/tech" alt="Project 3" />
          <p>
            Phasellus dignissim euismod arcu, vel efficitur odio eleifend eget. Nullam ac dolor ligula. Sed ac ligula vitae lectus feugiat sodales in eu nibh.
          </p>
          <img src="https://source.unsplash.com/600x400/?technology" alt="Project 4" />
        </div>
        <Footer/>
        </>
      );
      
    }

export default PortfolioPage