import { Component, inject } from '@angular/core';
import { ExampleService } from '../services/example.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss'],
})
export class TestComponentComponent {
  private service: ExampleService = inject(ExampleService);

  list: number[] = [0, 1, 2, 3];
  constructor() {
    console.log(this.service.getData());
  }
}
