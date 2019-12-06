import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="container">
      <h1 className="title">Dries Hooghe</h1>

      <div className="row">
        <a href="https://www.linkedin.com/in/drieshooghe/" className="card" target="_blank">
          <h3>Linkedin</h3>
          <p>Learn about who I am</p>
        </a>
        <a href="https://www.github.com/drieshooghe" className="card" target="_blank">
          <h3>Github</h3>
          <p>Learn more about my projects.</p>
        </a>
      </div>
    </div>

		<style jsx>{`
			body {
				font-family: 'Bebas Neue', cursive;
			}
      .container {
				width: 100%;
				min-height: 100vh;
				display: flex;
				flex-direction: column;
				justify-content: center;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
				font-size: 48px;
				text-transform: uppercase;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
				width: 100%;
				max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
				flex-direction: row;
				justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
				border: 1px solid #9b9b9b;
				text-align: center;
      }
      .card:hover {
				border-color: #067df7;
      }
      .card h3 {
				transition: all 0.25s linear;
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
