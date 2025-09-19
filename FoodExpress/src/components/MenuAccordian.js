import MenuItem from "./MenuItem";

const MenuAccordian = ({data}) => {
    return (
        <div className="bg-gray-100 shadow-lg">
            <div className=" m-6 p-4 flex justify-between ">
                <h1 className="font-bold">{data?.title} ({data?.itemCards.length})</h1>
                <p>🔽</p>
            </div>

            {data?.itemCards.map((item) => (
                <MenuItem item={item} key = {item?.info?.id} />
            ))}
        </div>
    )
}

export default MenuAccordian;