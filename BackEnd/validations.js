// const Validator = require('validator');
// const isEmpty = require("is-empty");

const registerValid = (Name,KDU_ID,Phone, Email, password,cf_password)=>{
  
  if (!Name)
    return "Please enter your name";
  if (!KDU_ID) return "Please enter your KDU_ID";
  if (!Phone) return "Please enter your mobile number";
  if (!Email) return "Please enter your email address";
  //if (!validateEmail(Email)) return "Please enter valid email";
  if (!password) return "Please enter new password";
  // if (password.length < 10)
  //   return "Password should contain atleast 10 characters";
  if (!cf_password) return "Please retype your password to confirm";
  if (password !==cf_password)
    return "Passwords does not match. Please try again";
};

//   let errors = {};
// Name = !isEmpty(Name) ? Name : "";
// Email = !isEmpty(Email) ? Email : "";
// password = !isEmpty(password) ? password : "";
// cf_password = !isEmpty(cf_password) ? cf_password : "";
// KDU_ID = !isEmpty(KDU_ID) ? KDU_ID : "";
// Phone = !isEmpty(Phone) ? Phone : "";
 

// if (Validator.isEmpty(Name)) {
//   errors = "First Name field is required";
// }
// if (Validator.isEmpty(Email)) {
//   errors = "Last Name field is required";

// if (Validator.isEmpty(Email)) {
//   errors = "Email field is required";
// } else if (!Validator.isEmail()) {
//   errors = "Email is invalid";
// }

// if (Validator.isEmpty(password)) {
//   errors = "Password field is required";
// }
// if (Validator.isEmpty(cf_password)) {
//   errors = "Confirm password field is required";
// }
// if (!Validator.isLength(password, { min: 6, max: 30 })) {
//   errors = "Password must be at least 6 characters";
// }
// if (!Validator.equals(password, cf_password)) {
//   errors = "Passwords must match";
// }
 
// return {
//   errors,
//   isValid: isEmpty(errors)
// };

// }
// };
  
  const loginValid = (Email, password) =>{
    if (!Email) return "Please enter your email";
    if (!password) return "Please enter your password";
  };
  const feedbackValid = (fbMessage) =>{
    if (!fbMessage) return "Please enter your feedback";
   
  };
  

  const addFoodErrorHandler = (name, category, cost, description) =>{
    if (!name) return "Please enter food name";
    if (!category) return "Please enter food category";
    if (!cost) return "Please enter food cost";
    if (!description) return "Please enter food description";
  
   // if (!image) return "Please add food image";
  };
  
  const makeOrderErrorHandler = (CustomerName, Email, foodName, KDU_ID,CustomerType) => {
    if (!CustomerName) return "Please enter your name";
    if (!Email) return "Please enter your email";
    if (!foodName) return "Food name reuired";
    if (!KDU_ID) return "Please enter your KDU ID";
    if (!CustomerType) return "enter customer type";
    // if (foodCode==null) return "Please enter foodcode";

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
    feedbackValid
  };


