import React, {FC} from 'react'
import { IStepperProps } from './stepper.types'


// Stepper Component
const Stepper: FC<IStepperProps> = (props) => {
    const {children} = props

  return (
    <div>
        {children}
    </div>
  )
}

export default Stepper