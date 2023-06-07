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
}
