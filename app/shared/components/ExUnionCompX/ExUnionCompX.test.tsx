import {ExUnionCompX} from './ExUnionCompX';

describe('CompX', () => {
  it('loads', () => {
    expect(<ExUnionCompX type='validated__0005' payload={{value: 'validated__0005'}} />).toBe(true);
  });
});
