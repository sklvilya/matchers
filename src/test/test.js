import toSortHero, { heroNotSort } from '../index';

test('check sort heroes', () => {
  const heroSort = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const heroWithFuncion = toSortHero(heroNotSort);
  expect(heroWithFuncion).toEqual(heroSort);
});
