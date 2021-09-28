// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Santi",
//   age: 29,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

enum Role {
  Admin,
  Read_Only,
  Author,
}

const person = {
  name: "Santi",
  age: 29,
  hobbies: ["Sports", "Cooking"],
  role: Role.Admin,
};

let favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobbie of person.hobbies) {
  console.log(hobbie.toUpperCase());
}
