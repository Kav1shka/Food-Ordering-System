
/*const Validator = require("validator");
const isEmpty = require("is-empty");
*/
const registerValid = (Name, Email, password,cf_password, KDU_ID,Phone) => {
  /*
  module.exports = function validateLoginInput(data) {
    let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
  // Email checks
    if (Validator.isEmpty(data.email)) {
      errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
      errors.email = "Email is invalid";
    }
  // Password checks
    if (Validator.isEmpty(data.password)) {
      errors.password = "Password field is required";
    }
  return {
      errors,
      isValid: isEmpty(errors)
    };
  }; 

  module.exports = function validateRegisterInput(data) {
    let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
    data.Name = !isEmpty(data.Name) ? data.Name : "";
    data.Email = !isEmpty(data.Email) ? data.Email : "";
    data.password = !isEmpty(data.password) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  // Name checks
    if (Validator.isEmpty(data.firstName)) {
      errors.firstName = "First Name field is required";
    }
    if (Validator.isEmpty(data.lastName)) {
      errors.lastName = "Last Name field is required";
    }
  // Email checks
    if (Validator.isEmpty(data.email)) {
      errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
      errors.email = "Email is invalid";
    }
  // Password checks
    if (Validator.isEmpty(data.password)) {
      errors.password = "Password field is required";
    }
  if (Validator.isEmpty(data.password2)) {
      errors.password2 = "Confirm password field is required";
    }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
      errors.password = "Password must be at least 6 characters";
    }
  if (!Validator.equals(data.password, data.password2)) {
      errors.password2 = "Passwords must match";
    }
  return {
      errors,
      isValid: isEmpty(errors)
    };
  };
  */
 
    if (Name==null){
      return "Please enter your name";
    } 
    if (KDU_ID=== null) return "Please enter your KDU_ID";
    if (Phone=== null) return "Please enter your mobile number";
    if (Email=== null) return "Please enter your email address";
    //if (!validateEmail(Email)) return "Please enter valid email";
    if (password=== null) return "Please enter new password";
    // if (password.length < 10)
    //   return "Password should contain atleast 10 characters";
    if (cf_password=== null) return "Please retype your password to confirm";
    if (password !== cf_password)
      return "Passwords does not match. Please try again";
  };
  
  const loginValid = (Email, password) => {
    if (Email=== null) return "Please enter your email";
    if (password=== null) return "Please enter your password";
  };
  
  const addFoodErrorHandler = (name, category, cost, description, image) => {
    if (!name) return "Please enter food name";
    if (!category) return "Please enter food category";
    if (!cost) return "Please enter food cost";
    if (!description) return "Please enter food description";
    if (!image) return "Please add food image";
    if (!description) return "Please enter rating of food ";
   // if (!image) return "Please add food image";
  };
  
  const makeOrderErrorHandler = (CustomerName, Email, foodName, KDU_ID,CustomerType ,foodCode) => {
    if (!CustomerName) return "Please enter your name";
    if (!Email) return "Please enter your email";
    if (!foodName) return "Food name reuired";
    if (!KDU_ID) return "Please enter your KDU ID";
    if (!CustomerType) return "enter customer type";
    if (!foodCode) return "Please enter foodcode";
  };
  
  // function validateEmail(Email) {
  //   const re =
  //     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(Email);
  // }
  
  module.exports =  {
    registerValid,
    loginValid,
    addFoodErrorHandler,
    makeOrderErrorHandler,
  };


