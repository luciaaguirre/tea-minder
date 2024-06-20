import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from './test-component/test-component.component';
import { ExamplePipe } from './pipes/example.pipe';

@NgModule({
  declarations: [TestComponentComponent, ExamplePipe],
  imports: [CommonModule],
  exports: [TestComponentComponent],
})
export class SharedModule {}
