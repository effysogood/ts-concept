{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillBeans(quantity: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 12; // class level
    private coffeeBeans: number = 0; // instance level

    private constructor(initialCoffeeBeans: number) {
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

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }
  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.clean();
      this.machine.fillBeans(300);
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(500);
  const amateur = new AmateurUser(maker);
  const barista = new ProBarista(maker);
  amateur.makeCoffee();
  barista.makeCoffee(); // interface에 규약된 함수만 불러올 수 있게 됨!
}
// ✅ 내용의 핵심은 똑같은 구현부 클래스(CoffeeMachine)를 자원(생성자 함수의 인자)으로 받아도
// Amatuer 클래스와 ProBarista 클래스를 정의할 때, 처음부터 어떤 인터페이스로만 받아서 쓸건지
// 강제로 정의해두었기에 결국 둘의 운명은 달라짐.
// 결론! interface로 규약을 정의해 class의 기능을 추상화.
