/// <reference types="@types/google.maps" />
import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './User';

export function initMap() {
    console.log('Google Maps chamou initMap!');

    const user = new User();
    const company = new Company();

    const customMap = new CustomMap('map');

    customMap.addMarker(user);
    customMap.addMarker(company);
}
