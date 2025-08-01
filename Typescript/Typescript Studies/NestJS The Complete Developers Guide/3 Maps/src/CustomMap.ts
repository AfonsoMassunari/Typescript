// Instruction to every other class
// on how they can be argument to 'addMarker'
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        const mapDiv = document.getElementById(divId);

        if (!mapDiv) {
            throw new Error('Map div not found!');
        }

        this.googleMap = new google.maps.Map(mapDiv, {
            zoom: 1,
            center: { lat: 0, lng: 0 },
        });
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            },
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent(),
            });

            infoWindow.open(this.googleMap, marker);
        });
    }
}
