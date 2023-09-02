import  {FC, useEffect} from 'react'
import { baseUrl } from 'config/api'
import axios from 'axios'


const registrationUrl = `${baseUrl}/registration`
console.log(registrationUrl)
const token = localStorage.getItem('token')

type Props = {}

const TestPage:FC<Props> = (props) => {

    const getResponse = async () => {
        try {

            const response = await axios.post(registrationUrl,
                'hello world',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
                 )
            const data =  await response.data
            console.log(data)
        } catch (error: any) { 
            console.log(error)
        }
    }

    useEffect(() => {
        getResponse()
    }, [])
    

  return (
    <div>
        TestPage
        </div>
  )
}

export default TestPage