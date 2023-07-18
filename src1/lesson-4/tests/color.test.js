import { getColors } from '../scripts/color';

describe('click check', () => {
  document.body.innerHTML = `
  <p id="text1">Text 1</p>
  <p id="text2">Text 2</p>
  <p id="text3">Text 3</p>`;

  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');
  const text3 = document.getElementById('text3');
  const arr = [text1, text2, text3];

  const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

  test('after click color magenta', () => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].click();
      getColors(arr[i]);
      const color = colors[0];
      expect(color).toBe('magenta');
    }
  });

  test('after click color cyan', () => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].click();
      getColors(arr[i]);
      const color = colors[0];
      expect(color).toBe('cyan');
    }
  });

  test('after click color firebrick', () => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].click();
      getColors(arr[i]);
      const color = colors[0];
      expect(color).toBe('firebrick');
    }
  });

  test('after click color springgreen', () => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].click();
      getColors(arr[i]);
      const color = colors[0];
      expect(color).toBe('springgreen');
    }
  });

  test('after click color skyblue', () => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].click();
      getColors(arr[i]);
      const color = colors[0];
      expect(color).toBe('skyblue');
    }
  });

  test('after click color magenta', () => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].click();
      getColors(arr[i]);
      const color = colors[0];
      expect(color).toBe('magenta');
    }
  });
});
