import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Startup Name</title>
          <link rel="stylesheet" href="styles/globals.css"></link>
      </head>
      <body>
          <header>
              <div class="container">
                  <h1>Startup Name</h1>
                  <nav>
                      <ul>
                          <li><a href="#home">Home</a></li>
                          <li><a href="#about">About</a></li>
                          <li><a href="#services">Services</a></li>
                          <li><a href="#contact">Contact</a></li>
                      </ul>
                  </nav>
              </div>
          </header>
      
          <section id="home">
              <div class="container">
                  <h2>Welcome to Our Startup</h2>
                  <p>We provide innovative solutions for your business needs.</p>
              </div>
          </section>
      
          <section id="about">
              <div class="container">
                  <h2>About Us</h2>
                  <p>Our startup focuses on delivering high-quality products and services.</p>
              </div>
          </section>
      
          <section id="services">
              <div class="container">
                  <h2>Our Services</h2>
                  <ul>
                      <li>Service 1</li>
                      <li>Service 2</li>
                      <li>Service 3</li>
                  </ul>
              </div>
          </section>
      
          <section id="contact">
              <div class="container">
                  <h2>Contact Us</h2>
                  <form id="contactForm">
                      <label for="name">Name:</label>
                      <input type="text" id="name" name="name" required></input>
      
                      <label for="email">Email:</label>
                      <input type="email" id="email" name="email" required></input>
      
                      <label for="message">Message:</label>
                      <textarea id="message" name="message" required></textarea>
      
                      <button type="submit">Send</button>
                  </form>
              </div>
          </section>
      
          <footer>
              <div class="container">
                  <p>&copy; 2024 Startup Name. All rights reserved.</p>
              </div>
          </footer>
      
          <script src="scripts.js"></script>
      </body>
      <Footer />
    </div>
  )
}
