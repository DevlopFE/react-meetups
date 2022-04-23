import * as Yup from "yup";

export const meetupSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required"),
  image: Yup.string()
    .required("Image is required"),
  address: Yup.string()
    .required("Address is required"),
  description: Yup.string()
    .required("Description is required"),
});
