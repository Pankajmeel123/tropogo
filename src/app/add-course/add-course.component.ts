import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

	locationdrop:any;
	languagedrop:any;
	dropdownList:any;
	selectedItems:any;
  constructor() { }

  ngOnInit(): void {
  	this.dropdownList = [
      {"id":1,"itemName":"India"},
      {"id":2,"itemName":"Singapore"},
      {"id":3,"itemName":"Australia"},
      {"id":4,"itemName":"Canada"},
      {"id":5,"itemName":"South Korea"},
      {"id":6,"itemName":"Germany"},
      {"id":7,"itemName":"France"},
      {"id":8,"itemName":"Russia"},
      {"id":9,"itemName":"Italy"},
      {"id":10,"itemName":"Sweden"}
    ];
  	this.locationdrop = { 
      singleSelection: true, 
      text:"Select Countries",
      selectAllText:'Select All',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: false
    };
    this.languagedrop = { 
      singleSelection: false, 
      text:"Select Countries",
      selectAllText:'Select All',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: false
    };
    this.selectedItems = [
                                {"id":2,"itemName":"Singapore"},
                                {"id":3,"itemName":"Australia"},
                                {"id":4,"itemName":"Canada"},
                                {"id":5,"itemName":"South Korea"}
                            ];
  }

  onItemSelect(item:any){
	    console.log(item);
	    console.log(this.selectedItems);
	}
	OnItemDeSelect(item:any){
	    console.log(item);
	    console.log(this.selectedItems);
	}
	onSelectAll(items: any){
	    console.log(items);
	}
	onDeSelectAll(items: any){
	    console.log(items);
	}

}
