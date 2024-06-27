export const VideoCard = (props: any) => {
  return (
    <div className='flex flex-col m-4'>
        <div className=''>
            <img className='w-[300px] h-[180px]' src={props.thumbnail} alt="thumbnail" />
        </div>
        <div className='flex py-2 items-center'>
            <div className='mr-4'>
                <img className='rounded-full' src={props.channelLogo} alt="channel logo" />
            </div>
            <div className='items-center'>
                <div className='text-[15px] pt-0'>{props.title}</div>
                <div className='text-[13px] text-gray-400'>{props.channelName}</div>
                <div className='text-[12px] text-gray-400'>{props.views} . {props.timestamp}</div>
            </div>
        </div>
    </div>
  )
}