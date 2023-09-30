import {ExpensiveEnum, Payload} from '~/shared/types/expensive-enum';

export function ExEnumCompoY<T extends ExpensiveEnum>(_: {type: T; payload: Payload[T];}) {
  return <div>Component Y</div>;
}
