import ItemTags from "./ItemTags"

function ItemShow({name, image, price, tags}){
    return (
        <div className="item">
            <div className="itemCard">
                <div className="itemImg">
                    <img src={`${image}`} alt={`${name}`} />
                </div>
                <div className="itemContent">
                    <span className="spanName">{name}</span>
                    <span className="spanPrice">{price}</span>
                    <ItemTags tags={tags} />
                </div>
            </div>
        </div>
    )
}

export default ItemShow