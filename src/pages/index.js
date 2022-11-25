import * as React from "react"

const IndexPage = () => {
  return (
    <div class="container"> 
      <div class="intro_bg"></div>
      <div class="intro">
        <h1>We Are Building For The Future of DeFi</h1>
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
        <div class="amm_logo"></div>
        <div class="content">
          <div>
            <p class="announcement">Tinyman V2.0 protocol is just around the corner. Before going live we think its crucial that our contracts are battle tested by the community with full transparency. We are super excited for this new chapter of Tinyman and can’t wait to show you all the new features we’ve built. See our blog post to learn more about our bounty program and much more.</p>
            <a href="https://tinymanorg.medium.com/tinyman-amm-v2-0-protocol-201e0f32f58d" class="link-s" target="_blank" rel="noreferrer">
                <div data-hover-animation="Read the blog post">
                Read the blog post
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
            <h5>Q1 2023</h5>
            <p>Tinyman V2.0 Mainnet Launch</p>
          </li>
          <li>
            <h5>Q1 2023</h5>
            <p>Multi Hop Routing for Swaps</p>
          </li>
          <li>
            <h5>Q2 2022</h5>
            <p>Metapools & Updated Analytics</p>
          </li>
          <li>
            <h5>Q3 2023</h5>
            <p>Native Bridge Integration</p>
          </li>
          <li>
            <h5>Q3 2023</h5>
            <p>Governance and Grants Program</p>
          </li>
          <li>
            <h5>Q4 2023</h5>
            <p>Treasury Management</p>
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
