import React, {useState} from 'react'
import "./css/Button.css"

interface MyButtonProps {
    text?: string | number;
    onClick?: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({text}) => {

  const [count,setcount] = useState(0);

  return (
    <div>
    <p>you clicked the button {count} times</p>
    <button onClick ={() => setcount(count + 1)} className='button'>{text}</button>
    </div>
  )
}

export default MyButton