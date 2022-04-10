import React, { useState, useEffect } from 'react';

 const idLikes = ({ user }) => (
    Object.values(user.liked_users).map(user => user.liking_user_id)
  );



  const UserLike = ({ user }) => {
    const [curr, userLike] = useState(0);
    // console.log(
    //   Object.values(user[curr].liked_users).map(user => user.liking_user_id)
    // )
    const idLikesArray = () => (
      Object.values(user[curr].liked_users).map(user => user.liking_user_id)
    ) 

    const findIdUser = () => (
      idLikesArray().forEach(element => 
              user.findIndex(id => element === id.user_id))
    );
    
    console.log('hey')
    console.log(findIdUser())
    console.log()

    console.log(user)
    return( 
      <div className="card m-1 p-2">
      <div className="card-body">
        <div className="card-title">{ user[user.findIndex(id => id.user_id === idLikesArray()[0])].name}</div>
        <div className="card-subtitle"> { user[user.findIndex(id => id.user_id === idLikesArray()[0])].school} </div>
        <div className="card-text"> { user[user.findIndex(id => id.user_id === idLikesArray()[0])].favoriteEntrepreneur} </div>
      </div>
    </div>
    )
};

export default UserLike;