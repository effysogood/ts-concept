{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public, private, protected
  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 12; // class level
    private coffeeBeans: number = 0; // instance level

    private constructor(initialCoffeeBeans: number) {
      this.coffeeBeans = initialCoffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillBeans(quantity: number) {
      if (quantity < 0) {
        throw new Error('Value for beans should be greater than 0');
      }
      this.coffeeBeans += quantity;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine;
  console.log(maker);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 20;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error(`Invalid Input`);
      }
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  const user = new User('Steve', 'jobs');
  console.log(user.fullName);
  user.age = 7;
  console.log(user.age);
}
