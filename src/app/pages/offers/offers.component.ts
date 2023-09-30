import { Component, OnInit, Input } from "@angular/core";
import * as $ from "jquery";
import "bootstrap";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.component.html",
  styleUrls: ["./offers.component.scss"],
})
export class OffersComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}
  prompt: string = "";
  cards: any[] = [];
  cardsGenerated: boolean = false;

  generateCards() {
    console.log("received prompt ", prompt);
    // [TODO] fetch actual data from ai
    this.cards = [
      {
        image:
          "https://img.freepik.com/free-vector/special-offer-creative-sale-banner-design_1017-16284.jpg",
        title: "Unbeatable Offer: 50% Discount on Fresh Groceries!",
        content:
          "Revamp your kitchen and enhance your culinary delights with the freshest groceries at an incredible 50% discount. From a colorful array of fruits to the creamiest dairy products, we have it all to make your meals extraordinary and budget-friendly. Don't miss this limited-time offer!",
      },
      {
        image:
          "https://img.freepik.com/free-vector/super-sale-horizontal-banner_52683-59532.jpg",
        title:
          "Vegetable Bonanza: Up to 70% off on a Variety of Fresh Veggies!",
        content:
          "Embark on a health-conscious journey with our farm-fresh vegetables at unbelievable discounts of up to 70%. We bring you the best of nature's bounty to make your meals wholesome and your pocket happy. Hurry and grab these amazing deals to fill your pantry with goodness!",
      },
      {
        image:
          "https://img.freepik.com/free-psd/special-deal-super-offer-upto-60-parcent-off-isolated-3d-render-with-editable-text_47987-15330.jpg",
        title: "Elevate Your Culinary Skills: 60% off on Premium Cookware!",
        content:
          "Upgrade your kitchen arsenal and elevate your cooking game with top-quality utensils and cookware, now at an unbeatable 60% discount. Experience the joy of effortless cooking with our durable and efficient range of kitchen tools. Hurry, the stock is limited, and this offer! ",
      },
    ];
    this.cardsGenerated = true;
  }
  open() {
    console.log("invoked modal");
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.content = "smapleContent";
    modalRef.componentInstance.imageLink = "sampleImageLink";
  }
}
@Component({
  selector: "ngbd-modal-content",
  styleUrls: ["./offers.component.scss"],
  template: `
    <div class="modal-body">
      <div class="row">
        <div class="col-lg-10">
          <h5
            class="modal-title"
            id="socialModalLabel"
            style="color: white; margin-bottom: 15px; font-size: 15px"
          >
            Share on Social Media
          </h5>
        </div>
        <div class="col-lg-2">
          <button
            type="button"
            class="close"
            aria-label="Close"
            (click)="activeModal.dismiss('Cross click')"
          >
            <span aria-hidden="true" style="color:white">&times;</span>
          </button>
        </div>
      </div>
      <div class="share-icons">
        <div class="share-icon" (click)="toggleIcon('facebook')">
          <i class="fab fa-facebook"></i>
        </div>

        <div class="share-icon" (click)="toggleIcon('twitter')">
          <i class="fab fa-twitter"></i>
        </div>

        <div class="share-icon" (click)="toggleIcon('instagram')">
          <i class="fab fa-instagram"></i>
        </div>

        <div class="share-icon" (click)="toggleIcon('googleads')">
          <i class="fab fa-google"></i>
        </div>
      </div>
      <div class="d-flex justify-content-end" style="padding:5px">
        <button
          type="button"
          class="btn custom-button"
          (click)="activeModal.close('Close click')"
          height="5px"
        >
          Share
        </button>
      </div>
    </div>
  `,
})
export class NgbdModalContent {
  @Input() imageLink: string;
  @Input() content: string;
  selectedIcons: { [key: string]: boolean } = {};

  constructor(public activeModal: NgbActiveModal) {
    this.selectedIcons = {
      facebook: false,
      twitter: false,
      instagram: false,
    };
  }

  toggleIcon(icon: string) {
    console.log("toggleicon");
    this.selectedIcons[icon] = !this.selectedIcons[icon];
  }
}

// [ngClass]="{ 'selected': selectedIcons['facebook'] }"
