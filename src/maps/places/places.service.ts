import { Client as GoogleMapsClient, PlaceInputType } from '@googlemaps/google-maps-services-js';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PlacesService {
    constructor(
        private googleMaspClient: GoogleMapsClient, 
        private configService: ConfigService
    ) {}

    async findPlace(text: string) {
        const { data } = await this.googleMaspClient.findPlaceFromText({
            params: {
                input: text,
                inputtype: PlaceInputType.textQuery,
                fields: ['place_id', 'formatted_address', 'geometry', 'name'],
                key: this.configService.get<string>('GOOGLE_MAPS_API_KEY'),
            }
        })
        return data;
    }
}
