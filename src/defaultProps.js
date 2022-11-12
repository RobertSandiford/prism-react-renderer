// @flow

import Prism from "./vendor/prism.js";
import theme from "./themes/duotoneDark.js";

import type { PrismLib } from "./types";

const defaultProps = {
  // $FlowFixMe
  Prism: (Prism: PrismLib),
  theme,
};

export default defaultProps;
