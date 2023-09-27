import {type Todo as TodoType} from './types/types'

type Props = TodoType
export const Todo: React.FC <Props> = ({ id, title, completed })=> {
  return (
        <div>
            <input className='toggle'
            type='checkbox'
            checked={completed}
            onChange={() => {}}
            />
            <label>{title}</label>
            <button className='destroy' onClick={() => {}}></button>
        </div>
  )
}
