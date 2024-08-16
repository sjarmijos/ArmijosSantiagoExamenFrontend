import React, { useState } from 'react'
import Card from './Card'

const Form = () => {
    const [customer, setCustomer] = useState({
        name: '',
        pet: ''
    })

    const [flag, setFlag] = useState(true)
    const [selected, setSelected] = useState(null)

    const handleName = (e) => {
        setCustomer({
            ...customer,
            name: e.target.value
        })
    }
    const handlePet = (e) => {
        setCustomer({
            ...customer,
            pet: e.target.value
        })
    }

    const regexName = /^[^\s].{2,}$/
    const regexPet = /^.{6,}$/

    const handleSubmit = (e) => {
        e.preventDefault()
        if (regexName.test(customer.name) && regexPet.test(customer.pet)) {
            setSelected(customer)
            setFlag(false)
        }else{
            setFlag(true)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Ingresa tu nombre</label>
                <input value={customer.name} onChange={handleName} />
                <label>Ingresa el nombre de tu mascota</label>
                <input value={customer.pet} onChange={handlePet}/>
                <button>Enviar</button>
            </form>
            
            {flag ? <p>Por favor chequea que la información sea correcta</p> : <Card name={customer.name} pet={customer.pet} />}
        </div>
    )
}

export default Form
