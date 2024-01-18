import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MockService } from './mock-service.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mockServiceSubscription : Subscription | undefined;
  constructor(private mockService: MockService) {}
  data:any;
  
  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.mockServiceSubscription = this.mockService.getData().subscribe((data:any) => {
      this.data = this.getNumberofOccurance(data);
    })
  }

  getNumberofOccurance(data: any) {
    const distinctNames = [...new Set(data)];
    let distinctNamesWithOccurance:any = [];
    distinctNames.forEach((el:any) => {
      distinctNamesWithOccurance?.push(
        {name: el, duplicates: data.filter((data:any) => data === el).length}
      );
    })
    return distinctNamesWithOccurance;
  }

  getColor(duplicates: number): string {
    if (duplicates > 0 && duplicates < 3) {
      return 'red';
    } else if (duplicates >= 3 && duplicates < 10) {
      return 'yellow';
    } else if (duplicates >= 10) {
      return 'green';
    } else {
      return '';
    }
  }

  ngOnDestroy(): void {
    this.mockServiceSubscription?.unsubscribe();
  }
}
