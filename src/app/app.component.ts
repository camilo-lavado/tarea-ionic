import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonCheckbox,
  IonInput,
  IonTextarea,
  IonButton,
  IonIcon,
  IonLabel,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonAccordionGroup,
  IonAccordion
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { trashOutline, checkmarkOutline, addCircleOutline } from 'ionicons/icons';

export interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
  description?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonCheckbox,
    IonInput,
    IonTextarea,
    IonButton,
    IonIcon,
    IonLabel,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonAccordionGroup,
    IonAccordion
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newTodoTitle = '';
  newTodoDescription = '';

  todos: TodoItem[] = [
    {
      id: 1,
      title: 'Ir a comprar pan',
      completed: true,
      description: 'Comprar hallulas y marraquetas.'
    },
    {
      id: 2,
      title: 'Comprar cosas para el pan',
      completed: false,
      description: 'Necesito comprar leche, huevos y cecinas.'
    }
  ];

  constructor() {
    addIcons({ trashOutline, checkmarkOutline, addCircleOutline });
  }

  addTodo(): void {
    const trimmedTitle = this.newTodoTitle.trim();
    if (!trimmedTitle) return;

    this.todos.push({
      id: Date.now(),
      title: trimmedTitle,
      completed: false,
      description: this.newTodoDescription.trim() || undefined
    });

    this.newTodoTitle = '';
    this.newTodoDescription = '';
  }

  deleteTodo(id: number, slidingItem?: IonItemSliding): void {
    if (slidingItem) slidingItem.close();
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  markAsCompleted(id: number, slidingItem?: IonItemSliding): void {
    if (slidingItem) slidingItem.close();
    const item = this.todos.find(todo => todo.id === id);
    if (item) {
      item.completed = true;
    }
  }
}