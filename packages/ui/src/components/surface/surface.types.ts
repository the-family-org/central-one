import type { AlignItemsProp } from '../../props/align-items/align-items.type';
import type { FlexDirectionProp } from '../../props/flex-direction/flex-direction.type';
import type { FlexWrapProp } from '../../props/flex-wrap/flex-wrap.type';
import type { ColumnGapProp } from '../../props/column-gap/column-gap.type';
import type { RowGapProp } from '../../props/row-gap/row-gap.type';
import type { JustifyContentProp } from '../../props/justify-content/justify-content.type';
import type { MarginBottomProp } from '../../props/margin-bottom/margin-bottom.type';
import type { MarginTopProp } from '../../props/margin-top/margin-top.type';
import type { PaddingBottomProp } from '../../props/padding-bottom/padding-bottom.type';
import type { PaddingTopProp } from '../../props/padding-top/padding-top.type';
import type { ShowProp } from '../../props/show/show.type';
import type { StatusBgProp } from '../../props/status-bg/status-bg.type';

type ContentSizeProp =
  | 'full-page'
  | 'full-page-content'
  | 'contained-small'
  | 'contained-medium'
  | 'contained-large';

export type SurfaceProps = {
  show?: ShowProp;
  status?: StatusBgProp;
  contentSize?: ContentSizeProp;
  direction?: FlexDirectionProp;
  justify?: JustifyContentProp;
  align?: AlignItemsProp;
  wrap?: FlexWrapProp;
  columnGap?: ColumnGapProp;
  rowGap?: RowGapProp;
  paddingTop?: PaddingTopProp;
  paddingBottom?: PaddingBottomProp;
  marginTop?: MarginTopProp;
  marginBottom?: MarginBottomProp;
};
