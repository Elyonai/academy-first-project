import {ContainerInput, InputControl, GroupInput, Legend} from './Styles';

const Input = function ({type, placeholder, value, name, expression, handleChange, valid, icon, hidden, reference, disabled, children, legend }) {

    const functionHandleChange = (e) => handleChange(e, expression);

    return(
        <ContainerInput>
            <GroupInput>
                {icon && children}
                <InputControl
                    type={type}
                    name={name}
                    placeholder={placeholder || 'Insert a value'}
                    expression={expression}
                    value={value}
                    onChange={functionHandleChange}
                    icon={icon}
                    autocomplete="off"
                    hidden={hidden && hidden}
                    ref={reference && reference}
                    disabled={disabled && disabled}
                />
            </GroupInput>
            <Legend valid={valid !== null && valid === false && valid.toString()}>
                {legend 
                    ? legend
                    : 'Invalid value'
                }
            </Legend>
        </ContainerInput>
    );
}

export default Input;