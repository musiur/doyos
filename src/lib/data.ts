import { TTableData, TTableTabs } from "./type";
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
          id: 2,
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
          id: 2,
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
          id: 2,
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
          id: 2,
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
          id: 2,
          key: "thanks_giving_day_after",
          value: "Early Close 20:15",
        },
      ],
    },
  ],
};
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
