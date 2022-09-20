
function ItemShow(props){
    return (
        <div className="itemShow">
            <div className="itemCard">
                <div className="itemImg">
                    <img src={`${props.image}`} alt={`${props.name}`} />
                </div>
                <div className="itemContent">
                    <span className="spanName">{props.name}</span>
                    <span className="spanPrice">{props.price}</span>
                    <span className="spanTags">{props.tags} </span>
                </div>
            </div>
        </div>
    )
}

export default ItemShow