import Types from "@/components/pages/accounts/account-types";
import PropFunding from "@/components/pages/accounts/prop-funding";
import RegularAccount from "@/components/pages/accounts/regular-account";

import FundingWithdrawal from "@/components/pages/trading-and-tools/trading-conditions/funding-withdrawal";

const AccountsSlug = ({ params }: { params: { slug: String } }) => {
    console.log(params);
    return (
        <div>

            {
                params.slug === "regular" ? (
                    <RegularAccount />
                ) : params.slug === "prop-funding" ? (
                    <PropFunding />
                ) : params.slug === "funding-widthdrawal" ? (
                    <FundingWithdrawal />
                ) : params.slug === "account-types" ? (
                    <Types />
                ) : null
            }
        </div>
    );
};

export default AccountsSlug;