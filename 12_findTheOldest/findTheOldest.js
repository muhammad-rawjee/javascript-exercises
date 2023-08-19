const findTheOldest = (arr) => {
    return arr.reduce((oldest, person) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        const currAge = getAge(person.yearOfBirth, person.yearOfDeath)
        
        return oldestAge < currAge ? currAge : oldestAge
    })
}

const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };
  

// Do not edit below this line
module.exports = findTheOldest;
