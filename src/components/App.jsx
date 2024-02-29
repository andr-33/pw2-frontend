import FormLogin from './Forms/FormLogin'
import FormSignUp from './Forms/FormSignUp'

function App() {
  return (
    <div className='bg-purple-200 w-full h-screen flex justify-center items-center'>

      <section className='flex flex-row rounded'>
        <div>
          
        </div>
        <div className='w-1/2 bg-slate-50'>
          <FormSignUp />
        </div>
      </section>

    </div>
  )
}

export default App
