import { Controller, Get, Render } from '@nestjs/common';
import { LocationService } from './location.service';

interface ILocationListDto {
  locations: string[];
}

@Controller()
export class LocationController {
  constructor(private locationService: LocationService) {}

  @Get('')
  @Render('list.hbs')
  listLocations(): ILocationListDto {
    return {
      locations: this.locationService.list(),
    };
  }
}
