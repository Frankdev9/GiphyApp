import { useState } from "react"
import { AddCategory , GifGrid } from "./components"


const GiphyApp = () => {

const [categories, setCategories] = useState(["One piece"])    

    const OnAddCategory = (newCategory) => {
        categories.includes(newCategory) ? null : setCategories([newCategory, ...categories])
    }


    return (
        <>
            <h1>Gif Expert App </h1>

            <AddCategory
                OnNewCategory = {OnAddCategory}
                />
            
            {
                categories.map( ( categorieItem )  =>  
                    <GifGrid
                        key={categorieItem} 
                        category={categorieItem} />
                )
            }
            
        </>
    )
}
export default GiphyApp
