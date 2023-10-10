function getPersons() {

    class Person {
        constructor (firstName) {
            this.firstName = firstName;
        }
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }
    let result = [];

    let personOne = new Person('Anna');
    personOne.lastName = 'Simpson';
    personOne.age = 22;
    personOne.email = 'anna@yahoo.com';
    result.push(personOne);
    let personTwo = new Person('SoftUni');
    result.push(personTwo);
    let personThree = new Person('Stephan');
    personThree.lastName = 'Johnson';
    personThree.age = 25;
    result.push(personThree);
    let personFour = new Person('Gabriel');
    personFour.lastName = 'Peterson';
    personFour.age = 24;
    personFour.email = 'g.p@gmail.com';
    result.push(personFour);

    return result;
}
