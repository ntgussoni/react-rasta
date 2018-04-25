import RowWrap from "./RowWrap";
import { css } from "../utils";

function renderWrap(wrap?: RowWrap): string {
  if (wrap == null) {
    return renderWrap("wrap");
  }

  if (wrap === "nowrap" || wrap === "wrap" || wrap === "wrap-reverse") {
    return css`
      flex-wrap: ${wrap};
    `;
  }

  return "";
}

export default renderWrap;