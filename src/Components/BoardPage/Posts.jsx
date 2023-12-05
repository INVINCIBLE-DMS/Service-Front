import React from "react";
import { Post } from "./Post";

export const Posts = React.memo(({posts}) => {
  return <>
    {
      posts
      ? posts.reverse().map(i => {
        return <Post 
          title={i.title} 
          img={i.feedImgUrl && i.feedImgUrl}
          content={i.content.length > 10 ? i.content.substring(0, 10)+"..." : i.content}
          metaData={{ likes: i.likeCount, id: i.id, liked: i.liked }}
          key={i.id}
          profile={{ img: i.profileImgUrl ? i.profileImgUrl : "/imgs/icons/DefaultProfile.svg", name: i.username, date: i.createdAt.split("T")[0]}}
        />
      })
      : <h5>불러오고 있습니다</h5>}
  </>
});

