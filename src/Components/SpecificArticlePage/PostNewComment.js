import React from 'react'

function PostNewComment() {
  return (
    <div>
         <h2 className="specific-article-headers"> Comments:</h2>
         <h4>PostNewComment</h4>
        <form className='comment-form'>
            <input type="text"/>
            <button>Submit Comment</button>
        </form>
    </div>
  )
}

export default PostNewComment