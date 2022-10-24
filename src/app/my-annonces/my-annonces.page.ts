import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-annonces.page.html',
  styleUrls: ['./my-annonces.page.scss'],
})
export class MyCartPage implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  // cancel() {
  //   this.modal.dismiss(null, 'cancel');
  // }

  // confirm() {
  //   this.modal.dismiss(this.name, 'confirm');
  // }

  // onWillDismiss(event: Event) {
  //   const ev = event as CustomEvent<OverlayEventDetail<string>>;
  //   if (ev.detail.role === 'confirm') {
  //     this.message = `Hello, ${ev.detail.data}!`;
  //   }
  // }
}
