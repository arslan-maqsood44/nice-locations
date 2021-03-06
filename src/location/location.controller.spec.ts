import { LocationController } from './location.controller';
import { LocationService } from './location.service';

describe('LocationController', () => {
  let locationController: LocationController;
  let locationService: LocationService;
  beforeEach(async () => {
    locationService = new LocationService();
    locationController = new LocationController(locationService);
  });

  describe('root', () => {
    it('should return locations', () => {
      expect(locationController.listLocations()).toMatchObject({
        locations: ['Location 1', 'Location 2', 'Location 3'],
      });
    });
  });
});
