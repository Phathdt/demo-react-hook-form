import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { ErrorMessage } from '@hookform/error-message'
import { DevTool } from '@hookform/devtools'

const mySchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6).max(10),
})

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors: err },
    control,
  } = useForm({
    resolver: yupResolver(mySchema),
  })

  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 2))
  }

  return (
    <div className="container">
      <DevTool control={control} placement="top-right" />

      <div className="d-flex justify-content-center mt-5">
        <div className="col-sm-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-2">
              <label>Email</label>
              <input
                name="email"
                type="text"
                {...register('email')}
                className={`form-control ${err.email ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">
                <ErrorMessage errors={err} name="email" />
              </div>
            </div>

            <div className="form-group mb-2">
              <label>Password</label>
              <input
                name="password"
                type="password"
                {...register('password')}
                className={`form-control ${err.password ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">
                <ErrorMessage errors={err} name="password" />
              </div>
            </div>

            <div className="form-group d-flex justify-content-center mt-3">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
