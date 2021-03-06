import { transition015 } from './../../animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Campaign, ICampaign } from 'src/app/core/models/campaign.model';
import { CampaignsService } from 'src/app/core/services/campaigns.service';

@Component({
  selector: 'app-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.css'],
  animations: [transition015],
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

    this.sortBy = 'default';
  }

  onDelete(selectedCampaign: ICampaign) {
    this.campaignsService.deleteCampaign(selectedCampaign);
  }

  onUpdate(selectedCampaign: ICampaign) {
    if (this.sortBy !== 'default' && this.searchData === '') {
      this.sortBy = 'default';
    }
    this.campaign = selectedCampaign;
    this.campaignsService.updateCampaign(this.campaign);
  }

  onCloseModal() {
    this.isModalOpen = false;
  }

  ngOnDestroy() {
    this.campaignsSubscription.unsubscribe();
  }
}
