import { TTableData, TTableTabs } from "./type";
export const MarketHolidayTableTabs: TTableTabs[] = [
  {
    value: "nov23",
    text: "November 23",
  },
  {
    value: "oct23",
    text: "October 23",
  },
  {
    value: "sep23",
    text: "Septerber 23",
  },
  {
    value: "aug23",
    text: "August 23",
  },
  {
    value: "jul23",
    text: "July 23",
  },
];
export const MarketHolidayTableData: TTableData = {
  thead: [
    {
      id: 1,
      key: "product",
      th: "Product",
      subTh: "All instruments",
    },
    {
      id: 2,
      key: "thanks_giving_day",
      th: "Thanksgiving Day 23/11/2023",
      subTh: "Normal Hours",
    },
    {
      id: 3,
      key: "thanks_giving_day_after",
      th: "The Day after Thanksgiving Day 24/11/2023",
      subTh: "Normal Hours",
    },
  ],
  tbody: [
    {
      id: 1,
      rowAsSection: true,
      cells: [
        {
          id: 1,
          key: "product",
          value: "Metals",
        },
      ],
    },
    {
      id: 2,
      rowAsSection: false,
      cells: [
        {
          id: 1,
          key: "product",
          value: "XAUUSD",
        },
        {
          id: 2,
          key: "thanks_giving_day",
          value: "Early Close 21:30",
        },
        {
          id: 3,
          key: "thanks_giving_day_after",
          value: "Early Close 20:45",
        },
      ],
    },
    {
      id: 3,
      rowAsSection: false,
      cells: [
        {
          id: 1,
          key: "product",
          value: "XAUGSD",
        },
        {
          id: 2,
          key: "thanks_giving_day",
          value: "Early Close 20:15",
        },
        {
          id: 3,
          key: "thanks_giving_day_after",
          value: "Early Close 20:30",
        },
      ],
    },
    {
      id: 4,
      rowAsSection: false,
      cells: [
        {
          id: 1,
          key: "product",
          value: "XPDUSD",
        },
        {
          id: 2,
          key: "thanks_giving_day",
          value: "Early Close 20:15",
        },
        {
          id: 3,
          key: "thanks_giving_day_after",
          value: "Early Close 20:30",
        },
      ],
    },
    {
      id: 4,
      rowAsSection: false,
      cells: [
        {
          id: 1,
          key: "product",
          value: "XPTUSD",
        },
        {
          id: 2,
          key: "thanks_giving_day",
          value: "Early Close 20:15",
        },
        {
          id: 3,
          key: "thanks_giving_day_after",
          value: "Early Close 20:30",
        },
      ],
    },
    {
      id: 5,
      rowAsSection: true,
      cells: [
        {
          id: 1,
          key: "product",
          value: "Cash and Future indices",
        },
      ],
    },
    {
      id: 6,
      rowAsSection: false,
      cells: [
        {
          id: 1,
          key: "product",
          value: "US30 cash and Future",
        },
        {
          id: 2,
          key: "thanks_giving_day",
          value: "Early Close 20:00",
        },
        {
          id: 3,
          key: "thanks_giving_day_after",
          value: "Early Close 20:15",
        },
      ],
    },
  ],
};

export const SpreadTableTabs: TTableTabs[] = [
  {
    value: "major_currencies",
    text: "Major Currencies",
  },
  {
    value: "crosses",
    text: "Crosses",
  },
  {
    value: "exotics",
    text: "Exotics",
  },
  {
    value: "cash_indices",
    text: "Cash Indices",
  },
  {
    value: "energies_spreads",
    text: "Energies Spreads",
  },
];
export const SpreadTableData: TTableData = {
  thead: [
    {
      id: 1,
      key: "symbol",
      th: "Symbol",
    },
    {
      id: 2,
      key: "ultimate",
      th: "Ultimate Account",
      subTh: "as low as",
    },
    {
      id: 3,
      key: "pro",
      th: "Pro Account",
      subTh: "as low as",
    },
    {
      id: 4,
      key: "mini",
      th: "Min Account",
      subTh: "as low as",
    },
  ],
  tbody: [
    {
      id: 1,
      rowAsSection: false,
      cells: [
        {
          id: 1,
          key: "symbol",
          value: "EURUSD",
        },
        {
          id: 2,
          key: "ultimate",
          value: "0.0",
        },
        {
          id: 3,
          key: "pro",
          value: "0.0",
        },
        {
          id: 3,
          key: "mini",
          value: "1.5",
        },
      ],
    },
    {
      id: 2,
      rowAsSection: false,
      cells: [
        {
          id: 1,
          key: "symbol",
          value: "AUDUSD",
        },
        {
          id: 2,
          key: "ultimate",
          value: "0.0",
        },
        {
          id: 3,
          key: "pro",
          value: "0.0",
        },
        {
          id: 3,
          key: "mini",
          value: "1.5",
        },
      ],
    },
    {
      id: 3,
      rowAsSection: false,
      cells: [
        {
          id: 1,
          key: "symbol",
          value: "GBPUSD",
        },
        {
          id: 2,
          key: "ultimate",
          value: "0.0",
        },
        {
          id: 3,
          key: "pro",
          value: "0.0",
        },
        {
          id: 3,
          key: "mini",
          value: "1.5",
        },
      ],
    },
    {
      id: 4,
      rowAsSection: false,
      cells: [
        {
          id: 1,
          key: "symbol",
          value: "NZDUSD",
        },
        {
          id: 2,
          key: "ultimate",
          value: "0.0",
        },
        {
          id: 3,
          key: "pro",
          value: "0.0",
        },
        {
          id: 3,
          key: "mini",
          value: "1.5",
        },
      ],
    },
    {
      id: 5,
      rowAsSection: false,
      cells: [
        {
          id: 1,
          key: "symbol",
          value: "USDCHF",
        },
        {
          id: 2,
          key: "ultimate",
          value: "0.0",
        },
        {
          id: 3,
          key: "pro",
          value: "0.0",
        },
        {
          id: 3,
          key: "mini",
          value: "1.3",
        },
      ],
    },
    {
      id: 6,
      rowAsSection: false,
      cells: [
        {
          id: 1,
          key: "symbol",
          value: "USDCAD",
        },
        {
          id: 2,
          key: "ultimate",
          value: "0.0",
        },
        {
          id: 3,
          key: "pro",
          value: "0.0",
        },
        {
          id: 3,
          key: "mini",
          value: "2.1",
        },
      ],
    },
    {
      id: 7,
      rowAsSection: false,
      cells: [
        {
          id: 1,
          key: "symbol",
          value: "USDJPY",
        },
        {
          id: 2,
          key: "ultimate",
          value: "0.0",
        },
        {
          id: 3,
          key: "pro",
          value: "0.0",
        },
        {
          id: 3,
          key: "mini",
          value: "2.1",
        },
      ],
    },
  ],
};

export const PricingFeaturesData = [
  {
    id: 1,
    accountType: "Classic",
    accountSubType: "cTrader",
    features: [
      "MT5",
      "Spread 3.0",
      "Upto 1:500 Leverage",
      "Stop Out: 50%",
      "Margin Call: 150%",
      "Execution Type: DMA (NDD)",
      "EA Supported",
      "VPS: Available*",
      "Webinars: Weekly",
      "Education: Basic",
      "24/7 Days Support",
      "Scalping - No",
      "Minimum Deposit $100",
    ],
  },
  {
    id: 2,
    accountType: "Standard",
    features: [
      "MT5",
      "Spread 2.5",
      "Upto 1:200 Leverage",
      "Stop Out: 50%",
      "Margin Call: 150%",
      "Execution Type: DMA (NDD)",
      "EA Supported",
      "VPS: Available*",
      "Webinars: Weekly",
      "Education: Expert",
      "24/7 Days Support",
      "Scalping - No",
      "Minimum Deposit $10K",
    ],
  },
  {
    id: 3,
    accountType: "Standard",
    features: [
      "MT5",
      "Spread 2.0",
      "Upto 1:100 Leverage",
      "Stop Out: 50%",
      "Margin Call: 150%",
      "Execution Type: DMA (NDD)",
      "EA Supported",
      "VPS: Available*",
      "Webinars: Weekly",
      "Education: Expert",
      "24/7 Days Support",
      "Scalping - No",
      "Minimum Deposit $100K",
    ],
  },
];
