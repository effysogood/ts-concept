{
  interface CoffeeBase {
    name: string;
    shots: number;
    milk: number;
    hasSyrup: boolean;
  }

  type menuList = 'americano' | 'latte' | 'vanilaLatte';

  let beansStock: number = 10;
  const BEANS_GRAM_PER_SHOT = 20;

  const recipes: Record<string, CoffeeBase> = {
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

  function makeCoffee(order: menuList) {
    const recipe = recipes[order];

    if (!order) {
      throw new Error(`Unknown menu: ${order}`);
    }

    if (beansStock < recipe.shots * BEANS_GRAM_PER_SHOT) {
      throw new Error(
        `Out of coffee bean's stock: ${
          beansStock - recipe.shots * BEANS_GRAM_PER_SHOT
        }`
      );
    }

    beansStock -= recipe.shots * BEANS_GRAM_PER_SHOT;
    return `Here's your ${order}`;
  }

  console.log(makeCoffee('americano'));
  // console.log(makeCoffee('misutgaru'));
  console.log(beansStock);
}
