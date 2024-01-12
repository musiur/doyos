import AppleStore from "@/components/assets/online stores/apple-store";
import GooglePlayStore from "@/components/assets/online stores/google-playstore";
import MicrosoftStore from "@/components/assets/online stores/microsoft-store";
import WebTerminal from "@/components/assets/online stores/web-terminal";
import OnlineStoresCard from "@/components/molecules/online-stores-card";
import clsx from "clsx";

const Mt5MacIOS = () => {
    return (


        <section className="section container grid  grid-cols-1 md:grid-cols-2 items-center max-w-[1350px]">
            {
                storesData.map((item) => (
                    <OnlineStoresCard key={item.id} data={item}
                    />
                ))}

        </section>

    )
}
export default Mt5MacIOS;

const storesData = [
    {
        id: 1,
        icon: <GooglePlayStore className="" />,
        title: "Download MetaTrader 5 for Android",
        subtitle: "",

    },
    {
        id: 2,
        icon: <MicrosoftStore className="" />,
        title: "Download MetaTrader 5 for Windows",
        subtitle: "",

    },
    {
        id: 3,
        icon: <AppleStore className="" />,
        title: "Download MetaTrader 5 for iOS",
        subtitle: " ",

    },
    {
        id: 4,
        icon: <AppleStore className="" />,
        title: "Download MetaTrader 5 for MacOs",
        subtitle: " ",

    },
    {
        id: 5,
        icon: <WebTerminal className="" />,
        title: "DOYOS MT5 Web Terminal",
        subtitle: " Browser based. No Download Needed. (Latest Version)",
    },
    {
        id: 6,
        icon: <WebTerminal className="" />,
        title: "DOYOS MT5 Web Terminal",
        subtitle: "Browser based. No Download Needed. (Old Version) ",

    }

];
