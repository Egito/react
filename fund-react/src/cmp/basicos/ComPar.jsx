import React from 'react'

export default function ComPar(p) {
    const status = p.nota >= 7 ? "Culinaria perfeita" : "Precisa Melhorar"
    return (
        <div>
            <h2>{ p.titulo }</h2>
            <p>{ p.subtitulo }</p>
            Sua culinaria tem nota
            strong
        </div>
    )
}