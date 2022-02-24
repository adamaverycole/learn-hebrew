import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToString',
})
export class EnumToStringPipe implements PipeTransform {
  transform(value: number, enumType: any): any {
    var x = enumType[value];
    var y = enumType;
    return enumType;
    // .join()
    // .replace(',', ' ');
  }
}
