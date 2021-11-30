import { ICampaign } from './../models/campaign.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(items: any[], order: string): any {
    if (!items) {
      return [];
    } else if (!order) {
      return items;
    }

    const sorted = this.sort(items, order);
    return sorted;
  }

  sort(items: any[], order: string) {
    if (order === 'ascending') {
      return items.sort((a: ICampaign, b: ICampaign) => {
        return a.rating - b.rating;
      });
    } else if (order === 'descending') {
      return items.sort((a: ICampaign, b: ICampaign) => {
        return b.rating - a.rating;
      });
    } else {
      return items;
    }
  }
}
