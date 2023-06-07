import {Component, OnInit} from '@angular/core';
import {Posts, ProfileService} from '../../../services/profile.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit{
  postsData:Posts[] = []

  constructor(private pialogsService:ProfileService) {
  }
  ngOnInit(): void {
    this.postsData = this.pialogsService.postsData$
  }

}
