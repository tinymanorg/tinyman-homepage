import * as React from "react"
import videoCover from "../images/cover.png"

const IndexPage = () => {
  return (
    <div class="container"> 
      <div class="intro_bg"></div>
      <div class="intro">
        <h1>Tiny but resilient</h1>
        <video autoPlay loop muted playsInline poster={videoCover}>
          <source src="/v11-movie-hevc.mov" type='video/mp4; codecs="hvc1"' />
          <source src="/v11-movie-webm.webm" type="video/webm" />
        </video>
        <p>Tinyman is a decentralized trading protocol which utilizes the fast and secure framework of the Algorand blockchain, creating an open and safe marketplace for traders, liquidity providers, and developers.</p>
      </div>
      <div class="section helper">
        <a class="helper_box" href="https://docs.tinyman.org/faq" target="_blank" rel="noreferrer">
          <h5>Frequently asked questions</h5>
          <p>A step-by-step guide for those new to Tinyman protocol</p>
        </a>
        <a class="helper_box" href="https://docs.tinyman.org/" target="_blank" rel="noreferrer">
          <h5>Documentation</h5>
          <p>Learn about the core concepts of Tinyman and Algorand ecosystem.</p>
        </a>        
        <a class="helper_box" href="https://tinymanorg.medium.com/who-is-this-tinyman-6eb2e787bf74" target="_blank" rel="noreferrer">
          <h5>Learn more about Tinyman</h5>
          <p>Take a close look at Tinyman and their vision.</p>
        </a>
      </div>
      <div class="section-s newversion">
        <h3>Tinyman Compensation Program</h3>
        <div class="content">
          <div class="compensation-text">
            <p class="announcement">Beginning on the 1st of January 2022, an attack was orchestrated on some of Tinyman’s pools by exploiting a previously unknown vulnerability in the Tinyman contracts. Since then, the contracts have been updated to v1.1 and we have started a compensation program for the users who were affected by those attacks.</p>
            <a href="https://tinymanorg.medium.com/tinyman-compensation-program-683dd2bd872b" class="link-s" target="_blank" rel="noreferrer">
                <div data-hover-animation="Read the blog post">
                Read the blog post
                </div>
            </a>
          </div>
          <div class="migration">
            <p>Tinyman v1.0 compensation program has been started. Check if you are eligible for lost funds and request your compensation amount.</p>
            <a href="https://v1.tinyman.org/" class="link-s" target="_blank" rel="noreferrer">
              <div data-hover-animation="Go to Compensator-3000">
                Go to Compensator-3000
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="section-s last">
        <h3>Our Roadmap</h3>
        <div class="roadmap_progress"></div>
        <ul class="list">
          <li>
            <h5>Q1 2022</h5>
            <p>Tinyman V1.1 Audit & Mainnet Launch</p>
          </li>
          <li>
            <h5>Q1 2022</h5>
            <p>Staking Rewards Program & Compensation</p>
          </li>
          <li>
            <h5>Q2 2022</h5>
            <p>Governance and Token Release</p>
          </li>
          <li>
            <h5>Q2 2022</h5>
            <p>Updated Analytics Portal</p>
          </li>
          <li>
            <h5>Q3 2022</h5>
            <p>Tinyman NFTs</p>
          </li>
          <li>
            <h5>Q4 2022</h5>
            <p>Tinyman Developer Program with Grants</p>
          </li>
        </ul>
      </div>

      <div class="cta_bg"></div>
      <div class="mainnet_cta">
        <div>
          <h2>Enjoy your ride!</h2>
          <p>Start drivin' around with Tinyman and enjoy trading between Algorand Standard Assets (ASAs) and providing liquidity with amazing fees. </p>
          <a href="https://app.tinyman.org/" class="link-s" target="_blank" rel="noreferrer">
            <div data-hover-animation="Go to Tinyman v1.1">
              Go to Tinyman v1.1
            </div>
          </a>
        </div>
      </div>

      <div class="testnet_cta">
        <div>
          <h2>Test drive?</h2>
          <p>Before you take a trip on the Mainnet, you can try the app with TestNet assets that have no value and make swap & pool transactions.</p>
          <a href="https://testnet.tinyman.org/" class="link-s" target="_blank" rel="noreferrer">
            <div data-hover-animation="Go to Tinyman Testnet">
              Go to Tinyman Testnet
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
