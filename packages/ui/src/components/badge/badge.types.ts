import type { MarginLeftProp } from '../../props/margin-left/margin-left.type';
import type { MarginRightProp } from '../../props/margin-right/margin-right.type';
import type { StatusFgShadowProp } from '../../props/status-fg-shadow/status-fg-shadow.type';

export interface BadgeProps {
  status?: StatusFgShadowProp;
  marginLeft?: MarginLeftProp;
  marginRight?: MarginRightProp;
}
