import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit, OnChanges {

  @Input() order:any;
  sorder:any;
  @Output() closeDetailEvent=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.sorder=this.order;
    // console.log(this.sorder); 
  }

  closeDetails(){
    this.closeDetailEvent.emit(false);
  }

}
