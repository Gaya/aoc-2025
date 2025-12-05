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

  it('finds total of available ids', () => {
    expect(findTotal(input)).toEqual(14);
  });
});
