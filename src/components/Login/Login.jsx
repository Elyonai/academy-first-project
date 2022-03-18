import {Container, Form, FormInputs, ContainerInput, GroupInput, InputControl, Button} from './Styles';
import {useForm} from '../../hooks/useForm';
import toast from 'react-hot-toast';
import Input from './Input';

const Login = function() {

    // Initial form values 
    const initialForm = {
        email: '',
        password: ''
    }

    const expressions = {email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}

    const legends = {email: 'Invalid email address'}

    // Function in case all inputs are valid 
    
    const successFunction = async (e) => {
        
        try {
            const request = await fetch('http://localhost:5000/users');
            
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
    const {handleChange, form, handleSubmit, handleReset, inputs} = useForm(initialForm, successFunction, errorFunction);
    
    return(
        <Container>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <h2>Login</h2>
                <FormInputs>
                    <Input type="text" name="email" placeholder="Email address" handleChange={handleChange} value={form.email} autoComplete="off" expression={expressions.email} valid={inputs.email} legend={legends.email} />
                    <Input type="password" name="password" placeholder="Password" handleChange={handleChange} value={form.password}/>
                </FormInputs>
                <Button>Login</Button>
            </Form>
        </Container>
    );
}

export default Login;