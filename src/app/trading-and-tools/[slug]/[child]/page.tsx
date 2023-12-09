
const MetaData5 = ({ params }: { params: { child: string } }) => {
    console.log(params.child, "<--")
    return (
        <div>
            <h1>{params.child}</h1>
        </div>
    );
};

export default MetaData5;