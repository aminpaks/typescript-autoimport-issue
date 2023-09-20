import {Play} from './Play';

describe('check', () => {
  it('runs', () => {
    const play = <Play />;
    expect(play).toStrictEqual(<div>Play</div>);
  })
});
