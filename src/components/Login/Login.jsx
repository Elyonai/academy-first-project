import {Container, Form, FormInputs, ContainerInput, GroupInput, InputControl, Button} from './Styles';
import {useForm} from '../../hooks/useForm';
import toast from 'react-hot-toast';

const Login = function() {

    // Initial form values 
    const initialForm = {
        email: '',
        password: ''
    }

    // Function in case all inputs are valid 
    const successFunction = async (e) => {

       try {
           const request = await fetch('http://localhost:3000/users');

           const response = await request.json();

           const registers = response.filter(el => el.email === form.email);
           
           if(registers.length > 0) {

                if(registers[0].password === form.password) {

                    toast.success(`Welcome ${registers[0].name}`);
                    handleReset(e);

                }else {
                    toast.error('Incorrect credentials');
                }

           } else {
               toast.error('Incorrect credentials');
           }
 
       }catch(error) {
           toast.error(error);
       }
        
    }

    // Function in case some input is NOT valid 
    const errorFunction = (e) => {toast.error('Please fill out the form correctly ')}
    
    // Values destructures from userForm hook
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