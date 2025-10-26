import { Component, Input } from '@angular/core';
import { Tarea } from '../../models/Tarea.model';

@Component({
  selector: 'app-kanban-card',
  imports: [],
  templateUrl: './kanban-card.html',
  styleUrl: './kanban-card.css'
})
export class KanbanCard {

  @Input() t!: Tarea;

}
