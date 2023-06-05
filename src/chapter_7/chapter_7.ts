import { endAdventure } from "../..";

import { askQuestion, clear, print } from "../ui/console";

const GROCERIES = [
  "Water",
  "Tea",
  "Cake",
  "Lemonade",
  "Cherries",
  "Crisps",
  "Boiled Eggs",
] as const;
type GroceryType = (typeof GROCERIES)[number];

type GroceryItem = {
  type: GroceryType;
};

type Basket = {
  food: Array<GroceryItem>;
};
const basket: Basket = { food: [] };
function fillTheBasket(): Basket {
  for (let i = 0; i < 7; i++) {
    console.log(GROCERIES[i]);
    basket.food.push({
      type: GROCERIES[i],
    });
  }

  return basket;
}

export function haveAPicnic() {
  clear(true);
  print("We're all having a picnic now 🥮");
  print(`🧺 They said: "Let's see what's in the basket! 🧺"`);
  const picnic = fillTheBasket();

  if (!picnic || !picnic.food || picnic.food.length <= 0) {
    print(`... but there was no food to munch on!. 😱`);
    return endAdventure();
  }

  print(
    `... they set out ${picnic.food.length} pieces of food for their guests.`
  );

  if (picnic.food.length < 4) {
    print(`😱 That's not enough yummy picnic food! Go back to the shop`);
    fillTheBasket();
  }

  print(
    `🥳 Everyone had a lovely picnic, and a great time was had by all. 🥳 `
  );

  print("✅ CONGRATULATIONS! You successfully made it through Wonderland! 🥳");

  print(`Time for a nice nap... 😴 😴 😴`);

  return askQuestion("Press ENTER to re-enter Wonderland! ", endAdventure);
}
