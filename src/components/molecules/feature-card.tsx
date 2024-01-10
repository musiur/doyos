import { ReactNode } from "react";
import AccountIcon from "../icons/account-icon";
import clsx from "clsx";

const FeatureCard = ({
  details = {
    id: 1,
    title: "Title",
    text: "text",
    icon: <AccountIcon className="" />,
  },
}: {
  details: {
    id: number;
    title?: string;
    text?: string;
    icon: ReactNode;
  };
}) => {
  return (
    <div
      className={clsx(
        "card flex flex-col text-center items-center gap-[13px] bg-white rounded-[10px] px-[48px] h-auto py-[24px]",
        {
          "w-full md:max-w-[472px] border-0": details.text,
          border: !details.text,
        }
      )}
    >
      {details.icon}
      {details.title ? (
        <p
          className={clsx({
            "text-[16px] md:text-[24px] font-bold": details.text,
            "text-[14px] md:text-[16px] font-medium": !details.text,
          })}
        >
          {details.title}
        </p>
      ) : null}
      {details.text ? <p>{details.text}</p> : null}
    </div>
  );
};

export default FeatureCard;
