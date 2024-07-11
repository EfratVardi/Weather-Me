import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

@Pipe({
    name: 'DateFormat'
})
export class DateFormatPipe implements PipeTransform {
    transform(value: string): string {
        if (!value) return '';

        const date = new Date(value);
        const formattedDate = format(date, 'EEEE, d/M', { locale: enUS }); 

        return formattedDate;
    }
}
