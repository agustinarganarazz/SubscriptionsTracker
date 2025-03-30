import { useState } from "react"


const FormAddMoney = ({ setCount , setIsValid}) => {
    const [input, setinput] = useState('')
    const [error, seterror] = useState(false)

    const handleForm=(e)=>{
        e.preventDefault()
        if(input==''|| Number(input) < 0){
            seterror(true)
            return
        }
        seterror(false)
        setCount(Number(input))
        setIsValid(true)
        console.log(input)
    }
  return (
    <div className="form-add-money">
        {input}
        <form onSubmit={handleForm}>
            <p>Agregar Presupuesto</p>
            <input type="number" placeholder="300$" onChange={e=> setinput(e.target.value)}/>
            <input type="submit" value='agregar' />
        </form>
       {
        error ? <p className="error">Presupuesto invalido</p> : null
       }
    </div>
  )
}

export default FormAddMoney