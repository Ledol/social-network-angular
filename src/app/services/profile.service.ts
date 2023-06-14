import {Injectable} from '@angular/core';


export interface Posts {
  id: number
  message: string
  likesCount: number
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  postsData$: Posts[] = [
    {id: 1, message: 'Hello, how are you', likesCount: 25},
    {id: 2, message: 'I\'\m fine, hanks!', likesCount: 0},
    {id: 3, message: 'Are you ready?', likesCount: 8}
]

  getPosts(): Posts[] {
    return this.postsData$
  }

  addPost( post: string ) {
    let newPost = {id: 4, message: post, likesCount: 0}
    this.postsData$.unshift(newPost)
  }

}
