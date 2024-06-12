// import { APITypes, PlyrProps, usePlyr } from "plyr-react";
// import "plyr-react/plyr.css";
// import Hls from "hls.js";
// import { Options } from "plyr";
// import React from "react";
// const videoOptions = null;
// const videoSource = null;


// const useHls = (src: string, options: Options | null) => {
//   const hls = React.useRef<Hls>(new Hls());
//   const hasQuality = React.useRef<boolean>(false);
//   const [plyrOptions, setPlyrOptions] = React.useState<Options | null>(options);

//   React.useEffect(() => {
//     hasQuality.current = false;
//   }, [options]);

//   React.useEffect(() => {
//     hls.current.loadSource(src);
//     hls.current.attachMedia(document.querySelector(".plyr-react")!);
//     hls.current.on(Hls.Events.MANIFEST_PARSED, () => {
//       if (hasQuality.current) return;
//       const levels = hls.current.levels;
//       const quality: Options["quality"] = {
//         default: levels[levels.length - 1].height,
//         options: levels.map((level) => level.height),
//         forced: true,
//         onChange: (newQuality: number) => {
//           levels.forEach((level, levelIndex) => {
//             if (level.height === newQuality) {
//               hls.current.currentLevel = levelIndex;
//             }
//           });
//         },
//       };

//       setPlyrOptions({ ...plyrOptions, quality });
//       hasQuality.current = true;
//     });
//   });

//   return { options: plyrOptions };
// };


// const CustomPlyrInstance = React.forwardRef<
//   APITypes,
//   PlyrProps & { hlsSource: string, subtitleUrl: string }
// >((props, ref) => {
//   const { source, options = null, hlsSource, subtitleUrl } = props;
//   const raptorRef = usePlyr(ref, {
//     ...useHls(hlsSource, options),
//     source,
//   }) as React.MutableRefObject<HTMLVideoElement>;
//   return (
//     <video  crossOrigin="anonymous" ref={raptorRef} className="plyr-react plyr">
//       <track
//         kind="captions"
//         label="English"
//         src={subtitleUrl}
//         srcLang="en"
//         default={true}
//       />
//     </video>
//   );
// });
// type Props = {
//   videoUrl : string;
//   subtitleUrl: string;
// }
// const VideoPlayer:React.FC<Props> = ({videoUrl, subtitleUrl}) => {
//   const ref = React.useRef<APITypes>(null);
//   const supported = Hls.isSupported();

//   return (
//     <>
//     <div className="wrapper">
//       {supported ? (
//         <CustomPlyrInstance
//           ref={ref}
//           source={videoSource}
//           options={videoOptions}
//           hlsSource={videoUrl}
//           subtitleUrl={subtitleUrl}
//         />
//       ) : (
//         "HLS is not supported in your browser"
//       )}
//     </div>

    

//     </>
//   );
// };

// CustomPlyrInstance.displayName = 'CustomPlyrInstance';

// export default VideoPlayer;


import { Player, Hls, DefaultUi, DefaultControls} from '@vime/react';
type Props = {
  videoUrl: string;
  subtitleUrl: string;
}

const VideoPlayer: React.FC<Props> = ({ videoUrl }) => {

  const hlsConfig = {
    // ...
  };


  return (
    <Player >
 <Hls version="latest" config={hlsConfig} poster="/media/poster.png">
        <source data-src={videoUrl} type="application/x-mpegURL" />
      </Hls>

      <DefaultUi noControls>
        {/* We setup the default controls and pass in any options. */}
        <DefaultControls hideOnMouseLeave activeDuration={2000} />
      </DefaultUi>
      
    </Player>
  );
}

export default VideoPlayer;
