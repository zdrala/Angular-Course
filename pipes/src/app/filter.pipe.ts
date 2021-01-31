import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: [], filter:string,propertyName:string): any {
    if(value.length==0||filter=='')
    {
      return value;
    }
    const resultArray=[];
    for(const item of value)
    {
      if(item[propertyName]===filter)
      {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
