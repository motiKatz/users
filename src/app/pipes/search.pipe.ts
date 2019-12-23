import { Pipe, PipeTransform } from '@angular/core';
import { Todos } from '../modelso/todos';
import { User } from '../modelso/user';

@Pipe({
  name: 'search'
})
export class SearchPipe<T> implements PipeTransform {


transform(arr:{}[], fieldName:string, value:any): {}[]{
    console.log('filterField',fieldName,value);
  if (arr && arr.length && arr.length>0 && fieldName && value) {
     return arr.filter(
      item => item[fieldName]==(value))
  }
  return null;
}




}