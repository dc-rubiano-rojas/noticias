import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  categorias = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];

  constructor() { }

  ngOnInit(): void {
  }


}
