import {Component, Input} from '@angular/core';
import {Message} from '../../../services/dialogs.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input() messagesData!: Message[]

}
