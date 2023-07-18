import { colors } from './main.js';

export function getColors() {
  let i = 0;
  return (e) => {
    e.target.style.color = colors[i];
    i++;
    if (i >= colors.length) {
      i = 0;
    }
  };
}

export const click1 = getColors();
export const click2 = getColors();
export const click3 = getColors();
