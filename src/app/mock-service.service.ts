import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  getData(): Observable<string[]> {
    return of(['lalu','lalu','lalu','lalu','lalu','lalu','lalu','lalu','lalu','lalu','lalu','lalu','lalu','lalu','lalu','lalu','lalu','lalu','shib','shib','shib','shib','shib','shib','shib', 'John', 'John', 'Jane', 'John', 'Bob', 'Jane', 'John', 'Alice', 'Bob', 'Alice', 'Alice', 'Alice', 'Alice', 'Alice', 'Alice', 'Alice', 'Alice', 'Alice', 'Alice', 'Alice', 'Alice', 'Alice', 'Alice', 'Alice', 'Alice', 'Alice', 'Alice', 'Alice', 'Alice', 'Alice', 'Alice', 'Alice', 'Alice', 'Alice', 'Alice', 'Alice']);
  }

}