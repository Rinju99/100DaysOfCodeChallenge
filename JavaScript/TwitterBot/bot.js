// This statement is equivalent to import statement..
var Twit = require("twit");
var fs = require("fs");

var T = new Twit({
  onsumer_key =  "lHJtDfuIlCiuByV4mTBZRTq6k"
consumer_secret= "FfmKY8FGSFz456DvzLMtOF72IDMek8OArp4hxTsXC9dDXHTsml"
access_token= "1348145669748514817-CACneM5ygXx0tN77JlRxnYmBIhFL0W"
access_token_secret= "phITLP6Q7dxSBlVSbKeljn8O2YUKzHMp9kBlTzjUY95ha"
});

// function MyBot(msg) {
//   var tweet = {
//     status: msg,
//   };
//   T.post("statuses/update", tweet, writeTweet);

//   function writeTweet(err, data, response) {
//     if (err) {
//       console.log("error occured!");
//     } else {
//       console.log("success!");
//       console.log(data);
//     }
//   }
// }
// MyBot();
//setInterval(MyBot, 1000 * 20);

// Writes a thank you status whenever someone follows it..
// var stream = new t.stream("user");
// stream.on("follow", startedFollowing);
// function startedFollowing(event) {
//   const screen_name = event.source.screen_name;
//   const msg = "Thank you " + "@" + screen_name
//               + " for following me!";
//   MyBot(msg);
// }

// Get the followers with user name @ReiGn54527782
// T.get(
//   "followers/ids",
//   { screen_name: "@ReiGn54527782" },
//   function (err, data, response) {
//     console.log(data);
//   }
// );

// post a tweet with media...
// const fileName = "assets/trunks2.png";
// const content = fs.readFileSync(fileName, { encoding: "base64" });
// // first we must post the media to Twitter
// T.post("media/upload", { media_data: content }, tweeted);
// function tweeted(err, data, response) {
//   var id = data.media_id_string;
//   var params = {
//     status: "Trunksss!",
//     media_ids: [id],
//   };
//   T.post("statuses/update", params, function (err, data, response) {
//     if (err) {
//       console.log("something went wrong!");
//     } else {
//       console.log("successful!");
//     }
//   });
// }

var stream = T.stream("statuses/filter", { track: "motivation" });

stream.on("tweet", function (tweet) {
  console.log(tweet);
});
