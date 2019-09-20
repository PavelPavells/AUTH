const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.companyName = !isEmpty(data.companyName) ? data.companyName : "";
  data.companyINN = !isEmpty(data.companyINN) ? data.companyINN : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  //data.password = !isEmpty(data.password) ? data.password : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.contactPerson = !isEmpty(data.contactPerson) ? data.contactPerson : "";
  data.companyPhone = !isEmpty(data.companyPhone) ? data.companyPhone : "";
  // Company Name checks;
  if (Validator.isEmpty(data.companyName)) {
    errors.companyName = "Company Name is required";
  }
  // Company INN checks;
  if (Validator.isEmpty(data.companyINN)) {
    errors.companyINN = "Company INN field is required";
  }
  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  // Second Password Checks
  //  if(Validator.isEmpty(data.password)) {
  //    errors.password = "Password must be at least 6 characters";
  //  }
  //  if(!Validator.isLength(data.password, {min: 3, max: 30})) {
  //    errors.password = "Password must be at least 6 characters";
  //  }
  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  // COntact Person Checks
  if (Validator.isEmpty(data.contactPerson)) {
    errors.contactPerson = "Contact Person is required";
  }
  // Company Phone checks;
  if (Validator.isEmpty(data.companyPhone)) {
    errors.companyPhone = "Company Phone field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
