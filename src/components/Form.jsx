import React from 'react'

const Form = () => {
  return (
    <>
        <div className='form-container'>
            <form>
                <h2>Blog Form</h2>
                <label>Blog Name:</label>
                <input type="text" name="bname" id="bid" placeholder='Enter Blog Name'/>
                <label>Author Name:</label>
                <input type="text" placeholder='Author Name'/>
                <label>Description</label>
                <textarea placeholder='Description'></textarea>
                <button>Submit</button>
            </form>
        </div>
    </>
  )
}

export default Form