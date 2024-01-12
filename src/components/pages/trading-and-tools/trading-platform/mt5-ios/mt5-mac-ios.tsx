import GooglePlayStore from "@/components/assets/online stores/google-playstore";
import clsx from "clsx";

const Mt5MacIOS = () => {
    return (
        <>
            <section className="section container grid  grid-cols-1 md:grid-cols-2 items-center max-w-[1350px]">
                {
                    [1, 2, 3, 4, 5, 6].map((item) => (
                        <>
                            <div className={clsx("flex flex-col justify-center items-center gap-[47px] border-l border-t p-[37px]", {
                                "border-r": item % 2 === 0, "border-b": item > 4, "border-r md:border-r-0": item % 2 !== 0,
                            })}>
                                <p className="font-semibold text-center text-[24px]">Download MetaTrader 5 for Android</p>
                                <GooglePlayStore className="max-w-[280px] md:max-w-[380px] h-auto" />
                            </div>
                        </>
                    ))
                }
            </section>
        </>
    )
}
export default Mt5MacIOS;