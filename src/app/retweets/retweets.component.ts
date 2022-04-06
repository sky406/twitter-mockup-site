import { Component, Input, OnInit } from '@angular/core';
import { shorten } from '../posts/interfaces/tweet/rtstringify';
@Component({
  selector: 'rt',
  templateUrl: './retweets.component.html',
  styleUrls: ['./retweets.component.scss']
})
export class RetweetsComponent implements OnInit {
  @Input() retweets:any = 0
  rt = false
  constructor() { }
  retweet()
  {
    this.rt = !this.rt
    if(this.rt) this.retweets+=1;
    else this.retweets-=1;
  }
  short()
  {
    return shorten(this.retweets)
  }
  ngOnInit(): void {
  }
  // TODO FIND AWAY TO APPLY THE RETWEET NUMBE TO THE Parent tweet

}
