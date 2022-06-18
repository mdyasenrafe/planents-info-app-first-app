import { colors } from "../../../Theme/Colors";
import { Typography } from "../../../Theme/Typography";

const BASE = {
  fontFamily: Typography.primary,
  fontSize: 16,
  color: colors.white,
};
const PRIMARY_BASE = {
  fontFamily: Typography.primary,
  fontSize: 16,
  color: colors.white,
};
const BASE_BOLD = {
  fontFamily: Typography.primaryBold,
  color: colors.white,
};

const BOLD = {
  fontFamily: Typography.primaryBold,
  color: colors.white,
};

export const Presets = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BOLD,
    fontSize: 32,
  },
  h2: {
    ...BOLD,
    fontSize: 28,
  },
  h3: {
    ...BASE_BOLD,
    fontSize: 24,
  },
  h4: {
    ...BOLD,
    fontSize: 16,
  },
  p: {
    ...BOLD,
    fontSize: 16,
  },
  small: {
    ...PRIMARY_BASE,
    fontSize: 14,
  },
};
