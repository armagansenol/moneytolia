import { ICampaign, Campaign } from './../../core/models/campaign.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-campaign-card',
  templateUrl: './campaign-card.component.html',
  styleUrls: ['./campaign-card.component.css'],
})
export class CampaignCardComponent implements OnInit {
  @Input() campaign: ICampaign = new Campaign();
  @Output() deleteCampaign: EventEmitter<ICampaign> = new EventEmitter();
  @Output() updateCampaign: EventEmitter<ICampaign> = new EventEmitter();
  @Output() openModal: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete() {
    this.deleteCampaign.emit(this.campaign);
  }

  onUpdate() {
    this.openModal.emit();
    this.updateCampaign.emit(this.campaign);
  }

  onRatingUpdate(type: string) {
    if (type === 'increase') {
      this.campaign.rating++;
    } else if (type === 'decrease' && this.campaign.rating > 0) {
      this.campaign.rating--;
    }
    this.updateCampaign.emit(this.campaign);
  }
}
