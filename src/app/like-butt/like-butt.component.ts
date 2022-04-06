import { Component, Input, OnInit } from '@angular/core';
import { shorten } from '../posts/interfaces/tweet/rtstringify';

@Component({
  selector: 'like-butt',
  templateUrl: './like-butt.component.html',
  styleUrls: ['./like-butt.component.scss']
})
export class LikeButtComponent implements OnInit {
  @Input() totallikes:any = 0
  @Input() isLiked:boolean = false
  //this is basically a parameter for the like button componont that cna be added like
  // <like [totallikes] = '12'><likes
  constructor() { }
  like()
  {
    this.isLiked = !this.isLiked
    if(this.isLiked)this.totallikes+=1;
    else this.totallikes -= 1;
  }
  ngOnInit(): void {
  }
  short()
  {
    return shorten(this.totallikes)
  }

}
