import {useCards} from 'shared/cards';
import {useText, useText1, useText2} from 'shared/texts';

export function Play() {
  useText();
  useText1();
  useText2();

  useCards();

  return <div>Play</div>
}
