import { CollectionDetailsDto, CollectionDto } from '@finaps/backend/models';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { RijksService } from './rijks.service';
import { RijksCollection } from '@finaps/shared/models';
/**
 * Controller for abstracting RijksData API
 */
@Controller('rijks')
export class RijksController {
  constructor(private readonly rijksService: RijksService) {}

  @Get('collection')
  getCollection(@Query() body: CollectionDto): Observable<RijksCollection> {
    return this.rijksService.getCollection(body);
  }

  @Get('collection/:objectNum')
  getCollectionDetails(
    @Param('objectNum') objectId: string,
    @Query() body: CollectionDetailsDto
  ): Observable<any> {
    return this.rijksService.getCollectionDetails(objectId, body);
  }

  @Get('biblios')
  getBiblios(@Query() query: Record<string, string>): Observable<any> {
    return this.rijksService.getBiblios(query);
  }

  @Get('usergen')
  getUserGenerated(@Query() query: Record<string, string>): Observable<any> {
    return this.rijksService.getUserGenerated(query);
  }
}
