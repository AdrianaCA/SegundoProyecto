import { Component } from '@angular/core';
import {CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Tarea } from '../../models/Tarea.model';
import { KanbanCard } from '../kanban-card/kanban-card';
import {DialogModule} from '@angular/cdk/dialog';

export interface DialogData {
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-kanban-board',
  imports: [DragDropModule, DialogModule, KanbanCard],
  templateUrl: './kanban-board.html',
  styleUrl: './kanban-board.css'
})
export class KanbanBoard {

  todo:Tarea[] = [];
  doing:Tarea[] = [];
  done:Tarea[] = [];

  drop(event: CdkDragDrop<Tarea[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  anadirTarea() {

  }

}
