import { CampaignsService } from 'src/app/core/services/campaigns.service';
import { Campaign, ICampaign } from 'src/app/core/models/campaign.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-campaigns-modal',
  templateUrl: './campaigns-modal.component.html',
  styleUrls: ['./campaigns-modal.component.css'],
})
export class CampaignsModalComponent implements OnInit {
  @Input() campaign: ICampaign = new Campaign();
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  campaignTitle = '';
  campaignDescription = '';

  isModalOpen = false;

  constructor(private campaignsService: CampaignsService) {}

  ngOnInit(): void {
    this.campaignTitle = this.campaign.title;
    this.campaignDescription = this.campaign.description;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const updatedCampaign = {
      ...this.campaign,
      title: this.campaignTitle,
      description: this.campaignDescription,
    };

    this.campaignsService.updateCampaign(updatedCampaign);
    this.onClose();
  }

  onClose() {
    this.closeModal.emit();
  }
}
