import React from 'react'
import Blog from './Blog/Blog'
import activityImage from "../../../../assets/ft-members copy.jpeg"
import "./styles.css"

const Blogs = () => {
  const blogData = [
    {
      title: "Hommey Tuesday with Food Town",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus orci, porta a elit eu, eleifend mollis tellus...",
      createdAt: "Thu, Jul 14th 2022",
      likes: 1,
      comments: 2,
      image: {activityImage},
    },
    {
      title: "Hommey Tuesday with Food Town",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus orci, porta a elit eu, eleifend mollis tellus...",
      createdAt: "Thu, Jul 14th 2022",
      likes: 1,
      comments: 2,
      image: {activityImage},
    },
    {
      title: "Hommey Tuesday with Food Town",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus orci, porta a elit eu, eleifend mollis tellus...",
      createdAt: "Thu, Jul 14th 2022",
      likes: 1,
      comments: 2,
      image: {activityImage},
    },
    {
      title: "Hommey Tuesday with Food Town",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus orci, porta a elit eu, eleifend mollis tellus...",
      createdAt: "Thu, Jul 14th 2022",
      likes: 1,
      comments: 2,
      image: {activityImage},
    },
    {
      title: "Hommey Tuesday with Food Town",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus orci, porta a elit eu, eleifend mollis tellus...",
      createdAt: "Thu, Jul 14th 2022",
      likes: 1,
      comments: 2,
      image: {activityImage},
    },
    {
      title: "Hommey Tuesday with Food Town",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus orci, porta a elit eu, eleifend mollis tellus...",
      createdAt: "Thu, Jul 14th 2022",
      likes: 1,
      comments: 2,
      image: {activityImage},
    }
  ]

  return (
    <div className='blogs-container container' id='blogs'>
      <p className='blogs-title'>Một số bài viết mà có thể bạn quan tâm</p>
      <div className='blog-container'>
          {
            blogData.map((item, i) => <Blog key={i} data={item}/>)
          }
      </div>  
    </div>
  )
}

export default Blogs