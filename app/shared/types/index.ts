export {ExpensiveEnum, type Event, type Payload} from './expensive-enum';
export type {ExUnion, ExUnionEvent, ExUnionPayload} from './union';

export interface AdvancedConfig<T extends string> {
  value: T;
}
