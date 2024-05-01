import { useEffect, useState } from "react";
import api from "../../utils/api";
import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";
import ChannelInfo from "./ChannelInfo";
import VideoInfo from "./VideoInfo";
import Comments from "./Comments";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState(null); 
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  useEffect(() => {
    const fetchVideoAndComments = async () => {
      try {
        const videoResponse = await api.get(`/video/info?id=${id}&extend=1`);
        const commentsResponse = await api.get(`/comments?id=${id}`);
        setVideo(videoResponse.data);
        setComments(commentsResponse.data);
      } catch (error) {
        console.error("Error fetching video and comments:", error);
        
      }
    };
  
    if (id) {
      fetchVideoAndComments();
    }

    return () => {
    };
  }, [id]);

  return (
    <div className="detail-page h-screen overflow-auto p-[20px] md:p-[40px] lg:px-[50px] xl:px-[100px]">
      <div className="">
        <div>
          <div className="h-[30vh] md:h-[50vh] lg:h-[60vh]">
            <ReactPlayer width="100%" height="100%" url={`https://www.youtube.com/watch?v=${id}`} />
          </div>
        
          {!video || !comments ? (
            <p>Yükleniyor...</p> 
          ) : (
            <>
              <ChannelInfo video={video} />
              <VideoInfo video={video} />
              <Comments data={comments} />
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-5 ps-5">
       {video?.relatedVideos.data.map((item) =>(
       <VideoCard key={item.videoId} video={item} />
       ))}
      </div>
    </div>
  );
};

export default VideoDetail;
