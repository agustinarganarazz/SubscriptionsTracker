import { moneyFormat } from "./helpers"

const SingleItem = ({price , type , id, eliminarItem, editItem}) => {
    const urlImage= `/src/img/${type}.png`

    const handleBorrar=(e)=>{
      e.preventDefault()
      const answer= window.confirm(`Borrar suscripcion a ${type}?`)
      if(answer){
        eliminarItem(id)
      }
    }

    const handleEdit =(e)=>{
      e.preventDefault()
      editItem(id)
    }
  return (
    <div className="single-item">
        <img src={urlImage} alt="Services" />
        <h3>Precio : {moneyFormat(Number(price))} </h3>
        <a onClick={handleBorrar} href="">Borrar</a>
        <a onClick={handleEdit} href="">Editar</a>
    </div>
  )
}

export default SingleItem