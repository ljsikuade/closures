// Create a function which stores a number. Return an inner function which accepts a number as an argument, adds it to the number in parent scope and returns the new total

function increase() {
  let number = 3;

  function inner(newNumber) {
    number = newNumber + number;
    return number;
  }

  return inner;
}

function double() {
  let number = 5;
  function inner(double) {
    return number * 2;
  }
  return inner;
}

function totalArray() {
  let total = 0;
  function inner(arrayOfNumbers) {
    //add up array
    let total = arrayOfNumbers.reduce((acc, current) => acc + current);
    return total;
  }
  return inner;
}

/*Create a function which stores an empty string. Return an inner function which can accept either a string or an array of strings.
 If it's a string, add it to existing string separated by a space ' '. If it's an array of strings join them using a space,
  append to existing string separated by a space and add a fullstop . at the end. The inner function should return the new resulting string. */

function stringVariator() {
  let existingString = "";
  function inner(stringType) {
    if (typeof stringType === "string") {
      existingString += stringType;
    } else if (Array.isArray(stringType)) {
      existingString.concat(stringType.join(" "));
    }
    return existingString + ".";
  }
  return inner;
}

function mergeSort() {
  emptyArray = [4, 12, 8];

  function insertNumber(number) {
    emptyArray.push(number);
    emptyArray.sort((a, b) => a - b);
    return emptyArray.pop();
  }
  return insertNumber;
}

function calculator() {
  total = 0;

  function insertNumber(number, operator, otherNumber) {
    let operatorObject = {
      "+": function(x, y) {
        return x + y;
      },
      "-": (x, y) => {
        return x - y;
      },
      "*": function(x, y) {
        return x * y;
      }
    };
    switch (operator) {
      case "+":
        total += operatorObject["+"](number, otherNumber);
        break;
      case "-":
        total += operatorObject["-"](number, otherNumber);
        break;
      case "*":
        total += operatorObject["*"](number, otherNumber);
    }
    return total;
  }
  return insertNumber;
}

// dog = {
// name: 'rex',
// breed: 'Poodle',
// colour: 'Blue',
// location: 'Ipswich'
// }

function dogHome() {
  let locations = {};

  obj = {
    houseDog: function(dog) {
      if (locations[dog.location]) {
        locations[dog.location].push(dog);
      } else {
        locations[dog.location] = [dog];
      }
      return locations;
    },
    getDogsByLocation: function(location) {
      return locations.location;
    }
  };

  return obj;
}

/*
  person = {
    name: Bob, 
    money: 12
  }

*/

function trainStation() {
  let people = [];
  const randomAmount = Math.floor(Math.random() * Math.floor(20));
  const randomPerson = Math.floor(Math.random() * Math.floor(people.length));

  trainControl = {
    arrive: function(person) {
      people.push(person);
    },
    getPeople: function() {
      return people;
    },
    giveMoney: function(randomAmount, randomPerson) {
      people[randomPerson].money += randomAmount;
    },
    trainArrives: function() {
      const theOnePercent = people.filter(person => person.money > 20);
      return theOnePercent;
    }
  };

  return trainControl;
}

// [{name: 'Milk, Quanitity: 10, Price: 1.00 }, {name: 'Crisps, Quanitity: 10, Price: 0.75 }]

function shop() {
  let storage = {};
  let totalRevenue = 0; 

  let obj = {
    addStock: function (arrayOfItems) {
     arrayOfItems.map(function(item){
       if(storage[item].name) {
        storage[item].quantity += item.quantity 
        if (storage[item].price !== item.price) {
         const newPrice = (storage[item].price + item.price) / 2

         storage[item].price = newPrice;
        }
       } else {
         storage[item] = item
       }
     })

   
  },

  sellStock: function (orderArray) {
    orderRevenue = 0;
   let receipt =  orderArray.map(function(order){
     if (storage[order.name]) {
       if (order.quantity > storage[order.name].quantity) {
        let difference = order.quantity - storage[order.name].quantity
        order.quantity = order.quantity - difference;
        orderRevenue += (storage[order.name].quantity * storage[order.name].price)
        order.totalPrice = (storage[order.name].quantity * storage[order.name].price)
        storage[order.name].quantity = 0
        return order
       } else {
        orderRevenue += (order.quantity * storage[order.name].price)
        order.totalPrice = (storage[order.name].quantity * storage[order.name].price)
       storage[order.name].quantity - order.quantity
        return order
       }
     }
    })
  },
}

module.exports = {
  increase,
  double,
  totalArray,
  stringVariator,
  mergeSort,
  calculator,
  dogHome
};
