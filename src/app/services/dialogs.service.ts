import {Injectable} from '@angular/core';
export interface Dialog {
  id: number
  name: string
}
export interface Message {
  id: number
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  dialogsData$:Dialog[] = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Kate'},
    {id: 3, name: 'Vadim'},
    {id: 4, name: 'Vlad'},
  ]

  messagesData$:Message[] = [
    {id: 1, message: 'Hey Yo'},
    {id: 2, message: 'Hello, How are you'},
    {id: 3, message: 'Where are you from'},
    {id: 4, message: 'YO'}
  ]

  constructor() {
  }
}
