import * as React from "react"
import { Helmet } from 'react-helmet'

const Careers = () => {

  return (
    <div class="container careers"> 
    <Helmet>
      <title>Tinyman needs co-pilot | Tinyman</title>
    </Helmet>
    <div class="careers_bg">
    </div>
    <div class="sub_intro">
      <h1>Tinyman needs co-pilot</h1>
      <p>Join us on our mission to create a more secure, transparent, and open financial ecosystem for Algorand blockchain.</p>
      <div class="buttons">
        <a href="mailto:careers@tinyman.org" target="_blank" rel="noreferrer">Contact us: careers@tinyman.org</a>
      </div>
    </div>
    <div class="careers_space">
      <div class="links">
        <a href="https://twitter.com/dmt_vision" target="_blank" rel="noreferrer">Art by @dmt_vision</a>
        <a href="https://dartroom.mypinata.cloud/ipfs/Qmcfar5cRREi4dG8xrAEC6AfemJJrucywYw5x1qKpL9Zyy" target="_blank" rel="noreferrer">
          View on IPFS
          <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M8.67945 2.59202L1.15945 10.08L0.439453 9.36002L7.95945 1.85602H3.25545V0.848022H9.70345V7.29602H8.67945V2.59202Z" fill="black"/>
          </svg>
        </a>
      </div>
    </div>
    <div class="section double">
      <div>
        <h3>Our mission</h3>
        <p>We are builders of a new technology that is constantly evolving. Our aim is simple, to create the best experience for our users as we try to build a decentralized company with our community.</p>
      </div>
      <div>
        <h3>Working at Tinyman</h3>
        <p>Tinyman has a distributed team that works remotely. Constant communication is vital for us to sync on different product areas. Therefore, we look for respect among team members and good communication above all as we build a tiny culture together.</p>
      </div>
    </div>
    <div class="careers_cta_bg"></div>
    <ul class="careers_cta">
      <li class="coming-soon">
        <p><h2>See open positions<span>Coming soon</span></h2></p>
      </li>
      <li>
        <a href="mailto:careers@tinyman.org" target="_blank" rel="noreferrer"><h2>Contact us</h2></a>
      </li>
    </ul>
  </div>
  )
}

export default Careers
