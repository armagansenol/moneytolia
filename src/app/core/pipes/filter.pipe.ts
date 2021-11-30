import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    } else if (!searchText) {
      return items;
    }

    searchText = searchText.toLocaleLowerCase();

    return items.filter((item) => {
      return (
        item.title.toLocaleLowerCase().includes(searchText) ||
        item.description.toLocaleLowerCase().includes(searchText)
      );
    });
  }
}
