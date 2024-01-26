import { useState } from "react";
import OtpForm from "./OtpForm";
import PhonenumberForm from "./PhonenumberForm";

const LoginScreen = () => {
    const [isOtpFormVisible, setIsOtpFormVisible] = useState({
        isVisible:false,
        phonenumber:''
    });

    const otpFromVisibilityHandler = ({phonenumber}) => {
        setIsOtpFormVisible(prev=> ({
            ...prev,
            isVisible:true,
            phonenumber
        }));
        // Also we can wire this to API calls
    }

    return <section>
        {
            isOtpFormVisible.isVisible ? 
                <OtpForm phonenumber={isOtpFormVisible.phonenumber}/> : 
                <PhonenumberForm otpFromVisibilityHandler={otpFromVisibilityHandler} />
        }
    </section>
}

export default LoginScreen;