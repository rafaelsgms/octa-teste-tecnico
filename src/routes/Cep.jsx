import { useForm } from 'react-hook-form';

const Cep = () => {
  const { register, handleSubmit, setValue, setFocus } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  }

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
     
      setValue('address', data.logradouro);
      setValue('neighborhood', data.bairro);
      setValue('city', data.localidade);
      setValue('uf', data.uf);
      setFocus('addressNumber');
    });
  }

  return (
    <main className='container'>
      <div className='jumbotron'>
        <h3>Verifique agora o CEP e obtenha outras informações da residência!</h3>
        <form className='d-flex flex-column align-items-center'
          onSubmit={handleSubmit(onSubmit)}>
          <label>
            CEP:
            <input className='form-control' type="text" {...register("cep")} onBlur={checkCEP} />
          </label>
          <label>
            Rua:
            <input className='form-control' type="text" {...register("address")} />
          </label>
          <label>
            Número:
            <input className='form-control' type="text" {...register("addressNumber")} />
          </label>
          <label>
            Bairro:
            <input className='form-control' type="text" {...register("neighborhood")} />
          </label>
          <label>
            Cidade:
            <input className='form-control' type="text" {...register("city")} />
          </label>
          <label>
            Estado:
            <input className='form-control' type="text" {...register("uf")} />
          </label>
          <button className='btn btn-primary bg-secondary'
            type="submit"
          >
            Enviar</button>
        </form>
      </div>
    </main>
  )
}

export default Cep