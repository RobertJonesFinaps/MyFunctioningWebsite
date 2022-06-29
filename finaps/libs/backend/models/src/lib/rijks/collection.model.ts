import { ICollection } from '@finaps/shared/models';
import { IsOptional } from 'class-validator';

export class CollectionDto implements ICollection {
  format!: 'json' | 'jsonp' | 'xml';
  culture!: 'nl' | 'en';
  @IsOptional()
  p?: number;

  @IsOptional()
  ps?: number;

  @IsOptional()
  q?: string;

  @IsOptional()
  involvedMaker?: string;
  @IsOptional()
  type?: string;
  @IsOptional()
  material?: string;
  @IsOptional()
  technique?: string;
  @IsOptional()
  'f.dating.period'?: number;
  @IsOptional()
  'f.normalized32Colors.hex'?: string;
  @IsOptional()
  imgonly?: boolean;
  @IsOptional()
  toppieces?: boolean;
  @IsOptional()
  s?:
    | 'relevance'
    | 'objecttype'
    | 'chronologic'
    | 'achronologic'
    | 'artist'
    | 'artistdesc'
    | '';
}
