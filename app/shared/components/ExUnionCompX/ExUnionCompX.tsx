import {ExUnion, ExUnionPayload} from '../../types/union';

export function ExUnionCompX<T extends ExUnion>(_: {type: T; payload: ExUnionPayload[T];}) {
  return <div>Component X</div>;
}
