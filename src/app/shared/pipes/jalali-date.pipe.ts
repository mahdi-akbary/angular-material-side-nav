import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'jalali-moment';

@Pipe({
  name: 'jalaliDate'
})
export class JalaliDatePipe implements PipeTransform {
  transform(value: any): any {
    return moment(value).locale('fa').format('YYYY-MM-DD');
  }
}
