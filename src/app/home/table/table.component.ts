import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTable } from '@angular/material';
import { DialogBoxComponent } from '../../home/dialog-box/dialog-box.component';
import { INITIAL_EVENTS, createEventId } from '../home/event-utils';

export interface UsersData {
  id: string;
  name: string;
  email: string;
  team: string;
  dataStart: string;
  dataEnd: string;

}

const ELEMENT_DATA: UsersData[] = [
  { id: '1', name: 'Test1', email: 'test1', team: 'Test', dataStart: '2020-07-31', dataEnd: '2020-08-05' },
  { id: '2', name: 'Test2', email: 'test2', team: 'Test', dataStart: '2020-07-31', dataEnd: '2020-08-05' },
  { id: '3', name: 'Test3', email: 'test3', team: 'Test', dataStart: '2020-07-31', dataEnd: '2020-08-05' }
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  ngOnInit(): void {
  }
  
  // displayedColumns: string[] = ['id', 'name', 'email', 'team', 'dataStart', 'dataEnd', 'action'];
  displayedColumns: string[] = ['id', 'title', 'start', 'action'];
  dataSource = INITIAL_EVENTS;

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(public dialog: MatDialog) { }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '500px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add') {
        this.addRowData(result.data);
      } else if (result.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj) {
    var d = new Date();
    this.dataSource.push({
      // id: d.getTime(),
      // name: row_obj.name,
      // email: row_obj.email,
      // team: row_obj.team,
      // dataStart: row_obj.dataStart,
      // dataEnd: row_obj.dataEnd
      id: row_obj.id,
      title: row_obj.title,
      email: row_obj.email,
      start: row_obj.start,
      // dataStart: row_obj.dataStart,
      // dataEnd: row_obj.dataEnd
    });
    this.table.renderRows();

  }
  updateRowData(row_obj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      // if (value.id == row_obj.id) {
      //   value.name = row_obj.name;
      //   value.email = row_obj.email;
      //   value.team = row_obj.team;
      //   value.dataStart = row_obj.dataStart;
      //   value.dataEnd = row_obj.dataEnd;
      // }
      if (value.id == row_obj.id) {
        value.title = row_obj.title;
        value.start = row_obj.start;
        // value.team = row_obj.team;
        // value.dataStart = row_obj.dataStart;
        // value.dataEnd = row_obj.dataEnd;
      }
      return true;
    });
  }
  deleteRowData(row_obj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      return value.id != row_obj.id;
    });
  }


}