import { BehaviorSubject } from 'rxjs';
import { ICampaign } from 'src/app/core/models/campaign.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CampaignsService {
  private campaigns: ICampaign[] = [];
  private campaignsSubject = new BehaviorSubject<ICampaign[]>(this.campaigns);
  getCampaigns = this.campaignsSubject.asObservable();

  constructor() {}

  addCampaign(campaign: ICampaign) {
    this.campaigns = [campaign, ...this.campaigns];

    this.setCampaigns(this.campaigns);
  }

  updateCampaign(selectedCampaign: ICampaign) {
    this.campaigns = this.campaigns.map((campaign) => {
      if (campaign._id === selectedCampaign._id) {
        return { ...selectedCampaign };
      } else {
        return campaign;
      }
    });

    this.setCampaigns(this.campaigns);
  }

  deleteCampaign(selectedCampaign: ICampaign) {
    this.campaigns = this.campaigns.filter((campaign) => {
      return campaign._id !== selectedCampaign._id;
    });

    this.setCampaigns(this.campaigns);
  }

  getCampaignsFromLocal() {
    this.campaigns = JSON.parse(localStorage.getItem('campaigns') || '[]');
    this.campaignsSubject.next(this.campaigns);
  }

  setCampaigns(campaigns: ICampaign[]) {
    this.campaignsSubject.next(campaigns);
    localStorage.setItem('campaigns', JSON.stringify(campaigns));
  }
}
