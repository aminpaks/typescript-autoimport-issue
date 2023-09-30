import {ExpensiveEnum} from '~/shared/types/expensive-enum';
import {ExEnumCompoY} from './ExEnumCompY';

describe('CompX', () => {
  it('loads', () => {
    expect(<ExEnumCompoY type={ExpensiveEnum.Validated0005} payload={{value: 'validated__0005'}} />).toBe(true);
  });
});
