import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Campaign, ICampaign } from 'src/app/core/models/campaign.model';
import { CampaignsService } from 'src/app/core/services/campaigns.service';

@Component({
  selector: 'app-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.css'],
})
export class CampaignsListComponent implements OnInit, OnDestroy {
  private campaignsSubscription: Subscription = new Subscription();
  campaigns: ICampaign[] = [];
  campaign: ICampaign = new Campaign();

  searchData: string = '';
  sortBy = 'default' || 'ascending' || 'descending';

  isModalOpen = false;

  constructor(private campaignsService: CampaignsService) {}

  ngOnInit(): void {
    this.campaignsService.getCampaignsFromLocal();

    this.campaignsSubscription = this.campaignsService.getCampaigns.subscribe(
      (val) => (this.campaigns = val)
    );

    if (!this.campaigns.length) {
      this.campaignsService.addCampaign({
        title: 'Örnek Kampanya',
        description: 'Örnek Kampanya Açıklaması',
        date: new Date(),
        rating: 0,
        _id: 'örnekId',
      });
    }
  }

  onDelete(selectedCampaign: ICampaign) {
    this.campaignsService.deleteCampaign(selectedCampaign);
  }

  onUpdate(selectedCampaign: ICampaign) {
    this.campaign = selectedCampaign;
    this.campaignsService.updateCampaign(this.campaign);
  }

  onSort(orderType: string) {
    if (orderType === 'ascending') {
      return this.sortObjectArrayByKey(this.campaigns, 'rating', orderType);
    } else if (orderType === 'descending') {
      return this.sortObjectArrayByKey(this.campaigns, 'rating', orderType);
    } else {
      return this.campaigns;
    }
  }

  sortObjectArrayByKey(arr: any[], key: string, order: string) {
    if (order === 'ascending') {
      arr.sort((a, b) => {
        return a[key] - b[key];
      });
    } else if (order === 'descending') {
      arr.sort((a, b) => {
        return b[key] - a[key];
      });
    }
  }

  onCloseModal() {
    this.isModalOpen = false;
  }

  ngOnDestroy() {
    this.campaignsSubscription.unsubscribe();
  }
}
