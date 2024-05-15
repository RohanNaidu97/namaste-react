import { RES_LOGO } from "../utlis/constants" 

const ItemList = ({ items }) => {
    // console.log(items);
    return(
        <div className="Category">
            { items.map( (item) => (
                    <div key = {item.card.info.id} 
                        className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                        <div className="w-9/12"> 
                            <div> 
                                <span className="py-2"> {item.card.info.name} </span>
                                <span> 💰 { item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price / 100 }  </span>
                            </div>

                            <p className="text-xs"> {item.card.info.description} </p>
                        </div>

                        <div className="w-3/12 p-2"> 
                            <div className="absolute">
                                <button className="p-2 bg-black text-white shadow-lg mx-16 rounded" > Add + </button>
                            </div>
                            <img src= { RES_LOGO + item.card.info.imageId }/>
                        </div> 
                    </div>
                ) 
            )}
        </div>
    )
}

export default ItemList;