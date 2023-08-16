/* eslint-disable react-hooks/rules-of-hooks */
import { useSoccerFieldContext } from "@/contexts/SoccerFieldProvider";

export function testFunction() {
  const { toggleVerticalGridButton, showVerticalGrid } =
    useSoccerFieldContext();

  console.log("before" + showVerticalGrid);

  toggleVerticalGridButton();

  console.log("after" + showVerticalGrid);
}
