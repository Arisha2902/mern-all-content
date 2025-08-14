import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting},
  } = useForm()

  // function onSubmit(data){
  //   console.log("Form submitted",data)
  // }

  
  async function onSubmit(data){
    //api call ko simulate , 5 sec ka delay
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Form submitted",data)
  }

  return (
   <form  onSubmit={handleSubmit(onSubmit)}>
    
    <div>
      <label > First Name</label>
      <input 
      className={errors.firstName ? 'input-error' : ""}
      {...register("firstName", 
        { 
          required: true, maxLength: 6, 
        minLength:{value:3, message:'Min length 3'},
         })} />
        {errors.firstName && <p className='error-msg' > {errors.firstName.message}</p>}
    </div>
    <div>
      <label > Last Name</label>
      <input 
      className={errors.firstName ? 'input-error' : ""}
      {...register("lastname",
        { pattern:{
          value: /^[A-Za-z]+$/i,
          message: "Only letters are allowed"
        } } ,
        { required: true, maxLength: 20 })} />
        {errors.lastname && <p className='error-msg' > {errors.lastname.message}</p>}
    </div>
   <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting" : "Submit"} />
   </form>
  )
}

export default App
