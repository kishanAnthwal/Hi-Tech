
import './error.css'
import { Link } from 'react-router-dom'

export const ErrorPage = () => {
    return (
        <div className="error_page flex_box">
            <div className="error_message flex_box">
                <h3>404</h3>
                <p>Page Not Found</p>
                <Link to="/">Go Back</Link>
            </div>
            <div className="error_img">
            <img src="/images/error_img.png" alt="" />
            </div>

        </div>
    )
}
