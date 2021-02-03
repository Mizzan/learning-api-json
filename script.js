const userData = {
  id: 321,
  name: "John Doe",
  hobby: {
    title: "Playing Chess",
  },
  favoriteFood: "Noodles",
  occupation: "Programmer",
  friendsList: ["Rick Doe", "Marta Doe", "Shawn Doe"],
};

// turning objects / data into json

const turningJSON = JSON.stringify(userData);
console.log(turningJSON);

// turning JSON to objects

const turningObjects = JSON.parse(turningJSON);
console.log(turningObjects);
