import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value:string, value2:string,value3:string): string {
    return value+value2+value3;
  }

}
