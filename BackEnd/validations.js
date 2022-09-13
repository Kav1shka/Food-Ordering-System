
const registerValid = (Name, Email, password,cf_password, KDU_ID,Phone) => {
  
    if (!Name) return "Please enter your name";
    if (!KDU_ID) return "Please enter your KDU_ID";
    if (!Phone) return "Please enter your mobile number";
    if (!Email) return "Please enter your email address";
    if (!validateEmail(Email)) return "Please enter valid email";
    if (!password) return "Please enter new password";
    if (password.length < 10)
      return "Password should contain atleast 10 characters";
    if (!cf_password) return "Please retype your password to confirm";
    if (password !== cf_password)
      return "Passwords does not match. Please try again";
  };
  
  const loginValid = (Email, password) => {
    if (!Email) return "Please enter your email";
    if (!password) return "Please enter your password";
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
  
  function validateEmail(Email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(Email);
  }
  
  module.exports =  {
    registerValid,
    loginValid,
    addFoodErrorHandler,
    makeOrderErrorHandler,
  };
  
 