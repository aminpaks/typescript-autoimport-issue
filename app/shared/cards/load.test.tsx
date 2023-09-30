import {CSSProperties} from 'react';
import {foo, keys} from '../types/recursive';
import {t} from './card';

type X = CSSProperties & {foo: string;};

describe('check', () => {
  it('loads', () => {
    expect(keys(foo)).toStrictEqual(['check']);
  });

  it('runs', () => {
    let x: X = {foo: 'bar'};

    expect(x).toStrictEqual({foo: 'bar'});
    expect(t).toBeDefined();
  });
});
