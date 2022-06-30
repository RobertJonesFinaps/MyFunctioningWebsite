import { ICollectionDetails } from '@finaps/shared/models';
import { IsOptional } from 'class-validator';

export class CollectionDetailsDto implements ICollectionDetails {
  format!: 'json' | 'jsonp' | 'xml';
  culture!: 'nl' | 'en';
  @IsOptional()
  'object-number'?: string;
}
