import { useState } from 'react'

import Announcements from './Components/announcements/Announcements'
import Courses from './Components/courses/Courses'
import Profile from './Components/profile/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Profile/>
    </>
  )
}

export default App
