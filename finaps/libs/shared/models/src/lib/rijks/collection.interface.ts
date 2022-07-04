/**
 * Base interface for the CollectionAPI
 * @type `'json' | 'jsonp' | 'xml'` @optional `format`
 * @type `'nl' | 'en'` @optional `culture`
 */

export interface ICollectionBase {
  format: 'json' | 'jsonp' | 'xml';
  culture: 'nl' | 'en';
}

/**
 * Interface for the CollectionAPI
 * @description It gives access to the collection with brief information about each object. The results are split up in result pages. By using the p and ps parameters you can fetch more results, up to a total of 10,000.
 * @type `number` @Optional `p` - page
 * @type `number` @Optional `ps` - page-size
 * @type `string` @Optional `q` - query
 * @type `string` @Optional `involvedMaker`
 * @type `string` @Optional `type`
 * @type `string` @Optional `material`
 * @type `string` @Optional `technique`
 * @type `number` @Optional `f.dating.period` - century object is from
 * @type `string` @Optional `f.normalized32Colors.hex` - Colors found in img (url-encode the hex color)
 * @type `boolean` @Optional `imgonly`
 * @type `boolean` @Optional `toppieces`
 * @type `relevance`, `objecttype`, `(a)chronologic` or `artist(desc)` @Optional `s` - sort
 */
export interface ICollection extends ICollectionBase {
  /** The result page. Note that p * ps cannot exceed 10,000. */
  p?: number;
  /** The number of results per page. */
  ps?: number;
  /** The search terms that need to occur in one of the fields of the object data. */
  q?: string;
  /** Object needs to be made by this agent. */
  involvedMaker?: string;
  /** The type of the object. */
  type?: string;
  /** The material of the object. */
  material?: string;
  /** The technique used to make the object. */
  technique?: string;
  /** The century in which the object is made. */
  'f.dating.period'?: number;
  /** Colors found in the images (mind?: The # in #FF0000 should be url-encoded!). */
  'f.normalized32Colors.hex'?: string;
  /** Only give results for which an image is available or not. */
  imgonly?: boolean;
  /** Only give works that are top pieces. */
  toppieces?: boolean;
  /** Sort results based on `relevance`, `objecttype`, `(a)chronologic` or `artist(desc)` */
  s?:
    | 'relevance'
    | 'objecttype'
    | 'chronologic'
    | 'achronologic'
    | 'artist'
    | 'artistdesc'
    | '';
}


export interface RijksCollection {
  elapsedMilliseconds: number;
  count:               number;
  countFacets:         RijksCountFacets;
  artObjects:          RijksArtObject[];
  facets:              RijksCollectionFacet[];
}

export interface RijksArtObject {
  links:                 RijksLinks;
  id:                    string;
  objectNumber:          string;
  title:                 string;
  hasImage:              boolean;
  principalOrFirstMaker: string;
  longTitle:             string;
  showImage:             boolean;
  permitDownload:        boolean;
  webImage:              RijksImage;
  headerImage:           RijksImage;
  productionPlaces:      string[];
}

export interface RijksImage {
  guid:              string;
  offsetPercentageX: number;
  offsetPercentageY: number;
  width:             number;
  height:            number;
  url:               string;
}

export interface RijksLinks {
  self: string;
  web:  string;
}

export interface RijksCountFacets {
  hasimage:  number;
  ondisplay: number;
}

export interface RijksCollectionFacet {
  facets:     RijksCollectionFacetFacet[];
  name:       string;
  otherTerms: number;
  prettyName: number;
}

export interface RijksCollectionFacetFacet {
  key:   string;
  value: number;
}

export interface RijksCollectionResponse {
  [key:string]: any;
  status: any;
  statusText: any;
  headers: any;
  config: any;
  data: RijksCollection
}
