import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'example',
})
export class ExamplePipe implements PipeTransform {
  transform(value: string): number {
    return value.length;
  }
}
