import styled, {css} from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// Form
export const Form = styled.form`
    width: 100%;
    max-width: 400px;
    padding: 20px;
    border-radius: var(--radius);
    transition: var(--transition);
    text-align: left;

    h2 {
        font-size: 30px;
        padding: 10px 0;
    }

    ${props => props.search && css`
        display: flex;
        align-items: center;
        gap: 10px;
    `}

    ${props => props.max === 'true' && css`max-width: 100%;`}
`;

export const FormInputs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-bottom: 10px;

    ${props => props.grid && css`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 10px;
    `}
`;

// Input
export const ContainerInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const GroupInput = styled.div`
    width: 100%;
    height: height: 50px;;
    display: flex;
    align-items: center;
    position: relative;

    svg {
        position: absolute;
        left: 20px;
    }
`;

export const InputControl = styled.input`
    width: 100%;
    height: 100%;
    border: var(--border);
    border-radius: var(--radius);
    padding: 10px 20px;
    outline: none;
    border: 1px solid #ccc;

    &[type=file] {
        background: red;
        display: none;
        visibility: hidden;
    }
 
    ${props => props.hidde && css`display: none;`}
    ${props => props.icon && css`padding: 10px 20px 10px 40px;`}
    ${props => props.disabled && css`background: rgb(243, 243, 243);`}
`;

// Legend
export const Legend = styled.div`
    width: 100%;
    height: 0;
    display: flex;
    align-items: center;
    gap: 5px;
    background: var(--dark-gradient);
    color: #fff;
    border-radius: var(--radius);
    transition: var(--transition);
    padding: 0 20px;
    overflow: hidden;

    ${props => props.valid ==='false' && css`
        padding: 20px;
    `}
`;

// Button
export const Button = styled.button`
    padding: 8px 10px;
    border-radius: var(--radius);
    background: var(--primary-color);
    color: #fff;
    outline: none;
    border: 1px solid var(--primary-color);
    cursor: pointer;

    &:hover {
        background: var(--primary-color-hover);
    }
`;