import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.css' ]
})
export class ListComponent  {
  @Input() list:any;
}
