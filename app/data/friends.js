var friends = {
  friendsArray:[
    {
      "name":"Damon Dash",
      "photo":"https://cdn.pixabay.com/photo/2017/12/31/15/56/portrait-3052641_960_720.jpg",
      "scores":[
         5,
         5,
         5,
         5,
         5,
         5,
         5,
         5,
         5,
         5
          ]
    }
  ],
  addFriend: function(friend){
    this.friendsArray.push(friend);
  }
}



module.exports = friends;