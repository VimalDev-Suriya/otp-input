import { useForm } from "react-hook-form";

const PhonenumberForm = (props) => {
    const {otpFromVisibilityHandler} = props ?? {};

    const {register, handleSubmit, formState:{errors}, setValue} = useForm();

    // const {name, ref, onChange, onBlur, } = register('phonenumber', {
    //     onChange: (e) => {
    //         setValue('phonenumber', e.target.value.substring(e.target.value.length - 1))
    //     },
    //     // value: 3
    //     // value:(e)=> e.target.value
    // });

    return <form onSubmit={handleSubmit(otpFromVisibilityHandler)}>
        <input type="text"  {...register('phonenumber')}/>
        {
            errors.phonenumber ? <p>Please enter valid phone number</p> : null
        }
        <button type="submit">Submit</button>
    </form>
}

export default PhonenumberForm;