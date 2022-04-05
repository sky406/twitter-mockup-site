import { tweet } from "./tweet.interface";
// this is just for ease of testing
export function generate_tweet(username:string ='tweeter',
                              userimg:string = '',
                              caption:string = 'lorem ipsum',
                              img0:string = '',
                              img1:string = '',
                              img2:string = '',
                              img3:string ='',
                              isliked:boolean = false,
                              retweets:number = 0,
                              comments:tweet[] = [],
                              iscomment:boolean = false,
                              isquote:boolean = false,
                              timeposted:Date = new Date):tweet
{
  return{
    postername:username,
    posterimg:userimg,
    caption:caption,
    img0:img0,
    img1:img1,
    img2:img2,
    img3:img3,
    isliked:isliked,
    retweets:retweets,
    comments:comments,
    iscomment:iscomment,
    isquote:isquote,
    likes:(Math.round(Math.random()*5000)),
    timeposted:timeposted
  }
}

export function shorten(rt:number):string
{
  function isclean(num:number,rounder:number)
  {
    return num%rounder == 0
  }

  if (rt < 1000) {
    return rt.toString();
  }
  else if (rt >= 1000 && rt<1000000) {
    let shortened = rt/1000
    if(isclean(rt,1000))
    {
      return shortened.toString() + "k"
    }
    else{
      return shortened.toFixed(1).toString() + 'K';
    }

  }
  else if (rt >= 1000000) {
    let shortened = rt/1000000
    if(isclean(rt,1000000))
    {
      return shortened.toString() +"M"
    }
    else
    {
    return shortened.toFixed(1).toString() + 'M';
    }
  }
  else
  {
    return rt.toString();
  }
}



console.log(shorten(100))
console.log(shorten(9100))
console.log(shorten(10000))
console.log(shorten(2500700))

let testdate = new Date()

console.log(testdate.getMilliseconds())

console.log(testdate.getDay())
console.log(testdate.getFullYear())
console.log(testdate.getDate())
let testdate2 = new Date()
console.log(testdate2.getMilliseconds())
