class Person {
  #_id;
  #_name;
  #_salary;

  constructor(idValue, nameValue, salaryValue) {
    this.#_id = idValue;
    this.#_name = nameValue;
    this.#_salary = salaryValue;
  }

  get id() {
    return this.#_id;
  }

  get name() {
    return this.#_name;
  }
  set name(value) {
    this.#_name = value;
  }

  get salary() {
    return this.#_salary;
  }
  set salary(value) {
    this.#_salary = value;
  }

  print() {
    return this.#_id + ", " + this.#_name + ", " + this.#_salary;
  }
}

class Trainer extends Person {
  #_subject;

  constructor(idValue, nameValue, salaryValue, subjectValue) {
    //Person.call(this,idValue, nameValue, salaryValue)
    super(idValue, nameValue, salaryValue);
    this.#_subject = subjectValue;
  }

  print() {
    return super.print() + ", Subject: " + this.#_subject;
  }
}

const joydipRef = new Trainer(1, "joydip", 1000, "JS");
console.log(joydipRef.name);
console.log(joydipRef.print());
