import {Container, Form, FormInputs, ContainerInput, GroupInput, InputControl, Button} from './Styles';

const Login = function() {
    return(
        <Container>
            <Form>
                <h2>Login</h2>
                <FormInputs>
                    <ContainerInput>
                        <GroupInput>
                            <InputControl type="email" name="email" placeholder="Email address" autoComplete="off"/>
                        </GroupInput>
                        <GroupInput>
                            <InputControl type="password" name="password" placeholder="Password"/>
                        </GroupInput>
                    </ContainerInput>
                </FormInputs>
                <Button>Login</Button>
            </Form>
        </Container>
    );
}

export default Login;