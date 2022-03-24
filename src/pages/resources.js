import * as React from "react"
import { Helmet } from 'react-helmet'

const Resources = () => {
  return (
  <div class="container learn"> 
    <Helmet>
      <title>Deep dive into the Tinyverse | Tinyman</title>
    </Helmet>
      <div class="learn_bg"></div>
      <div class="sub_intro">
        <h1>Deep dive into the Tinyverse</h1>
      </div>
      <div class="section quick_links">
        <div>
          <h4>Let me see some documents</h4>
          <p>Learn about the core concepts and the main points of Tinyman and DeFi products of Algorand ecosystem. Swapping, pooling, fees, and more...</p>
        </div>
        <ul>
          <li>
            <a href="https://tinymanorg.medium.com/who-is-this-tinyman-6eb2e787bf74" target="_blank" rel="noreferrer">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2H6C3.79086 2 2 3.79086 2 6V10C2 12.2091 3.79086 14 6 14H10C12.2091 14 14 12.2091 14 10V6C14 3.79086 12.2091 2 10 2ZM6 0C2.68629 0 0 2.68629 0 6V10C0 13.3137 2.68629 16 6 16H10C13.3137 16 16 13.3137 16 10V6C16 2.68629 13.3137 0 10 0H6ZM7 8H9V12H7V8ZM9 4H7V6H9V4Z" fill="black"/>
              </svg>
              What is Tinyman?
            </a>
          </li>
          <li>
            <a href="https://docs.tinyman.org/faq" target="_blank" rel="noreferrer">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3.5C0 1.567 1.567 0 3.5 0H12.5C14.433 0 16 1.567 16 3.5C16 5.433 14.433 7 12.5 7H3.5C1.567 7 0 5.433 0 3.5ZM3.5 2H12.5C13.3284 2 14 2.67157 14 3.5C14 4.32843 13.3284 5 12.5 5H3.5C2.67157 5 2 4.32843 2 3.5C2 2.67157 2.67157 2 3.5 2Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12.5C0 10.567 1.567 9 3.5 9H12.5C14.433 9 16 10.567 16 12.5C16 14.433 14.433 16 12.5 16H3.5C1.567 16 0 14.433 0 12.5ZM3.5 11H12.5C13.3284 11 14 11.6716 14 12.5C14 13.3284 13.3284 14 12.5 14H3.5C2.67157 14 2 13.3284 2 12.5C2 11.6716 2.67157 11 3.5 11Z" fill="black"/>
              </svg>
              Frequently Asked Questions
            </a>
          </li>
          <li>
            <a href="https://docs.tinyman.org/design-doc" target="_blank" rel="noreferrer">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 3C16 1.34315 14.6569 0 13 0H3C1.34962 0 0.0104981 1.33267 6.1423e-05 2.9806L0 3V13C0 14.6569 1.34315 16 3 16H13C14.6569 16 16 14.6569 16 13V3ZM3 2C2.51675 2 2.11356 2.34278 2.02032 2.79847C2.007 2.86356 2 2.93096 2 3V5H14V3C14 2.44772 13.5523 2 13 2H3ZM9 14H12C13.1046 14 14 13.1046 14 12V7H9V14ZM7 7V14H3C2.44772 14 2 13.5523 2 13V7H7Z" fill="black"/>
              </svg>
              Design Doc
            </a>
          </li>
          <li>
            <a href="https://docs.tinyman.org/fees" target="_blank" rel="noreferrer">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 11V9H10V11H12Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15 4V5.35418C15.6224 6.05931 16 6.98555 16 8V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4C0 1.79086 1.79086 0 4 0H11C13.2091 0 15 1.79086 15 4ZM4 2H11C12.1046 2 13 2.89543 13 4V4.12602C12.6804 4.04375 12.3453 4 12 4H4C3.27143 4 2.58835 4.19479 2 4.53513V4C2 2.89543 2.89543 2 4 2ZM12 6H4C2.89543 6 2 6.89543 2 8V12C2 13.1046 2.89543 14 4 14H12C13.1046 14 14 13.1046 14 12V8C14 6.89543 13.1046 6 12 6Z" fill="black"/>
              </svg>
              Fees
            </a>
          </li>
        </ul>
      </div>
      <div class="section helper">
        <a class="helper_box" href="https://www.youtube.com/playlist?list=PLFRZV55GOPLtWhefSq2lOS12R4mDLzPFZ" target="_blank" rel="noreferrer">
          <h5>Tinyman Tutorials</h5>
          <p>Tinyman provides basic tutorials for beginner swappers and liquidity providers.</p>
        </a>
        <a class="helper_box" href="https://tinymanorg.medium.com/" target="_blank" rel="noreferrer">
          <h5>Tinyman Blog</h5>
          <p>Follow all the developments and updates in Tinyman with all the details.</p>
        </a>        
        <a class="helper_box" href="https://discord.gg/wvHnAdmEv6" target="_blank" rel="noreferrer">
          <h5>Join our Discord</h5>
          <p>Do you have any questions, or are you interested in contributing? We are always ready for your ideas!</p>
        </a>
      </div>

      <div class="section">
        <h2>Developers</h2>
        <div class="developers">
          <ul>
            <li>
              <h4>Contracts</h4>
              <p>The Tinyman contracts consist of a single stateful smart contract (the Validator App) and a template for a stateless smart contract for each Pool, the Pool LogicSig.</p>
            </li>
            <li>
              <a href="https://github.com/tinymanorg/tinyman-contracts-v1" target="_blank" rel="noreferrer">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.1394 3.45001L1.1001 13.4893L2.51431 14.9036L12.5539 4.86401L12.5539 12.7637H14.5539L14.5539 1.45001L3.24015 1.45001L3.24015 3.45001L11.1394 3.45001Z" fill="black"/>
                </svg>
                Tinyman Contracts v1.1
              </a>
            </li>
            <li>
              <a href="https://github.com/runtimeverification/publications/blob/main/reports/smart-contracts/Tinyman.pdf" target="_blank" rel="noreferrer">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.1394 3.45001L1.1001 13.4893L2.51431 14.9036L12.5539 4.86401L12.5539 12.7637H14.5539L14.5539 1.45001L3.24015 1.45001L3.24015 3.45001L11.1394 3.45001Z" fill="black"/>
                </svg>
                Audit
              </a>
            </li>
            <li>
              <a href="https://github.com/tinymanorg/tinyman-contracts-v1/blob/main/Tinyman_AMM_Contracts_V1-1_Internal_Review.pdf" target="_blank" rel="noreferrer">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.1394 3.45001L1.1001 13.4893L2.51431 14.9036L12.5539 4.86401L12.5539 12.7637H14.5539L14.5539 1.45001L3.24015 1.45001L3.24015 3.45001L11.1394 3.45001Z" fill="black"/>
                </svg>
                Internal Review
              </a>
            </li>
            <li>
              <a href="https://tinymanorg.medium.com/tinyman-bug-bounty-campaign-b6c5e1ba7d6c" target="_blank" rel="noreferrer">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.1394 3.45001L1.1001 13.4893L2.51431 14.9036L12.5539 4.86401L12.5539 12.7637H14.5539L14.5539 1.45001L3.24015 1.45001L3.24015 3.45001L11.1394 3.45001Z" fill="black"/>
                </svg>
                Bug Bounty Program
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <h4>Official SDKs</h4>
              <p>These are SDKs started and maintained by the Tinyman core development team.</p>
            </li>
            <li>
              <a href="https://github.com/tinymanorg/tinyman-py-sdk" target="_blank" rel="noreferrer">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.1394 3.45001L1.1001 13.4893L2.51431 14.9036L12.5539 4.86401L12.5539 12.7637H14.5539L14.5539 1.45001L3.24015 1.45001L3.24015 3.45001L11.1394 3.45001Z" fill="black"/>
                </svg>
                Tinyman Python SDK
              </a>
            </li>
            <li class="disabled">
              <button>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 10.5C6.5 9.67157 7.17157 9 8 9C8.82843 9 9.5 9.67157 9.5 10.5C9.5 11.3284 8.82843 12 8 12C7.17157 12 6.5 11.3284 6.5 10.5Z" fill="black"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C5.79086 0 4 1.79086 4 4V5H3C1.34315 5 0 6.34315 0 8V13C0 14.6569 1.34315 16 3 16H13C14.6569 16 16 14.6569 16 13V8C16 6.34315 14.6569 5 13 5H12V4C12 1.79086 10.2091 0 8 0ZM10 5V4C10 2.89543 9.10457 2 8 2C6.89543 2 6 2.89543 6 4V5H10ZM14 8C14 7.44772 13.5523 7 13 7H3C2.44772 7 2 7.44772 2 8V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V8Z" fill="black"/>
                </svg>
                Tinyman Javascript SDK
              </button>
            </li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>

      <div class="asalist_bg"></div>
      <div class="asalist_cta">
        <div>
          <h2>asa-list</h2>
          <p>We are collecting all the icons of projects built on Algorand in one place where everyone can easily access and use.</p>
          <a href="https://asa-list.tinyman.org/" class="link-s" target="_blank" rel="noreferrer">
            <div data-hover-animation="Go to asa-list website app">
              Go to asa-list website app
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Resources
