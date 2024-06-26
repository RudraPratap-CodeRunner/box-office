import React from 'react'

const Cast = ({cast}) => {
  return (
    <div>
        {
            cast.map(({person,character,voice})=>(
                <div key={person.id} >
                    <div>
                        <img src={person.image?person.image.medium:'/not-fount-image.png'} alt="" />
                    </div>
                    <div>
                        {person.name} | { character.name} {voice && '| Voiceover'}
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Cast