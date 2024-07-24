const { registerSchema, loginSchema } = require("@chatapp/common");

//SHOULD I HAVE 2 DIFFERENT SCHEMA AND VALIDATION FOR LOGIN AND REGISTER? IT SEEMS INEFFICIENT AND BAD CODE. I COULD ALSO JUST HAVE THE USERNAME
//AS NOT REQUIRED BUT THATS ALSO UNSAFE CODE.

// WHAT I DID DOESN'T SEEM TOO UGLY BUT USES EXTRA MEMORY. HELP.

const validateForm = (req, res, isRegister) => {
  const formData = req.body;
  let formSchema = isRegister ? registerSchema : loginSchema;

  formSchema
    .validate(formData)
    .catch((err) => {
      res.status(422).send();
      console.log(err.errors);
    })
    .then((valid) => {
      if (valid) {
        console.log("form is gud");
      }
    });
};

module.exports = validateForm;
