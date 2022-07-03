import type { ColumnGapProp } from '../../props/column-gap/column-gap.type';
import type { FlexDirectionProp } from '../../props/flex-direction/flex-direction.type';
import type { FlexWrapProp } from '../../props/flex-wrap/flex-wrap.type';
import type { JustifyContentProp } from '../../props/justify-content/justify-content.type';
import type { RowGapProp } from '../../props/row-gap/row-gap.type';
import type { TextAlignProp } from '../../props/text-align/text-align.type';

type PageSizeProp = boolean;
type PageTopPaddingSizeProp = boolean;

export interface PageContentProps {
  pageSize?: PageSizeProp;
  pageTopPaddingSize?: PageTopPaddingSizeProp;
  direction?: FlexDirectionProp;
  justify?: JustifyContentProp;
  align?: TextAlignProp;
  wrap?: FlexWrapProp;
  columnGap?: ColumnGapProp;
  rowGap?: RowGapProp;
}
