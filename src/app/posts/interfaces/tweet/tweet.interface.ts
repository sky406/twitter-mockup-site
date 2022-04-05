import { Time } from "@angular/common";

export interface tweet
{
  postername:string,
  posterimg:string,
  caption:string,
  img0:string,
  img1:string,
  img2:string,
  img3:string,
  isliked:boolean,
  likes:number,
  retweets:number,
  comments:tweet[],
  iscomment:boolean,
  isquote:boolean,
  timeposted:Date,
}
