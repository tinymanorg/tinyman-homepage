import * as React from "react"

export default function Header(props) {
  return (
  <div class="container">
      <div class="section-links">
        <section>
          <div class="link_heading">
            <h3>Resources</h3>
            <p>Learn about the core concepts and the main points of Tinyman and DeFi products of Algorand ecosystem. Swapping, pooling, fees, Tinyman brand and more...</p>
           </div>
          <div>
              <div class="helper-link">
                <a href="https://docs.tinyman.org/" class="outlink" target="_blank" rel="noreferrer"><h5>Documentation</h5></a>
              </div>
              <div class="helper-link">
                <a href="https://docs.tinyman.org/faq" class="outlink" target="_blank" rel="noreferrer"><h5>Frequently Asked Questions</h5></a>
              </div>
              <div class="helper-link">
                <a href="https://tinymanorg.medium.com/" class="outlink" target="_blank" rel="noreferrer"><h5>Blog</h5></a>
              </div>
              <div class="helper-link">
                <a href="https://www.youtube.com/channel/UCBcyl1Hted1U0mUXO2ayP_Q" class="outlink" target="_blank" rel="noreferrer"><h5>Tutorials</h5></a>
              </div>
              <div class="helper-link">
                <a href="https://github.com/tinymanorg/brand" class="outlink" target="_blank" rel="noreferrer"><h5>Brand Assets</h5></a>
              </div>
              <div class="helper-link">
                <a href="https://asa-list.tinyman.org/" class="outlink" target="_blank" rel="noreferrer"><h5>Add your project's icon</h5></a>
              </div>
            </div>
        </section>
        <section>
          <div class="link_heading">
            <h3>Community</h3>
            <p>We have a great community of experienced users of Tinyman and Algorand ecosystem. Join us and ask your questions to the community.</p>
          </div>
          <div>
              <div class="helper-link">
                <a href="https://twitter.com/tinymanorg" class="outlink" target="_blank" rel="noreferrer"><h5>Twitter</h5></a>
              </div>
              <div class="helper-link">
                <a href="https://discord.gg/wvHnAdmEv6" class="outlink" target="_blank" rel="noreferrer"><h5>Discord</h5></a>
              </div>
              <div class="helper-link">
                <a href="https://t.me/tinymanofficial" class="outlink" target="_blank" rel="noreferrer"><h5>Telegram</h5></a>
              </div>
              <div class="helper-link">
                <a href="https://t.me/tinymanannouncement" class="outlink" target="_blank" rel="noreferrer"><h5>Telegram Announcements</h5></a>
              </div>
              <div class="helper-link">
                <a href="https://www.reddit.com/r/Tinyman/" class="outlink" target="_blank" rel="noreferrer"><h5>Reddit</h5></a>
              </div>
              <div class="helper-link">
                <a href="https://github.com/tinymanorg" class="outlink" target="_blank" rel="noreferrer"><h5>GitHub</h5></a>
              </div>
          </div>
        </section>
      </div>
      <footer>
        <p class="disclaimer">Your use of the Tinyman protocol involves various risks, including, but not limited to, losses while digital assets are being supplied to the Tinyman protocol and losses due to the fluctuation of prices of tokens in a trading pair or liquidity pool. Before using the Tinyman protocol, you should review the relevant documentation to understand how the Tinyman protocol works. You are responsible for doing your diligence on the risks involved.</p>
        <p class="disclaimer">AS DESCRIBED IN THE TINYMAN PROTOCOL LICENSES, THE TINYMAN PROTOCOL IS PROVIDED "AS IS", AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND. Although TM Distributed Development Ltd. ( "Tinyman" ) developed much of the initial code for the Tinyman protocol, it does not provide, own, or control the Tinyman protocol, which is run by smart contracts deployed on the Algorand blockchain. Accordingly, no developer or entity involved in creating the Tinyman protocol will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the Tinyman protocol, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.</p>
        <p class="copyright">© 2022 Tinyman</p>
      </footer>
    </div>
  )
}