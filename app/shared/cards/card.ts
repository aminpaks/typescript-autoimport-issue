import {CSSProperties} from 'react';
import {DeepKeys, LimitDepth} from '../types/recursive';

const styles = {
  '--check': 'check',
};

const css: CSSProperties = {
  ...styles,
  'wordBreak': 'break-all',
};

interface Recurring {
  value: Test | undefined;
  css: CSSProperties;
}

interface Test {
  foo: {
    re: Recurring;
    css: Pick<CSSProperties, 'wordBreak'>;
  };
}

export const value: Test = {
  foo: {
    re: {
      value: {
        foo: {
          re: {
            value: undefined,
            css,
          },
          css
        }
      },
      css: {
        ...css,
        textAlign: 'left'
      }
    },
    css,
  }
};

export declare const t: DeepKeys<LimitDepth<Recurring, 12>>;
