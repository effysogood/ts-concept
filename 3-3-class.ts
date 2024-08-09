/**
 * OOP
 * This class will encapsulate the properties and methods
 * related to managing the coffee machine,
 * such as handling stock, storing recipes, and making coffee
 */

{
  interface CoffeeBase {
    name: string;
    shots: number;
    milk: number;
    hasSyrup: boolean;
  }

  type MenuList = 'americano' | 'latte' | 'vanilaLatte';

  class CoffeeMaker {
    private beansStock: number;
    private readonly BEANS_GRAM_PER_SHOT = 20; // OR static으로 막기 (class level)
    private recipes: Record<string, CoffeeBase>;

    constructor(initialBeanStock: number) {
      this.beansStock = initialBeanStock;
      this.recipes = {
        americano: {
          name: 'americano',
          shots: 2,
          milk: 0,
          hasSyrup: false,
        },
        latte: {
          name: 'latte',
          shots: 1,
          milk: 2,
          hasSyrup: false,
        },
        vanilaLatte: {
          name: 'vanilaLatte',
          shots: 1,
          milk: 1,
          hasSyrup: true,
        },
      };
    }

    private checkStock(shots: number): boolean {
      return this.beansStock >= shots * this.BEANS_GRAM_PER_SHOT;
    }

    public makeCoffee(order: MenuList): string {
      const recipe = this.recipes[order];

      if (!recipe) {
        throw new Error(`Unknown menu: ${order}`);
      }

      if (!this.checkStock(recipe.shots)) {
        throw new Error(
          `Out of coffee bean's stock: ${
            this.beansStock - recipe.shots * this.BEANS_GRAM_PER_SHOT
          }`
        );
      }

      this.beansStock -= recipe.shots * this.BEANS_GRAM_PER_SHOT;
      return `Here's your ${recipe.name}`;
    }

    public getStock(): number {
      return this.beansStock;
    }
    public refillBeans(amount: number): void {
      if (amount > 0) {
        throw new Error('Value for beans should be greater than 0');
      }
      this.beansStock += amount;
    }
  }

  const coffeeMaker = new CoffeeMaker(40);

  console.log(coffeeMaker.makeCoffee('americano'));
  console.log(coffeeMaker.getStock());
  coffeeMaker.refillBeans(300);
  console.log(coffeeMaker.getStock());
}
