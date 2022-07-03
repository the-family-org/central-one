import type { ColumnGapProp } from '../../props/column-gap/column-gap.type';
import type { DisplayProp } from '../../props/display/display.type';
import type { FlexDirectionProp } from '../../props/flex-direction/flex-direction.type';
import type { FlexWrapProp } from '../../props/flex-wrap/flex-wrap.type';
import type { JustifyContentProp } from '../../props/justify-content/justify-content.type';
import type { LinkTypeProp } from '../../props/link-type/link-type.type';
import type { RowGapProp } from '../../props/row-gap/row-gap.type';

export interface LinkButtonProps {
  linkType?: LinkTypeProp;
  display?: DisplayProp;
  direction?: FlexDirectionProp;
  wrap?: FlexWrapProp;
  justify?: JustifyContentProp;
  columnGap?: ColumnGapProp;
  rowGap?: RowGapProp;
}
