import { ICollectionBase } from './collection.interface';

/**
 * Interface for the CollectionDetailsAPI
 * @description It gives more details of an object. Object numbers can be obtained from the results given in the Collection API.
 * @type `string` @Optional `object-number` - The identifier of the object (case-sensitive).
 * @type `number` @Optional `ps` - page-size
 */
export interface ICollectionDetails extends ICollectionBase {
  /** The identifier of the object (case-sensitive). */
  'object-number'?: string;
}
