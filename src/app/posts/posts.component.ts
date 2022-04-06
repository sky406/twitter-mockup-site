import { Component, Input, OnInit } from '@angular/core';
import { tweet } from './interfaces/tweet/tweet.interface';
import { shorten } from './interfaces/tweet/rtstringify';
import { generate_tweet } from './interfaces/tweet/rtstringify';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  tweets:tweet[] = [
    generate_tweet(),
    generate_tweet(),
    generate_tweet("wicktweets",undefined,'Hello nerds',undefined,true,69,undefined,false,false,new Date(50000),6900),
    generate_tweet("chad",'https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU0ODc4NDQ5OTM5MzkyMTkz/gettyimages-931925994-square.jpg',"test tweet",["https://pyxis.nymag.com/v1/imgs/bc9/0a4/6b4606e999eaa3460cfa3035e33e3dc8db-chadwick-boseman-931925976.rsquare.w700.jpg"],
    true,1290000,undefined,false,false,new Date(1649034105000),2700),
    generate_tweet()

  ]
  constructor(){}

  short(num:number)
  {
    return shorten(num)
  }

  timedif(tweet:tweet,limit:number = 3):string
  {
    let curtime = new Date
    let tweettime =tweet.timeposted
    let ydif = curtime.getFullYear()-tweettime.getFullYear()
    let mdif = curtime.getMonth()-tweettime.getMonth()
    let ddif = curtime.getDate()-tweettime.getDate()
    let hdif = curtime.getHours()-tweettime.getHours()
    let mindif = curtime.getMinutes()-tweettime.getMinutes()
    let sdif = curtime.getSeconds()-tweettime.getSeconds()
    if(mdif == 0 && ydif == 0)
    {
      if(ddif > 0)return `${ddif}d`;
      else if(hdif > 0) return `${hdif}h`;
      else if(mindif > 0) return `${mindif}m`;
      else if(sdif > 0) return `${sdif}s`;
      else return 'now';
    }
    // if (tweet.timeposted.getFullYear() == curtime.getFullYear()
    // && tweet.timeposted.getMonth() == curtime.getMonth()
    // &&curtime.getDate() - tweet.timeposted.getDate() <= limit)
    // {
    //   let postdate = tweet.timeposted.getDate()
    //   let curdate = curtime.getDate()
    //   let posthour = tweet.timeposted.getHours()
    //   let curhour = curtime.getHours()
    //   let postsec = tweet.timeposted.getSeconds()
    //   let cursec = curtime.getSeconds()
    //   let postmin = tweet.timeposted.getMinutes()
    //   let curmin = curtime.getMinutes()
    //   if(postdate == curdate)
    //   {
    //     if(posthour!=curhour)
    //     {
    //       return (curhour-posthour).toString()+"h"
    //     }
    //     else
    //     {
    //       if(curmin-postmin > 0)
    //       {
    //       return (curmin-postmin).toString() + "m"
    //       }
    //       else
    //       {
    //         if(cursec-postsec != 0)
    //         {
    //           return `${(cursec - postsec).toString()}s`
    //         }
    //         else return "now";
    //       }
    //     }
    //   }
    //   else
    //   {
    //     return (curdate - postdate).toString() +"d"
    //   }
    // }
    else
    {
      return `${tweet.timeposted.getDate()}/${tweet.timeposted.getMonth()}/${tweet.timeposted.getFullYear()}`
    }
  }



  ngOnInit(): void {
  }

}
