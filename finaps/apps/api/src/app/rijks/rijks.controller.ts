import { Body, Controller, Get, Param } from '@nestjs/common';
import { CollectionDetailsDto, CollectionDto } from '@finaps/backend/models';
import { tap, Observable } from 'rxjs';
import { RijksService } from './rijks.service';
/**
 * Controller for abstracting RijksData API
 */
@Controller('rijks')
export class RijksController {
  constructor(private readonly rijksService: RijksService) {}

  @Get('collection')
  getCollection(@Body() body: CollectionDto): Observable<any> {
    return this.rijksService.getCollection(body);
  }

  @Get('collection/:objectNum')
  getCollectionDetails(
    @Param('objectNum') objectId: string,
    @Body() body: CollectionDetailsDto
  ): Observable<any> {
    return this.rijksService.getCollectionDetails(objectId, body);
  }

  @Get('biblios')
  getBiblios(@Body() query: Record<string, string>): Observable<any> {
    return this.rijksService.getBiblios(query);
  }

  @Get('usergen')
  getUserGenerated(@Body() query: Record<string, string>): Observable<any> {
    return this.rijksService.getUserGenerated(query);
  }
}
