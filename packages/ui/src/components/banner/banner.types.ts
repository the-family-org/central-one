import type { StatusBgProp } from '../../props/status-bg/status-bg.type';
import type { MarginBottomProp } from '../../props/margin-bottom/margin-bottom.type';
import type { ColumnGapProp } from '../../props/column-gap/column-gap.type';
import type { RowGapProp } from '../../props/row-gap/row-gap.type';
import type { FontWeightProp } from '../../props/font-weight/font-weight.type';

export interface BannerProps {
  status?: StatusBgProp;
  marginBottom?: MarginBottomProp;
  columnGap?: ColumnGapProp;
  rowGap?: RowGapProp;
  fontWeight?: FontWeightProp;
}
