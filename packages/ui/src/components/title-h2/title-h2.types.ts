import type { FontSizeWithLineHeightProp } from '../../props/font-size-with-line-height/font-size-with-line-height.type';
import type { FontWeightProp } from '../../props/font-weight/font-weight.type';
import type { MarginTopProp } from '../../props/margin-top/margin-top.type';
import type { MarginBottomProp } from '../../props/margin-bottom/margin-bottom.type';
import type { TextAlignProp } from '../../props/text-align/text-align.type';

type AdaptiveSizeProp = boolean;
type StrongProp = boolean;

export interface TitleH2Props {
  fontSize?: FontSizeWithLineHeightProp;
  fontWeight?: FontWeightProp;
  textAlign?: TextAlignProp;
  marginTop?: MarginTopProp;
  marginBottom?: MarginBottomProp;
  adaptiveSize?: AdaptiveSizeProp;
  strong?: StrongProp;
}
