import { Component, Input, OnInit } from '@angular/core';
import { shorten } from '../posts/interfaces/tweet/rtstringify';

@Component({
  selector: 'app-like-butt',
  templateUrl: './like-butt.component.html',
  styleUrls: ['./like-butt.component.scss']
})
export class LikeButtComponent implements OnInit {
  @Input() totallikes:any = 0
  //this is basically a parameter for the like button componont that cna be added like
  // <like [totallikes] = 12><likes
  isLiked = false
  constructor() { }
  like()
  {
    this.isLiked = !this.isLiked
  }
  ngOnInit(): void {
  }

}
