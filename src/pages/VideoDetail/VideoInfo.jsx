import millify from "millify"

const VideoInfo = ({ video }) => {
  const date = new Date(video.publishDate).toLocalDateString("tr",{
    day: '2-numeric',
    mont: 'short',
    year: 'numeric',
  })

  const [isFull, setIsFull] = useState(false);

  const text = isFull? video.description : video.description.slice(0,150) + "..daha fazla";

  return (
    <div onClick={() => setIsFull(!isFull)}
      className="bg-zinc-700 rounded-lg p-2 mt-4 cursor-pointer hover:bg-opacity-80">
      <div className="flex gap-4 mb-2 font-bold">
        <p>{millify(video.viewCount)} Göruntulenme</p>

        <p>
          {text.split("\n").map((line, key) => (
            <>
            <span key={key}/>
             {line} <br />
             </>
             ))}


        </p>

      </div>
    </div>
  )
}

export default VideoInfo
