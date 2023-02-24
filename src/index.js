/* eslint linebreak-style: ["error", "windows"]  */
export const heroNotSort = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
export default function toSortHero(hero) {
  return hero.sort((a, b) => b.health - a.health);
}
