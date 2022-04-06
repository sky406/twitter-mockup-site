import { Time } from "@angular/common";

export interface tweet
{
  postername:string,
  posterimg:string,
  caption:string,
  images:string[],
  isliked:boolean,
  likes:number,
  retweets:number,
  comments:tweet[],
  iscomment:boolean,
  isquote:boolean,
  timeposted:Date,
  mention:string,

}
