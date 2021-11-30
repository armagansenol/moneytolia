import { CampaignsService } from 'src/app/core/services/campaigns.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Campaign, ICampaign } from 'src/app/core/models/campaign.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaigns-create',
  templateUrl: './campaigns-create.component.html',
  styleUrls: ['./campaigns-create.component.css'],
})
export class CampaignsCreateComponent implements OnInit {
  campaign: ICampaign = new Campaign();

  constructor(
    private router: Router,
    private campaignsService: CampaignsService
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.createCampaign();
  }

  createCampaign() {
    const _id = this.uniqueIdGenerator();
    const newCampaign = {
      ...this.campaign,
      title: this.campaign.title,
      description: this.campaign.description,
      date: new Date(),
      _id,
    };

    this.campaignsService.addCampaign(newCampaign);
    this.router.navigateByUrl('/campaigns/list');
  }

  uniqueIdGenerator() {
    const uniqueId = (function () {
      return `_${Math.random().toString(36).substr(2, 9)}`;
    })();
    return uniqueId;
  }
}
