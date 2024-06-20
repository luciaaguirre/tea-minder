import { Component, inject } from '@angular/core';
import { ExampleService } from '../services/example.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss'],
})
export class TestComponentComponent {
  private service: ExampleService = inject(ExampleService);
  constructor() {
    console.log(this.service.getData());
  }
}
