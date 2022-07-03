import type { ColumnGapProp } from '../../props/column-gap/column-gap.type';
import type { RowGapProp } from '../../props/row-gap/row-gap.type';
import type { FlexDirectionProp } from '../../props/flex-direction/flex-direction.type';
import type { FlexWrapProp } from '../../props/flex-wrap/flex-wrap.type';
import type { JustifyContentProp } from '../../props/justify-content/justify-content.type';

export interface ListGroupProps {
  direction?: FlexDirectionProp;
  justify?: JustifyContentProp;
  wrap?: FlexWrapProp;
  columnGap?: ColumnGapProp;
  rowGap?: RowGapProp;
}
