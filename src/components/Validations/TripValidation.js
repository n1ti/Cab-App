import * as yup from 'yup'

export const tripSchema = yup.object().shape({
    tripId: yup.string().required("Required"),
    customerName: yup.string().required("Required"),
    driverId: yup.string().required("Enter a valid driver"),
    carId: yup.string().required("Enter a valid cab")
})