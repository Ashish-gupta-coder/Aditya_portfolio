import React from 'react'
import ClickSpark from '../Animated_files/ClickSpark'

function Spark({children}) {
  return (
    <div>
        <ClickSpark
           sparkColor='#fff'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
          >
{children}
          </ClickSpark>
    </div>
  )
}

export default Spark