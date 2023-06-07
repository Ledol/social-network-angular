import {Component, Input} from '@angular/core';
import {Posts} from '../../../../services/profile.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input() postsData!: Posts[]

}
