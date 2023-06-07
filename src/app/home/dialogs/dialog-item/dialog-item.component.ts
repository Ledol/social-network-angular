import {Component, Input} from '@angular/core';
import {Dialog} from '../../../services/dialogs.service';

@Component({
  selector: 'app-dialog-item',
  templateUrl: './dialog-item.component.html',
  styleUrls: ['./dialog-item.component.css']
})
export class DialogItemComponent {

  @Input() dialogsData!: Dialog[]

}
