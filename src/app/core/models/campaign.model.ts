export interface ICampaign {
  _id?: string;
  title: string;
  description: string;
  date: Date;
  rating: number;
}

export class Campaign implements ICampaign {
  _id?: string;
  title: string = '';
  description: string = '';
  date: Date = new Date();
  rating: number = 0;
}
