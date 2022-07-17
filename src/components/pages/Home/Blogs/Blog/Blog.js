import React from 'react'
import "./styles.css"

const Blog = (data) => {
    const {title, description, createdAt, likes, comments, image} = data.data;
    return (
        <div className="preview-blog-container">
            <img src={image.activityImage} alt="blog" className="blog-image" />
            <div className="blog-title">{title}</div>
            <div className="blog-description">{description}</div>
            <div className="blog-info">
                <div className="blog-create">{createdAt}</div>
                <div className="blog-react">
                    <div>{likes} Likes</div>
                    <div>{comments} Comments</div>
                </div>
            </div>
        </div>
    )
}

export default Blog