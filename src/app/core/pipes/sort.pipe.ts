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

    if (order === 'ascending') {
      return items.sort((a: ICampaign, b: ICampaign) => {
        return b.rating - a.rating;
      });
    } else if (order === 'descending') {
      return items.sort((a: ICampaign, b: ICampaign) => {
        return a.rating - b.rating;
      });
    } else {
      return items;
    }
  }
}
