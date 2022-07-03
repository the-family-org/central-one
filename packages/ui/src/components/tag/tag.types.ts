import type { MarginLeftProp } from '../../props/margin-left/margin-left.type';
import type { MarginRightProp } from '../../props/margin-right/margin-right.type';
import type { StatusFgBgProp } from '../../props/status-fg-bg/status-fg-bg.type';

export interface TagProps {
  status?: StatusFgBgProp;
  marginLeft?: MarginLeftProp;
  marginRight?: MarginRightProp;
}
