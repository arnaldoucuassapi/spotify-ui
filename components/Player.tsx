import { Heart, PictureInPicture2, Shuffle, SkipBack, Play, SkipForward, Repeat2, PlaySquare, Mic2, AlignJustify, MonitorSpeaker, Volume2 } from 'lucide-react';
import Image from 'next/image';

export function Player() {
  return (
    <div className="w-full flex items-center justify-between bg-zinc-900 p-4">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-4">
          <Image className="h-[50px] cover rounded" width={50} height={60} src="/thumbnail.jpg" alt="Music Thumbnail" />
          <div>
            <h6>Novo Balanço</h6>
            <p>Veigh, Bvga Beatz, Prod Malax, Supernova Ent</p>
          </div>
          <div className="flex items-center space-x-4">
            <Heart />
            <PictureInPicture2 />
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-4">
            <Shuffle />
            <SkipBack />
            <button className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
              <Play size={18} color="#000" />
            </button>
            <SkipForward />
            <Repeat2 />
          </div>

          <div className="flex space-x-2">
            <span>0:38</span>
            <div></div>
            <span>2:20</span>
          </div>
        </div>
      </div>

      <div className="flex space-x-2">
        <PlaySquare />
        <Mic2 />
        <AlignJustify />
        <MonitorSpeaker />
        <Volume2 />
      </div>
    </div>
  )
}