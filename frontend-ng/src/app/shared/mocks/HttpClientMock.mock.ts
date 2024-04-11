import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpClientMock {
  // Implement methods used by UserService
  post(url: string, data: any): Observable<any> {
    // Return mock data or observable
    return new Observable<any>((observer) => {
      observer.complete();
    });
  }

  // Implement other methods used by HttpClient as needed
}
