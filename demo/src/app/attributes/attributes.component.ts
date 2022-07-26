import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {
  Data: any = [];

  constructor() { }

  ngOnInit(): void {
    this.Data = [
      {
        'NFT_Name': 'Angular',
        'Symbol': 'Angular Red Background',
      },
      {
        'NFT_Name': 'Angular',
        'Symbol': 'Angular Red Background',
      },
      {
        'NFT_Name': 'Angular',
        'Symbol': 'Angular Red Background',
      },
      {
        'NFT_Name': 'Angular',
        'Symbol': 'Angular Red Background',
      },
      {
        'NFT_Name': 'Angular',
        'Symbol': 'Angular Red Background',
      },
      {
        'NFT_Name': 'Angular',
        'Symbol': 'Angular Red Background',
      },
      {
        'NFT_Name': 'Angular',
        'Symbol': 'Angular Red Background',
      },
      {
        'NFT_Name': 'Angular',
        'Symbol': 'Angular Red Background',
      },
      {
        'NFT_Name': 'Angular',
        'Symbol': 'Angular Red Background',
      },
      {
        'NFT_Name': 'Angular',
        'Symbol': 'Angular Red Background',
      },
    ]
  }

}
