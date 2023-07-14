import * as yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const driverSchema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    phoneNumber: yup.string().matches(phoneRegExp, {message: "Enter a valid phone number"}).required("Enter a valid phone number"),
    emailId: yup.string().email("Please enter a valid email").required("Please enter a valid email"),
    driverId: yup.string().required("Required"),
})