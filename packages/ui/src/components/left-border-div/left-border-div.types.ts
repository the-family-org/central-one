import type { DisplayProp } from '../../props/display/display.type';
import type { FlexDirectionProp } from '../../props/flex-direction/flex-direction.type';
import type { StatusBorderProp } from '../../props/status-border/status-border.type';
import type { MarginBottomProp } from '../../props/margin-bottom/margin-bottom.type';
import type { ColumnGapProp } from '../../props/column-gap/column-gap.type';
import type { RowGapProp } from '../../props/row-gap/row-gap.type';

type ContentStatusProp = boolean;

export interface LeftBorderDivProps {
  display?: DisplayProp;
  flexDirection?: FlexDirectionProp;
  status?: StatusBorderProp;
  marginBottom?: MarginBottomProp;
  columnGap?: ColumnGapProp;
  rowGap?: RowGapProp;
  contentStatus?: ContentStatusProp;
}
