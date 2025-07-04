import './review.css'
const Review = (props) => {
  return (
    <div className="review-card">
      <h3 className="review-name">{props.name}</h3>
      <p className="review-text">
        {props.say}
      </p>
      <div className="review-stars">
        ⭐⭐⭐⭐⭐
      </div>
    </div>
  )
}

export default Review