import { findFresh, findTotal } from './find-fresh';

describe('findFresh', () => {
  const input = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`;

  it('finds the fresh ids', () => {
    expect(findFresh(input)).toEqual(3);
  });
});

describe('findTotal', () => {
  it('finds total of available ids', () => {
    expect(findTotal(`3-50
10-14`)).toEqual(48);

    expect(findTotal(`3-5
10-14
16-20
12-18

1
5
8
11
17
32`)).toEqual(14);
  });
});
