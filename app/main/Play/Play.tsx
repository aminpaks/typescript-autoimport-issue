import {useText, useText1, useText2} from 'shared/texts';

export function Play() {
  useText();
  useText1();
  useText2();

  useCards();

  console.log(loadConfigs2())

  return <div>Play</div>
}
