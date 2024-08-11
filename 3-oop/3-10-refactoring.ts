/**
 * Favor COMPOSITION OVER Inheritance
 * With Interface
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

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
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

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk() {
      console.log('Fancy Steaming some milk ✨🥛');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class ColdMilkSteamer implements MilkFrother {
    private steamMilk() {
      console.log('Making some cold milk foam 🫧🥛');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 설탕 제조기
  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some sugar from candy 🍭');
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

  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some sugar cane 🥥');
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

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 12; // class level
    private coffeeBeans: number = 0; // instance level

    constructor(
      initialCoffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      this.coffeeBeans = initialCoffeeBeans;
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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      const milkAdded = this.milk.makeMilk(sugarAdded);
      return milkAdded;
    }
  }

  // Milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  // Sugar
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  // Machine
  const sweetCandyMachine = new CoffeeMachine(200, noMilk, candySugar);
  const sweetMachine = new CoffeeMachine(200, noMilk, sugar);
  const latteMachine = new CoffeeMachine(200, cheapMilkMaker, noSugar);
  const coldLatteMachine = new CoffeeMachine(200, coldMilkMaker, noSugar);
  const fancyLatteMachine = new CoffeeMachine(200, fancyMilkMaker, noSugar);

  const machines: CoffeeMaker[] = [
    sweetCandyMachine,
    sweetMachine,
    latteMachine,
    coldLatteMachine,
    fancyLatteMachine,
  ];

  machines.forEach((machine) => {
    console.log('----------------------------');
    machine.makeCoffee(1);
  });
}
