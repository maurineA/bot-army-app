import React from 'react'


function SubmitForm({input, setInput}) {

        function handleSubmit(e){
            e.preventDefault()
            e.target.reset()

            fetch(`http://localhost:8001/transactions`, {
                method:"POST",
                headers:{
                  "content-Type" : "application/json",
                  "Accept" : "application/json"
                },
                body:JSON.stringify(input)
              
              })

        }

        function handleChange(e){
            const bank = e.target.name;
            const details = e.target.value;
            // the input is stored in the addInptut()
            setInput(values => ({...values, [bank]: details}))
           
          }


  return (
    <div>
        <form onSubmit={handleSubmit}>

            <input
               required
                type='text'
                name='category'
                value={input.category}
                onChange={handleChange}
            />
             <input
                required
                type='text'
                name='description'
                value={input.description}
                onChange={handleChange}
            />
            <input
                required
                 type='date'
                 name='date'
                 value={input.date}
                 onChange={handleChange}
            />
            <input 
                required
                type='text'
                name='amount'
                value={input.amount}
                onChange={handleChange}
            />

            <button type='submit'>Submit</button>
        </form>
      
    </div>
  )
}

export default SubmitForm

