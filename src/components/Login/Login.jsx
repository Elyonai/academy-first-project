import {Container, Form, FormInputs, ContainerInput, GroupInput, InputControl, Button, Legend} from './Styles';
import {useForm} from '../../hooks/useForm';

const Login = function() {

    const initialForm = {
        email: '',
        password: ''
    }

    const successFunction = (e) => {console.log(`Datos ingresados:`, form)}

    const errorFunction = (e) => {console.log('Please fill out the form correctly ')}
    
    const {handleChange, form, handleSubmit, handleReset} = useForm(initialForm, successFunction, errorFunction);

    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <FormInputs>
                    <ContainerInput>
                        <GroupInput>
                            <InputControl type="text" name="email" placeholder="Email address" onChange={handleChange} value={form.email} autoComplete="off"/>
                        </GroupInput>
                    </ContainerInput>
                    <ContainerInput>
                        <GroupInput>
                            <InputControl type="password" name="password" placeholder="Password" onChange={handleChange} value={form.password}/>
                        </GroupInput>
                    </ContainerInput>
                </FormInputs>
                <Button>Login</Button>
            </Form>
        </Container>
    );
}

export default Login;