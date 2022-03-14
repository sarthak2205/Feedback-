import Card from "../Components/shared/Card"
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <div>
      <Card>
        <div className="about">
          <h1>About this project</h1>
          <p>This is React App tp leave feedback for a product or service</p>
          <p>Version 1.0.0</p>

          <p>
            <Link to='/'> Back to Home</Link>
          </p>
        </div>
      </Card>
    </div>
  )
}

export default AboutPage