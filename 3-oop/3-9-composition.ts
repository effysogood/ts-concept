/**
 * Favor COMPOSITION OVER Inheritance
 */

{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 12; // class level
    private coffeeBeans: number = 0; // instance level

    constructor(initialCoffeeBeans: number) {
      this.coffeeBeans = initialCoffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    public get checkBeans() {
      return this.coffeeBeans;
    }

    public fillBeans(quantity: number) {
      if (quantity < 0) {
        throw new Error('Value for beans should be greater than 0');
      }
      this.coffeeBeans += quantity;
    }

    public clean() {
      console.log(`Cleaning the machine 🧽`);
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);

      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log('Heating up 💨');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    public makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // 싸구려 우유 거품기
  class CheapMilkSteamer {
    private steamMilk() {
      console.log('Steaming some milk 🥛');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 설탕 제조기
  class AutomaticSugarMixer {
    private getSugar() {
      console.log('Getting some sugar 🍭');
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      this.getSugar();
      return {
        ...cup,
        hasSugar: true,
      };
    }
  }

  class CoffeeLatteMaker extends CoffeeMachine {
    constructor(
      beans: number,
      public readonly serialNumber: string | number,
      private milkFrother: CheapMilkSteamer
    ) {
      super(beans);
    }
    public makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(beans: number, private sugar: AutomaticSugarMixer) {
      super(beans);
    }
    public makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      beans: number,
      private milk: CheapMilkSteamer,
      private sugar: AutomaticSugarMixer
    ) {
      super(beans);
    }
    public makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(200),
    new CoffeeLatteMaker(200, 'abc200', new CheapMilkSteamer()),
    new SweetCoffeeMaker(200, new AutomaticSugarMixer()),
    new SweetCaffeLatteMachine(
      200,
      new CheapMilkSteamer(),
      new AutomaticSugarMixer()
    ),
  ];

  machines.forEach((machine) => {
    console.log('----------------------------');
    machine.makeCoffee(1);
  });
}
