import { solveHomeWork } from './solve-home-work';

describe('solveHomeWork', () => {
  it('should solve the input', () => {
    expect(solveHomeWork(`123 328  51 64
 45 64  387 23
  6 98  215 314
*   +   *   +  `)).toEqual(4277556);
  });

  it('should solve the input rtl', () => {
    expect(solveHomeWork(`123 328  51 64 \n 45 64  387 23 \n  6 98  215 314\n*   +   *   +  `, true)).toEqual(3263827);
  });
});
