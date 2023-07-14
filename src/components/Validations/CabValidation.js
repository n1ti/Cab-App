import * as yup from 'yup'

export const cabSchema = yup.object().shape({
    carModel: yup.string().required("Required"),
    carBrand: yup.string().required("Required"),
    carCapacity: yup.number().required("Enter cab capacity"),
    registrationNumber: yup.string().required("Enter a valid registration number"),
    carId: yup.string().required("Required"),
})