import Image from "next/image";
import Link from "next/link";
import BrandLogo from "../assets/home/brandlogo";

const Footer = () => {
  return (
    <footer className="section bg-primary">
      <div className="container text-center text-white">
        <section className="flex flex-wrap items-start justify-between gap-10 md:gap-5">
          {HeadingLinks.map((item) => {
            return (
              <div
                key={item.id}
                className="text-white flex flex-col items-start justify-start gap-3"
              >
                <h4 className="font-bold text-white text-lg md:text-xl">
                  {item.title}
                </h4>
                {item.links.map((link) => {
                  return (
                    <Link
                      key={link.id}
                      href={link.link}
                      className="hover:text-secondary"
                    >
                      {link.text}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </section>
        <section className=" section flex flex-col gap-10">
          <p className="text-white text-left">
            High Risk Investment Notice: Trading Forex/CFDs on margin carries a
            high level of risk and may not be suitable for all investors as you
            could sustain losses in excess of deposits. The products are
            intended for retail, professional and eligible counterparty clients.
            For clients who maintain account(s) with DOYOS Global Ltd, retail
            clients could sustain a total loss of deposited funds but are not
            subject to subsequent payment obligations beyond the deposited funds
            and professional clients could sustain losses in excess of deposits.
            Prior to trading any products offered by DOYOS Global Ltd, any
            affiliates of aforementioned firms, or other firms within DOYOS
            Global Ltd of companies [collectively the “DOYOS”], carefully
            consider your financial situation and experience level. DOYOS Global
            Ltd may provide general commentary which is not intended as
            investment advice and must not be construed as such. Seek advice
            from a separate financial advisor. DOYOS Global Ltd assumes no
            liability for errors, inaccuracies or omissions; does not warrant
            the accuracy, completeness of information, text, graphics, links or
            other items contained within these materials. Read and understand
            the Terms and Conditions on DOYOS Global Ltd websites prior to
            taking further action.
          </p>
          <p className="text-white text-left">
            DOYOS Global Ltd does not offer its services to residents of certain
            jurisdictions such as USA, Iraq, Iran and North Korea or any person
            in any country or jurisdiction where such distribution or use would
            be contrary to local law or regulation.
          </p>
        </section>
        <section className="flex justify-center md:justify-end">
          <div className="flex items-center justify-end gap-3 px-8 py-2 bg-white rounded-[10px]">
            <span>Partner</span>
            <Image
              src="/images/payment-gatways.png"
              alt=""
              width={1000}
              height={1000}
              className="max-w-[160px] md:max-w-[450px]"
            />
          </div>
        </section>
        <section className="flex flex-wrap-reverse items-center justify-between gap-10 mt-10">
          <div className="inline-flex gap-2 items-center">
            <div className="bg-white p-1 rounded-md">
              <BrandLogo />
            </div>
            <span className="text-white">
              © {new Date().getFullYear()}. All rights reserved
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-10">
            {footerlinks.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={link.link}
                  className="text-white hover:text-secondary"
                >
                  {link.text}
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

const footerlinks = [
  {
    id: 1,
    text: "Risk warning",
    link: "/",
  },
  {
    id: 2,
    text: "Disclaimer",
    link: "/",
  },
  {
    id: 3,
    text: "Privacy policy",
    link: "/",
  },
  {
    id: 4,
    text: "Sitemap",
    link: "/",
  },
  {
    id: 5,
    text: "AML policy",
    link: "/",
  },
  {
    id: 6,
    text: "Complaints handling",
    link: "/",
  },
];

const HeadingLinks = [
  {
    id: 0,
    title: "Trading & tools",
    links: [
      {
        id: 0,
        text: "MetaTrader 5",
        link: "/",
      },
      {
        id: 1,
        text: "MT5 android",
        link: "/",
      },
      {
        id: 2,
        text: "MT5 Mac/iOS",
        link: "/",
      },
    ],
  },
  {
    id: 1,
    title: "Market",
    links: [
      {
        id: 0,
        text: "Forex",
        link: "/",
      },
      {
        id: 1,
        text: "Cryptos",
        link: "/",
      },
      {
        id: 2,
        text: "Stock/Share",
        link: "/",
      },
      {
        id: 3,
        text: "Indices/CFD",
        link: "/",
      },
      {
        id: 4,
        text: "Commodities",
        link: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Trading Conditions",
    links: [
      {
        id: 0,
        text: "Account type",
        link: "/",
      },
      {
        id: 1,
        text: "Funding & Withdrawal",
        link: "/",
      },
      {
        id: 2,
        text: "Spread",
        link: "/",
      },
      {
        id: 3,
        text: "Swap free account",
        link: "/",
      },
      {
        id: 4,
        text: "Security of fund",
        link: "/",
      },
      {
        id: 5,
        text: "Trading conditions",
        link: "/",
      },
    ],
  },
  {
    id: 3,
    title: "Account types",
    links: [
      {
        id: 0,
        text: "Regular account",
        link: "/",
      },
      {
        id: 1,
        text: "PROP funding",
        link: "/",
      },
      {
        id: 2,
        text: "Funding & Withdrawal",
        link: "/",
      },
    ],
  },
  {
    id: 4,
    title: "About us",
    links: [
      {
        id: 0,
        text: "Our goal",
        link: "/",
      },
      {
        id: 1,
        text: "Company news",
        link: "/",
      },
      {
        id: 2,
        text: "License & regulations",
        link: "/",
      },
      {
        id: 3,
        text: "Legal documents",
        link: "/",
      },
      {
        id: 4,
        text: "Global offices",
        link: "/",
      },
      {
        id: 5,
        text: "Partners",
        link: "/",
      },
    ],
  },
  {
    id: 5,
    title: "Support",
    links: [
      {
        id: 0,
        text: "Callback request",
        link: "/",
      },
      {
        id: 1,
        text: "Contact us",
        link: "/",
      },
    ],
  },
];
