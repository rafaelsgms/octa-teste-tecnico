import { useForm } from 'react-hook-form';

const Contact = () => {
  const { handleSubmit } = useForm();

  const onSubmit = (e) => {
    console.log(null);
  }

  return (
    <main className='container'>
      <div className='jumbotron'>
        <h3>Entre em contato conosco:</h3>
        <form className='mt-4 d-flex flex-column align-items-center'
          onSubmit={handleSubmit(onSubmit)}>
          <input className='form-control' type="text" placeholder="Digite seu nome" />
          <input className='mt-4 form-control' type="text" placeholder="Digite seu e-mail" />
          <input className='mt-4 p-5 form-control' type="text" placeholder="Digite sua mensagem" />
          <input className='mt-4 form-control' type="file" />

          <button
            className='mt-4 btn btn-primary bg-secondary'
            type="submit"
          >
            Enviar</button>
        </form>
      </div>
    </main>
  )
}

export default Contact