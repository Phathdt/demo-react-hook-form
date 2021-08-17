import { useForm } from 'react-hook-form'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'

function App() {
  const { register, handleSubmit } = useForm()

  function onSubmit(data) {
    console.log(data)
  }

  return (
    <div className="container">
      <Row className="d-flex justify-content-center mt-5">
        <Col sm={4}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup className="mb-2">
              <Label className="mb-2">Email</Label>
              <Input {...register('email')} placeholder="abc@mail.com" />
            </FormGroup>

            <FormGroup className="mb-2">
              <Label className="mb-2">Password</Label>
              <Input
                {...register('password')}
                type="password"
                placeholder="password"
              />
            </FormGroup>

            <Button color="success" className="mt-2">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default App
