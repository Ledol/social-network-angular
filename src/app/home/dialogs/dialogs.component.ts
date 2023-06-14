import {Component, OnInit} from '@angular/core';
import {Dialog, DialogsService, Message} from '../../services/dialogs.service';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.css']
})
export class DialogsComponent implements OnInit{

  dialogsData:Dialog[] = []
  messagesData:Message[] = []

  newMessage=''
  constructor(private dialogsService:DialogsService) {
  }

  ngOnInit(): void {
    this.dialogsData = this.dialogsService.getDialogs()
    this.messagesData = this.dialogsService.getMessages()
  }

  addMessage() {
    this.dialogsService.addMessage(this.newMessage)
    this.newMessage = ''
  }
}
