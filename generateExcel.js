const XLSX = require("xlsx");
const { faker } = require("@faker-js/faker");

const workbook = XLSX.utils.book_new();
const worksheetData = [];

worksheetData.push(["FirstName", "LastName", "Age", "Email", "Password"]);

for (let i = 0; i < 10; i++) {
  worksheetData.push([
    faker.person.firstName(),
    faker.person.lastName(),
    faker.number.int({ min: 18, max: 99 }),
    faker.internet.email(),
    faker.internet.password(),
  ]);
}

const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

XLSX.writeFile(workbook, "user_data3.xlsx");

console.log("Excel file created: user_data.xlsx");
