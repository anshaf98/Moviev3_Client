import * as yup from "yup";

// * review validation
const ReviewValidation = yup.object().shape({
  comment: yup.string().required("Comment is required"),
  rating: yup.number().required("Select a rating"),
});

// *create movie validation
const MovieValidation = yup.object().shape({
  name: yup
    .string()
    .required("Please enter a movie name")
    .max(50, "Movie name should be less than 50 characters"),
  time: yup.number().required("Please enter a movie duration"),
  language: yup.string().required("Please enter a movie language"),
  year: yup.number().required("Please enter year of release"),
  category: yup.string().required("Please select movie categor"),
  desc: yup
    .string()
    .required("Please enter a movie description")
    .max(500, "Movie name should be less than 500 characters"),
});

export { ReviewValidation, MovieValidation };
