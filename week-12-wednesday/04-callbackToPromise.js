const { promisify } = require("util");
// const eligibleForPayRollPromise = promisify;
const eligibleForPayroll = (listOfEmployee, callback) => {
  const db = {
    John: true,
    Doe: false,
    Jane: true,
  };
  // let notAllAreEligible = listOfEmployer.some((item) => !db[item]);
  listOfEmployee = listOfEmployee.filter((item) => db[item]);

  callback(null, listOfEmployee);
};

// if (notAllAreEligible) {
//   callback("please do not process payroll, not all are eligible");
// } else {
//   callback(null, listOfEmployee);
// }
const printEligibleEmployee = (error, data) => {
  if (error) {
    console.log(error);
  } else {
    // const files = await fs.readdir(__dirname);
    console.log(files);
    console.log(data);
  }
};

const eligibleForPayrollPromised = promisify(eligibleForPayroll);
eligibleForPayroll(["John", "Doe", "Jane"], (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

// convert eligibleForPayroll to use promise instead of callback

const momentOfTruth = async () => {
  const employees = await eligibleForPayrollPromised(["John", "Jane"]);
  console.log(employees);
};
momentOfTruth();
