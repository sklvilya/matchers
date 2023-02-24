/* eslint linebreak-style: ["error", "windows"]  */
export const heroNotSort = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];
export default function toSortHero(hero) {
  return hero.sort((a, b) => b.health - a.health);
}
