import {useState} from 'react';

export const useForm = function (initialForm, successFunction, errorFunction) {

    // states
    const [form, setForm] = useState(initialForm);
    const [inputs, setInputs] = useState(initialForm);

    // handleChange
    const handleChange = (e, expression) => {
        // In case exist an regular expression to evaluar
        if(expression) {
            if(expression.test(e.target.value)) {
                setForm({
                        ...form, 
                        [e.target.name]: e.target.value
                    });

                setInputs({...inputs,[e.target.name]: true});

            } else {
                setInputs({...inputs, 
                    [e.target.name]: false
                });

                setForm({
                    ...form, 
                    [e.target.name]: e.target.value
                });
            }
        } else if(e.target.checked) {

            setForm({
                ...form, 
                [e.target.name]: e.target.checked
            });

        } else {
            setForm({
                ...form, 
                [e.target.name]: e.target.value
            });

            setInputs({...inputs,[e.target.name]: e.target.value});
        }
    };

    // handleSubmit
    const handleSubmit = (e) => {

        e.preventDefault();

        const invalids = Object.values(inputs).filter(el => el === false || el === '');
        
        if(invalids.length === 0) {
            successFunction(e);
            
        }else {
            errorFunction();
        }
        
    };

    // handleReset
    const handleReset = (e) => {
        setForm(initialForm);
        setInputs(initialForm);
        e.target.reset();
    }

    // return
    return {form, handleChange, handleSubmit, handleReset, inputs};

}
