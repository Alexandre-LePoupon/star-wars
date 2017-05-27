import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() page: number = 0;
  // @Input() pageSuivante: String = null;
  // @Input() pagePrecedente: String = null;
  @Input() total: number = 0;
  @Output() pageChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  pagePrecedente() {
    this.pageChanged.emit(this.page - 1);
  }

  pageSuivante() {
    this.pageChanged.emit(this.page + 1);
  }

}
