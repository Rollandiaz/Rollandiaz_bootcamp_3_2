import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  status:boolean = false;
  
    constructor() {
  
    }
  
    ngOnInit() {
  
    }
  
    public roomList: Object[] = [
      {'id' : '1', 'name' : 'A', 'Unit_Area' : '75', 'status' : '0', 'price' : '750', 'Unit_img' : 'path'},
      {'id' : '2', 'name' : 'B', 'Unit_Area' : '50', 'status' : '1', 'price' : '500', 'Unit_img' : 'path'},
      {'id' : '3', 'name' : 'C', 'Unit_Area' : '55', 'status' : '0', 'price' : '550', 'Unit_img' : 'path'},
      {'id' : '4', 'name' : 'D', 'Unit_Area' : '65', 'status' : '0', 'price' : '650', 'Unit_img' : 'path'},
      {'id' : '5', 'name' : 'E', 'Unit_Area' : '70', 'status' : '1', 'price' : '700', 'Unit_img' : 'path'},
    ];
  
    BookUnit(id) : void {
      for (var i = 0; i < this.roomList.length; i++) {
        if (this.roomList[i]['name'] == id) {
          this.roomList[i]['status'] = 1;
          break;
        }
      }
    }
  }

  


