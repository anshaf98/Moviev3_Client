import * as yup from "yup";

// * login validation
const LoginValidation = yup.object().shape({
  email: yup.string().email().required("Email is required").trim(),
  password: yup
    .string()
    .required("Password is required")
    .min(3, "Password must be at least 3 characters")
    .max(20, "Password must be less than 20 characters")
    .matches(/(?=.*[0-9])/, "Password must contain a number"),
});

// * register validation
const RegisterValidation = yup.object().shape({
  email: yup.string().email().required("Email is required").trim(),
  password: yup
    .string()
    .required("Password is required")
    .min(3, "Password must be at least 3 characters")
    .max(20, "Password must be less than 20 characters")
    .matches(/(?=.*[0-9])/, "Password must contain a number"),
  fullName: yup
    .string()
    .required("Full name is required")
    .max(20, "Full name must be less than 20 characters")
    .matches(/^[a-zA-Z ]*$/, "Full name must contain only letters"),
});

// * udapte profile validation
const ProfileValidation = yup.object().shape({
  email: yup.string().email().required("Email is required").trim(),
  fullName: yup
    .string()
    .required("Full name is required")
    .max(20, "Full name must be less than 20 characters")
    .matches(/^[a-zA-Z ]*$/, "Full name must contain only letters"),
});

// * CHANGE PASSWORD validation
const PasswordValidation = yup.object().shape({
  oldPassword: yup
    .string()
    .required("Old Password is required")
    .min(3, "Password must be at least 3 characters")
    .max(20, "Password must be less than 20 characters")
    .matches(/(?=.*[0-9])/, "Password must contain a number"),
  newPassword: yup
    .string()
    .required("New Password is required")
    .min(3, "Password must be at least 3 characters")
    .max(20, "Password must be less than 20 characters")
    .matches(/(?=.*[0-9])/, "Password must contain a number"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .min(3, "Password must be at least 3 characters")
    .max(20, "Password must be less than 20 characters")
    .matches(/(?=.*[0-9])/, "Password must contain a number")
    .oneOf([yup.ref("newPassword"), null], "Password must match"),
});

export {
  LoginValidation,
  RegisterValidation,
  ProfileValidation,
  PasswordValidation,
};
