
import { BsThreeDotsVertical } from 'react-icons/bs'

export default function ProfileTag() {
  return (
    <div className=' flex  items-center gap-2 border w-fit rounded-md px-2 py-1 shadow-md'>
        <div className='relative'>
            <img className='w-12 h-12 rounded-md object-cover aspect-square  ' src="https://i.pinimg.com/236x/6b/cf/20/6bcf206b4b9db927e32ed90fed297351.jpg"/>
            <div className='w-2 h-2 rounded-full bg-blue-500 absolute bottom-0 right-0 border border-white'> </div>
        </div>
        <div className='w-full flex flex-col '>
            <p>Luffy taro </p>
            <p>lufytaro@zoro.com</p>
        </div>
        <BsThreeDotsVertical />
    </div>
  )
}
