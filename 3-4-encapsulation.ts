{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public, private, protected
  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 12; // class level
    private coffeeBeans: number = 0; // instance level

    constructor(initialCoffeeBeans: number) {
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

  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = new CoffeeMaker(22);
  console.log(maker2);
}
