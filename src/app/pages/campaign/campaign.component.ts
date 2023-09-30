import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {

  constructor() { }

  cards: any[] =[
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
    }
  ];;

  repost(){
    console.log("repost");
  }
  ngOnInit(): void {
  }
  

}
