import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'word',
  standalone: true
})
export class WordPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.substring(0,2);
  }

}
