import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    thumbnail: "https://shorturl.at/zqlkk",
    channelLogo: "https://shorturl.at/ULAhW",
    title: "TailwindCSS for Beginners",
    channelName: "praneetog",
    views: "100K",
    timestamp: "2 days ago"
},{
    thumbnail: "https://shorturl.at/zqlkk",
    channelLogo: "https://shorturl.at/ULAhW",
    title: "TailwindCSS for Beginners",
    channelName: "praneetog",
    views: "100K",
    timestamp: "2 days ago"
},{
    thumbnail: "https://shorturl.at/zqlkk",
    channelLogo: "https://shorturl.at/ULAhW",
    title: "TailwindCSS for Beginners",
    channelName: "praneetog",
    views: "100K",
    timestamp: "2 days ago"
},{
    thumbnail: "https://shorturl.at/zqlkk",
    channelLogo: "https://shorturl.at/ULAhW",
    title: "TailwindCSS for Beginners",
    channelName: "praneetog",
    views: "100K",
    timestamp: "2 days ago"
},{
    thumbnail: "https://shorturl.at/zqlkk",
    channelLogo: "https://shorturl.at/ULAhW",
    title: "TailwindCSS for Beginners",
    channelName: "praneetog",
    views: "100K",
    timestamp: "2 days ago"
},{
    thumbnail: "https://shorturl.at/zqlkk",
    channelLogo: "https://shorturl.at/ULAhW",
    title: "TailwindCSS for Beginners",
    channelName: "praneetog",
    views: "100K",
    timestamp: "2 days ago"
},{
    thumbnail: "https://shorturl.at/zqlkk",
    channelLogo: "https://shorturl.at/ULAhW",
    title: "TailwindCSS for Beginners",
    channelName: "praneetog",
    views: "100K",
    timestamp: "2 days ago"
},{
    thumbnail: "https://shorturl.at/zqlkk",
    channelLogo: "https://shorturl.at/ULAhW",
    title: "TailwindCSS for Beginners",
    channelName: "praneetog",
    views: "100K",
    timestamp: "2 days ago"
},{
    thumbnail: "https://shorturl.at/zqlkk",
    channelLogo: "https://shorturl.at/ULAhW",
    title: "TailwindCSS for Beginners",
    channelName: "praneetog",
    views: "100K",
    timestamp: "2 days ago"
},{
    thumbnail: "https://shorturl.at/zqlkk",
    channelLogo: "https://shorturl.at/ULAhW",
    title: "TailwindCSS for Beginners",
    channelName: "praneetog",
    views: "100K",
    timestamp: "2 days ago"
},{
    thumbnail: "https://shorturl.at/zqlkk",
    channelLogo: "https://shorturl.at/ULAhW",
    title: "TailwindCSS for Beginners",
    channelName: "praneetog",
    views: "100K",
    timestamp: "2 days ago"
},{
    thumbnail: "https://shorturl.at/zqlkk",
    channelLogo: "https://shorturl.at/ULAhW",
    title: "TailwindCSS for Beginners",
    channelName: "praneetog",
    views: "100K",
    timestamp: "2 days ago"
},{
    thumbnail: "https://shorturl.at/zqlkk",
    channelLogo: "https://shorturl.at/ULAhW",
    title: "TailwindCSS for Beginners",
    channelName: "praneetog",
    views: "100K",
    timestamp: "2 days ago"
}]

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-12 gap-8 lg:gap-5 md:m-8 lg:m-5">
        {VIDEOS.map(video => <div>
            <VideoCard 
                thumbnail={video.thumbnail}
                channelLogo={video.channelLogo}
                title={video.title}
                channelName={video.channelName}
                views={video.views}
                timestamp={video.timestamp}
            />
        </div>)}
    </div>
  )
}