import { tweet } from "./tweet.interface";
// this is just for ease of testing
export function generate_tweet(username:string ='tweeter',
                              userimg:string = '',
                              caption:string = 'lorem ipsum',
                              images:string[] = [],
                              isliked:boolean = false,
                              retweets:number = Math.round(Math.random()*200),
                              comments:tweet[] = [],
                              iscomment:boolean = false,
                              isquote:boolean = false,
                              timeposted:Date = new Date,
                              likes:number = Math.round(Math.random()*5000),
                              mention:string = 'user_name'):tweet
{
  if(images.length > 4) images = images.slice(3);
  return{
    postername:username,
    posterimg:userimg,
    caption:caption,
    images:images,
    isliked:isliked,
    retweets:retweets,
    comments:comments,
    iscomment:iscomment,
    isquote:isquote,
    likes:likes,
    timeposted:timeposted,
    mention:'@'+mention
  }
}

export function shorten(rt:number):string
{
  function isclean(num:number,rounder:number)
  {
    return num%rounder == 0
  }
  if(rt==0)return'';
  else if (rt < 1000) {
    return rt.toString();
  }
  else if (rt >= 1000 && rt<1000000) {
    let shortened = rt/1000
    if(isclean(rt,1000))
    {
      return shortened.toString() + "k"
    }
    else{
      return shortened.toFixed(1) + 'K';
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
    return shortened.toFixed(1) + 'M';
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
