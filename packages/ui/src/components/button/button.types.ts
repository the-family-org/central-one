import type { ButtonStatusProp } from '../../props/button-status/button-status.type';

type FullWidthProp = boolean;

export interface ButtonProps {
  status?: ButtonStatusProp;
  fullWidth?: FullWidthProp;
}
