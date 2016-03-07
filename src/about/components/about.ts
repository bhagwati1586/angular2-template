import {Component} from 'angular2/core';
//import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {NameList} from '../../shared/services/name_list';

@Component({
  selector: 'about',
  moduleId: module.id,
  templateUrl: './about.html',
  styleUrls: ['./about.css']
  //directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class AboutCmp {
  newName: string;
  empName : string;
  empAge : string;
  error : boolean;
  edit : boolean;
  index : number;
  errorMsg : string;
  constructor(public list: NameList) {}
 /*
 * @param newname  any text as input.
 * @returns return false to prevent default form submit behavior to refresh the page.
 */

  addName(): boolean {
    if(this.newName) {
      this.list.add(this.newName);
      this.newName = '';
      this.error = false;
    }else { this.errorMsg = 'Enter Scientist Name'; this.error = true;}
    return false;
  }


  deleteName(i): boolean {
    this.error = false;
    this.errorMsg = '';
    this.list.delete(i);
    this.newName = '';
    return false;
  }

  addEmp(): boolean {
    if(this.empName) {
      this.list.addEmp(this.empName, this.empAge);
      this.empName = '';
      this.empAge='';
      this.error = false;
    }else {
      this.errorMsg = 'Enter Scientist Name';
      this.error = true;
    }
    return false;
  }

  deleteEmp(i): boolean {
    this.error = false;
    this.errorMsg = '';
    this.list.deleteEmp(i);
    this.empName = '';
    return false;
  }

  editEmp(i) : boolean {
    var n = this.list.getEmp();
    this.empName = n[i].firstName;
    this.empAge = n[i].age;
    this.edit = true;
    this.index = i;
    return false;

  }
  updateEmp(i):boolean {
    this.list.updateEmp(i,this.empName,this.empAge);
    this.empName = '';
    this.empAge='';
    this.error = true;
    this.edit = false;
    this.errorMsg ='Record Updated';
    return false;
  }
}
