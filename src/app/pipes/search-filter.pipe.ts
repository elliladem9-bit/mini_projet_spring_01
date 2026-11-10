import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(list: any[], filterText: string): any {
    if (!list) return [];
    const text = (filterText ?? '').toLowerCase().trim();
    if (!text) return list;
    return list.filter((item) => (item.destination ?? '').toLowerCase().includes(text));
  }
}
