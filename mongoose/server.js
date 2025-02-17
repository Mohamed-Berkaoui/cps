const { default: mongoose } = require("mongoose");

function connect() {
  mongoose.connect(
    "mongodb+srv://admin:WOjXQAShDRw0ByNv@cluster0.n0tzw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { dbName: "cp" }
  );
}

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },

  age: { type: Number },

  favoriteFoods: [{ type: String }],
});

const PersonModel = mongoose.model("person", personSchema);

async function saveUser() {
  const person = new PersonModel({
    name: "John Doe",
    age: 25,
    favoriteFoods: ["Pizza", "Burger"],
  });

  await person.save();
  console.log("person created");
}

async function createUsers() {
  const arrayOfPeople = [
    { name: "Alice", age: 30, favoriteFoods: ["Sushi", "Pasta"] },
    { name: "Bob", age: 22, favoriteFoods: ["Steak", "Ice Cream"] },
    { name: "Charlie", age: 28, favoriteFoods: ["Tacos", "Burger"] },
  ];

  const users = await PersonModel.create(arrayOfPeople);
  console.log(users);
}

async function findUsers() {
  const users = await PersonModel.find();
  console.log(users);
}

async function findOne() {
  const food = "Pizza";

  const user = await PersonModel.findOne({ favoriteFoods: food });

  console.log("🚀 ~ findOne ~ user:", user);
}

async function findById() {
  const personId = "your-person-id-here";

  const user = await PersonModel.findById(personId);
  console.log(user)
}

async function Delete(){
    const personId = "your-person-id-here";
const deletedUser=PersonModel.findByIdAndRemove(personId);
console.log(deletedUser)

}

async function narrow(){
  const users=await  PersonModel.find({ favoriteFoods: "Burritos" })
  .sort({ name: 1 })
  .limit(2)
  .select("-age")
  console.log(users)
;
}
connect();
// findOne()
//  saveUser()
// createUsers()
// findUsers()
//Delete()
// /narrow()
