import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from "yup"

const OTP_INPUTS = 6;
// const schema = yup.object({
//     input__0: yup.string().matches(/^[0-9]/g),
//     'input__1': yup.string().matches(/^[0-9]/g),
//     input__2: yup.string().matches(/^[0-9]/g),
//     input__3: yup.string().matches(/^[0-9]/g),
//     input__4: yup.string().matches(/^[0-9]/g),
//     input__5: yup.string().matches(/^[0-9]/g),
// }).required()

const OtpForm = props => {
    const {phonenumber} = props ?? {};
    const { watch, register, formState:{errors}, handleSubmit, setValue, setFocus, getValues} = useForm({
        mode: "onChange",
    });
    const inputRefs = useRef([]);

    useEffect(()=>{
        setFocus('input__0');
    }, [])

    useEffect(()=>{
       watch((values)=>{
        let otp = ''

        console.log('Watch', values)
        for (const key in values) {
            otp += values[key];

            if(otp.length === OTP_INPUTS){
                console.log('OTP loggin', otp)
            }
        }
       })
    }, [watch])

    const handleChange = (e, name, value) => {
        const parsedValue = parseInt(value);

        if(e.key === "Backspace" && inputRefs.current[`input__${parseInt(name.substring(name.length-1)) - 1}`]){
            setValue(name, '');
            setFocus(`input__${parseInt(name.substring(name.length-1)) - 1}`)
            return null;
        }

        if(!parsedValue){
            console.log('this idiot')
            setValue(name, '');
            return null;
        }

        if(value){
            // Setting up the value and removing the previously entered value.
            setValue(name, value.substring(value.length - 1));
    
            // Handling teh focus when the value is set in the current inbox
            if(value && inputRefs.current[`input__${parseInt(name.substring(name.length-1)) + 1}`]){
                setFocus(`input__${parseInt(name.substring(name.length-1)) + 1}`)
            }
        }
    }

    const {ref:ref_input_0, name:name_input_0, onChange:onChange_input_0} = register('input__0', {
        onChange: e => handleChange(e, 'input__0', e.target.value)
    });
    const {ref:ref_input_1, name:name_input_1, onChange:onChange_input_1} = register('input__1', {
        onChange: e => handleChange(e, 'input__1', e.target.value)
    });
    const {ref:ref_input_2, name:name_input_2, onChange:onChange_input_2} = register('input__2', {
        onChange: e => handleChange(e, 'input__2', e.target.value) 
    });
    const {ref:ref_input_3, name:name_input_3, onChange:onChange_input_3} = register('input__3', {
        onChange: e => handleChange(e, 'input__3', e.target.value)
    });
    const {ref:ref_input_4, name:name_input_4, onChange:onChange_input_4} = register('input__4', {
        onChange: e => handleChange(e, 'input__4', e.target.value)
    });
    const {ref:ref_input_5, name:name_input_5, onChange:onChange_input_5} = register('input__5', {
        onChange: e => handleChange(e, 'input__5', e.target.value)
    });

    return <div>
        <h2>OTP had sent to entered phone number: {phonenumber}</h2>
        <form className="otp-form">
            <input 
                name={name_input_0} 
                ref={(e)=>{
                    ref_input_0(e);
                    inputRefs.current['input__0'] = e
                }} 
                onInput={onChange_input_0}
            />
            <input 
                name={name_input_1} 
                ref={(e)=>{
                    ref_input_1(e);
                    inputRefs.current['input__1'] = e
                }} 
                onKeyUp={onChange_input_1} 
            />
            <input name={name_input_2} ref={(e)=>{
                ref_input_2(e);
                inputRefs.current['input__2'] = e
            }} onKeyUp={onChange_input_2}/>
            <input name={name_input_3} ref={(e)=>{
                ref_input_3(e);
                inputRefs.current['input__3'] = e
            }} onKeyUp={onChange_input_3}/>
            <input name={name_input_4} ref={(e)=>{
                ref_input_4(e);
                inputRefs.current['input__4'] = e
            }} onKeyUp={onChange_input_4}/>
            <input name={name_input_5} ref={(e)=>{
                ref_input_5(e);
                inputRefs.current['input__5'] = e
            }} onKeyUp={onChange_input_5}/>
        </form>
    </div>
}

export default OtpForm;