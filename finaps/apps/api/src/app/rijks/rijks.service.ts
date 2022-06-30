import { CollectionDetailsDto, CollectionDto } from '@finaps/backend/models';
import { buildParameters } from '@finaps/shared/utils';
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { map, Observable, retry, take } from 'rxjs';

@Injectable()
export class RijksService implements OnModuleInit {
  private _baseUrl!: string;
  private _key!: string;
  constructor(private readonly http: HttpService) {}
  onModuleInit() {
    this._baseUrl = process.env.RIJKS_BASE_URL;
    this._key = process.env.RIJKS_API_KEY;
  }
  getCollection(body: CollectionDto): any {
    Logger.log(body)
    const parameters = buildParameters(body);
    const url = `${this._baseUrl}/${body.culture}/collection?key=${this._key}&${parameters}`;    
    return this.http.get<any>(url).pipe(
      retry(1),
      map((res) => res['data']),
      take(1)
    );
  }
  getCollectionDetails(
    objectNum: string,
    body: CollectionDetailsDto
  ): Observable<any> {
    const parameters = buildParameters(body);

    return this.http
      .get<any>(
        `${this._baseUrl}/${body.culture}/collection/${objectNum}?key=${this._key}&${parameters}`
      )
      .pipe(
        retry(1),
        map((res) => res['data']),
        take(1)
      );
  }
  getBiblios(query: Record<string, string>): any {
    return { msg: 'to be implemented' };
  }
  getUserGenerated(query: Record<string, string>): any {
    return { msg: 'to be implemented' };
  }
}
