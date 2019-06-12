// Angular recommends put lowerCase name to constants as const reserved word is used
import {DateInterface} from '../interfaces/winners.interface';

export const tiersLabels: string [] = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
export const matchLabels: string [] = [
  '5 Numbers + 2 Euronumbers',
  '5 Numbers + 1 Euronumber',
  '5 Numbers + 0 Euronumbers',
  '4 Numbers + 2 Euronumbers',
  '4 Numbers + 1 Euronumber',
  '4 Numbers + 0 Euronumbers',
  '3 Numbers + 2 Euronumbers',
  '2 Numbers + 2 Euronumbers',
  '3 Numbers + 1 Euronumber',
  '3 Numbers + 0 Euronumbers',
  '1 Number + 2 Euronumbers',
  '2 Numbers + 1 Euronumber',
];

export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// There are other ways to generate the date but this does not consume many resources
export function generateDate(date: DateInterface): string {
  return `${date.dayOfWeek} ${date.day.toString().length === 1 ? '0' + date.day : date.day} ${months[date.month]} ${date.year}`;
}
