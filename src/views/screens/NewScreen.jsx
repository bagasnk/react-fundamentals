import React from 'react'

const KomponenAku = () => {
    const btnHandler = () => {
        alert('You Clicked Me')
    }
    let hello ='testing'

    return (
        <div>
        <input onClick={btnHandler} type='button' value='Click Me!' />
        <p>{hello}</p>
        </div>
    )
}

const NewScreen = () => {
    return (
        <div>
        <h1>Hallo! Aku Screen lama</h1>
        <KomponenAku />
        </div>
    )
}

export default NewScreen