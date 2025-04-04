import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);

  
  return (
    <>
      <h3>{category}</h3>
      {
          isLoading
          ? (<h4>Cargando... </h4>)
          : null
      }
      
      <div className="card-grid">
        {
          images.map((imageItem) => (
            <GifItem
              key={imageItem.id}
              { ... imageItem }

            />
          ))
        }
      </div>
    </>
  )
}

