import { of, pipe , interval } from 'rxjs';
import { map, take } from 'rxjs/operators';
export const TICK = 350;
export const LENGTH = 25;

export function gaussian(i: number) {
  const variance = 0.6;
  const shift = 2;
  const x = (shift * 2 * i) / (LENGTH - 1) - shift;
  return Math.exp(-Math.pow(x, 2) / (2 * variance)) / Math.sqrt(2 * Math.PI * variance);
}

const draw = (brush: string) =>
  pipe(
    map((num: number) => brush.repeat(Math.floor(num * 65))),
    take(25),
  );

const gaussian_stream = interval(350).pipe(
  map(gaussian),
  draw("-"),
  map((v) => "|" + v + v.length),
);

const subscribe = gaussian_stream.subscribe(v => console.log(v));