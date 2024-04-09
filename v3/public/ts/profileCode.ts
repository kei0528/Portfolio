type Fish = {
  name: string
}

type BrewMethod = 'Filter' | 'Espresso'

type Coffee = {
  name: string
  brewMethod: BrewMethod
}

type Beverage = Coffee

/**
 * Checks if the current time is during the day
 */
function isDay(): boolean {
  return true
}

/**
 * Retrieves a list of fishes that Keisuke caught
 */
function getFishes(): Array<Fish> {
  return []
}

/**
 * Brews a cup of coffee based on specified brew method
 */
async function brewCoffee(brewMethod: BrewMethod): Promise<Coffee> {
  await new Promise((res) => res)
  return { name: 'Coffee', brewMethod }
}

/**
 * Drinks specified beverage
 */
function drink(beverage: Beverage): void {}

/**
 * Writes some really good code
 */
function writeCode(): void {}

/**---------------------------------------------------------------**/
/**---------------------------------------------------------------**/

if (isDay()) {
  const fishes = getFishes()
  const countFishes = fishes.length
  console.log(countFishes) // 0
} else {
  const coffee = await brewCoffee('Filter')
  drink(coffee)
  writeCode()
}
