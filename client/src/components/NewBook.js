import React, { useState } from 'react'

const NewBook = ({ onSubmitAddBook }) => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [genre, setGenre] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const newBook = {title: title, author: author, genre: genre, description: description, book_img: image}
        fetch("/books", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newBook)
        })
        .then(r => {
            if (r.ok) {
                r.json().then(book => onSubmitAddBook(book))
            } else {
                r.json().then()
            }
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => setTitle(e.target.value)}></input>
            <input type="text" onChange={e => setAuthor(e.target.value)}></input>
            <input type="text" onChange={e => setGenre(e.target.value)}></input>
            <input type="text" onChange={e => setDescription(e.target.value)}></input>
            <input type="text" onChange={e => setImage(e.target.value)}></input>
            <button>submit</button>
        </form>
    </div>
  )
}

export default NewBook