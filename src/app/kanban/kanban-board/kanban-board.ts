import { Component } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban-board',
  imports: [DragDropModule],
  templateUrl: './kanban-board.html',
  styleUrl: './kanban-board.css'
})
export class KanbanBoard {

}
