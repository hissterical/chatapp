const Yup = require("yup");

const registerSchema = Yup.object({
  email: Yup.string()
    .email()
    .required("email required")
    .max(40, "email 2 long")
    .min(6, "email 2 short"),
  username: Yup.string()
    .required("username required")
    .min(3, "name 2 short")
    .max(30, "name 2 long"),
  password: Yup.string()
    .required("password required")
    .min(6, "pass 2 short")
    .max(30, "pass 2 long"),
});
const loginSchema = Yup.object({
  email: Yup.string()
    .email()
    .required("email required")
    .max(40, "email 2 long")
    .min(6, "email 2 short"),
  password: Yup.string()
    .required("password required")
    .min(6, "pass 2 short")
    .max(30, "pass 2 long"),
});

module.exports = { registerSchema, loginSchema };
