import * as Yup from 'yup';

const validationSchema = Yup.object({
  type: Yup.string().required('Required'),
  title: Yup.string().required('Required'),
  description: Yup.string(),
  address: Yup.string().required('Required'),
  // customGeolocationEnabled: Yup.boolean(),
  // geolocation: Yup.object().when('customGeolocationEnabled', {
  //   is: true,
  //   then: Yup.object({
  //     latitude: Yup.number().required('Required'),
  //     longtiude: Yup.number().required('Required')
  //   })
  // }),
  regularPrice: Yup.number().positive('Enter a valid price').required('Required')
});

export default validationSchema;
