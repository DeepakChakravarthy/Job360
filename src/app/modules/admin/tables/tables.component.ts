import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent {
    /* An empty array that is responsible
    to add a division */
    public items = [];

    /* A two-way binding performed which
       pushes text on division */
    public newTask;


    /* When input is empty, it will
       not create a new division */
    public addToList() {
        if (this.newTask == '') {
        }
        else {
            this.items.push(this.newTask);
            this.newTask = '';
        }
    }

    /* This function takes to input the
       task, that has to be deleted*/
    public deleteTask(index) {
        this.items.splice(index, 1);
    }
}

