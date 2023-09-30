import {ExEnumCompoY} from '~/shared/components';
import {ExpensiveEnum} from '~/shared/types';

export function Stop() {
  return (
    <ExEnumCompoY
      type={ExpensiveEnum.Validated0011}
      payload={{value: 'validated__0011'}}
    />
  );
}
