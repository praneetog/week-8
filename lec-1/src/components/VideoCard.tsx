export const VideoCard = (props: any) => {
  return (
    <div className='flex flex-col'>
        <div className=''>
            <img className='rounded-2xl' src={props.thumbnail} alt="thumbnail" />
        </div>
        <div className='flex flex-col py-2 items-top w-full'>
            <div className='flex items-center gap-4 md:gap-3 lg:gap-2'>
                <img className='rounded-full h-[50px] w-[50px] md:h-[40px] md:w-[40px] lg:h-[35px] lg:w-[35px]' src={props.channelLogo} alt="channel logo" />
                <div className='text-[25px] md:text-[20px] lg:text-[18px] pt-0'>{props.title}</div>
            </div>
            <div className='items-center text-[18px] md:text-[14px] lg:text-[14px] ml-[50px] pl-4 md:ml-[40px] md:pl-3 lg:ml-[35px] lg:pl-2'>
                <div className='text-gray-400'>{props.channelName}</div>
                <div className='text-gray-400'>{props.views} . {props.timestamp}</div>
            </div>
        </div>
    </div>
  )
}