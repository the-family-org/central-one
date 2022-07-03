import type { FontSizeWithLineHeightProp } from '../../props/font-size-with-line-height/font-size-with-line-height.type';
import type { ListStyleTypeProp } from '../../props/list-style-type/list-style-type.type';
import type { MarginBottomProp } from '../../props/margin-bottom/margin-bottom.type';
import type { TextAlignProp } from '../../props/text-align/text-align.type';
import type { ColumnGapProp } from '../../props/column-gap/column-gap.type';
import type { RowGapProp } from '../../props/row-gap/row-gap.type';

type AdaptiveSizeProp = boolean;

export interface ListProps {
  fontSize?: FontSizeWithLineHeightProp;
  marginBottom?: MarginBottomProp;
  columnGap?: ColumnGapProp;
  rowGap?: RowGapProp;
  textAlign?: TextAlignProp;
  listType?: ListStyleTypeProp;
  adaptiveSize?: AdaptiveSizeProp;
}
