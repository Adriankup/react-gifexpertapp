import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    //const categories = ['One Puch', 'Samurai X', 'Dragon Ball']
    
    const [categories, setCategories] = useState(['One Puch Man'])

    //const handleAdd = () => {
        //setCategories([...categories, 'Inuyasha'])
    //    setCategories(cats => [...cats, 'Inuyasha'])
    //}

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            
            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                        key={category}
                        category={category}
                        />    
                    )
                }
            </ol>
        </div>
    )
}
