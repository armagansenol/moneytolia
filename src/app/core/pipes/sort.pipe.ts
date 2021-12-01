import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(items: any[], order: string, key: string): any {
    if (!items) {
      return [];
    } else if (!order) {
      return items;
    }

    const sorted = this.sortObjectArrayByKey(items, order, key);
    return sorted;
  }

  sortObjectArrayByKey(arr: any[], order: string, key: string) {
    return arr.sort((a, b) => {
      if (order === 'ascending') {
        return a[key] - b[key];
      } else if (order === 'descending') {
        return b[key] - a[key];
      } else {
        return 0;
      }
    });
  }
}
