import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Logo from "../images/logo.svg";
import LogoIcon from "../images/logo_icon.svg";
import Thumbnail from "../images/tinyman.png";
import { Link } from "gatsby";
import Marquee from "react-fast-marquee";

export default function Header() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSticky(window.pageYOffset > 400)
      );
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Tinyman | Decentralized trading protocol on Algorand</title>
        <meta charset="utf-8"></meta>
        <meta
          name="description"
          content="Tinyman AMM is a DEX (decentralized exchange) on Algorand blockchain. Tinyman allows DeFi users to exchange, swap, provide liquidity, farm their cryptos or tokens."
        />
        <meta property="og:image" content={Thumbnail} />
      </Helmet>

      <div class="sliding-text">
        <Marquee gradient={false} speed={20}>
          <ul>
            <li>Tinyman has big dreams</li>
            <li>DeFi you were promised</li>
            <li>Decentralized, secure trading. Guaranteed liquidity</li>
            <li>Tinyman has big dreams</li>
            <li>DeFi you were promised</li>
            <li>Decentralized, secure trading. Guaranteed liquidity</li>
            <li>Tinyman has big dreams</li>
            <li>DeFi you were promised</li>
            <li>Decentralized, secure trading. Guaranteed liquidity</li>
            <li>Tinyman has big dreams</li>
            <li>DeFi you were promised</li>
            <li>Decentralized, secure trading. Guaranteed liquidity</li>
            <li>Tinyman has big dreams</li>
            <li>DeFi you were promised</li>
            <li>Decentralized, secure trading. Guaranteed liquidity</li>
          </ul>
        </Marquee>
      </div>
      <div class="static-header">
        <header>
          <Link className="logo" to="/" id="logo">
            <img src={Logo} alt="Tinyman" />
          </Link>
          <ul class="menu">
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li class="dropdown_menu">
              <button class="dropdown_main">Community</button>
              <ul class="dropdown">
                <li>
                  <a
                    href="https://twitter.com/tinymanorg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/wvHnAdmEv6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/tinymanofficial"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/tinymanannouncement"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Announcements
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.reddit.com/r/Tinyman/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Reddit
                  </a>
                </li>
              </ul>
            </li>
            <li class="gotoapp">
              <a
                href="https://app.tinyman.org/"
                class="mainnet_btn"
                target="_blank"
                rel="noreferrer"
              >
                Go to Tinyman v2
              </a>
            </li>
          </ul>
        </header>
      </div>
      <div className={`fixed-header ${sticky ? "sticky" : ""}`}>
        <header>
          <Link to="/">
            <img src={LogoIcon} alt="Tinyman" />
          </Link>
          <ul class="menu">
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li class="dropdown_menu">
              <button class="dropdown_main">Community</button>
              <ul class="dropdown">
                <li>
                  <a
                    href="https://twitter.com/tinymanorg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/wvHnAdmEv6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/tinymanofficial"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/tinymanannouncement"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Announcements
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.reddit.com/r/Tinyman/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Reddit
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="https://app.tinyman.org/"
                class="mainnet_btn"
                target="_blank"
                rel="noreferrer"
              >
                <span>Go to Tinyman v2</span>
              </a>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}
