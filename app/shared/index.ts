import {AdvancedConfig} from './types';

interface Config<T> extends AdvancedConfig<T extends string ? T : 'default'> {
}

export function loadConfigs1<T extends string>(prop: T): Config<T> {
  return {
    value: prop,
  } as Config<T>;
}
