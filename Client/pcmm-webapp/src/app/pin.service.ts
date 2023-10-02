import { Feature } from './../../node_modules/@types/geojson/index.d';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import * as L from 'leaflet';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PinService {
  private apiUrl = 'http://:3000/api/v1/mine_pins';

  constructor(private http: HttpClient) {}

  getMinePins(): Observable<any> {
    return this.http.get(`${this.apiUrl}/endpoint`);
  }

  makeMineMarkers(map: L.Map): void {
    // Fetch mine pin data from the API
    this.http.get(this.apiUrl).subscribe((pins: any) => {
      // Create markers based on the data
      for (const pin of pins.features) {
        const lon = pin.geometry.coordinates[0];
        const lat = pin.geometry.coordinates[1];
        const marker = L.marker([lat, lon]);

        // Add the marker to the map
        marker.addTo(map);
      }
    });
  }

}
