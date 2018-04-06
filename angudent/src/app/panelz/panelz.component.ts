import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-panelz',
  templateUrl: './panelz.component.html',
  styleUrls: ['./panelz.component.css']
})
export class PanelzComponent implements OnInit {
  model = {
    left: true,
    middle: false,
    right: false
  };
  constructor() { }

  ngOnInit() {
  }

}
