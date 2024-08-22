import { Link } from 'react-router-dom'

export default function Root() {
    return (
        <div>
            <p>
            hello there
            </p>
            <Link to={`app`}>go to app</Link>
        </div>
    )
}