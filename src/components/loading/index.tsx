import  {FC} from 'react'
import { ClipLoader } from 'react-spinners'
import './loading.styles.scss'


const Loading: FC = () => {
  return (
    <div className='loading__container'>
        <ClipLoader
          color="green"
          loading={true}
          size={48}
          aria-label="loading spinner"
          data-testid="loader"
        />

    </div>
  )
}

export default Loading