import React from "react";
import millify from "millify";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const ChannelInfo = ({ video }) => {
  const { title, channelThumbnail, channelTitle, subscriberCountText, likeCount } = video;

  return (
    <div className="channel-info">
      <h1 className="text-xl my-3 font-bold">{title}</h1>
   
      <section className="flex justify-between items-center">
        {channelThumbnail && channelThumbnail.length > 0 && (
          <img
            className="w-12 h-12 rounded-full"
            src={channelThumbnail[0].url}
            alt={channelTitle}
          />
        )}

        <div>
          <h4 className="font-bold">{channelTitle}</h4>
          <p className="text-gray-400">{subscriberCountText}</p>
        </div>

        <div className="flex items-center bg-zinc-700 rounded-full cursor-pointer">
          <div className="flex gap-1 items-center py-2 px-6 border-r">
            <AiOutlineLike />
            <span>{millify(video.likeCount)}</span>
          </div>
          <div className="py-2 px-6">
            <AiOutlineDislike />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChannelInfo;
