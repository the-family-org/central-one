import type { FontSizeProp } from '../../props/font-size/font-size.type';
import type { FontWeightProp } from '../../props/font-weight/font-weight.type';
import type { MarginBottomProp } from '../../props/margin-bottom/margin-bottom.type';
import type { TextAlignProp } from '../../props/text-align/text-align.type';

type AdaptiveSizeProp = boolean;

export interface ParagraphProps {
  fontSize?: FontSizeProp;
  fontWeight?: FontWeightProp;
  textAlign?: TextAlignProp;
  marginBottom?: MarginBottomProp;
  adaptiveSize?: AdaptiveSizeProp;
}
