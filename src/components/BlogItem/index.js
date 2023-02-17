import './index.css'

const BlogItem = props => {
  const {details} = props
  const {id, title, description, publishedDate} = details
  return (
    <li className="eachItem">
      <div className="upper">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
    </li>
  )
}

export default BlogItem
