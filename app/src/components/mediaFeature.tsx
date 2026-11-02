import { AiOutlineSecurityScan } from "react-icons/ai";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md";

function getConversionGuidance(from: string, to: string) {
  const source = from.toLowerCase();
  const target = to.toLowerCase();
  const audioTargets: string[] = ["mp3", "wav", "flac", "ogg", "aac (adts)"];
  const videoTargets: string[] = ["mp4", "webm", "mov", "mkv", "ogg"];

  if (audioTargets.includes(target)) {
    if (target === "mp3") {
      return `${source.toUpperCase()} to MP3 extracts or converts the audio track; the output does not include video. MP3 uses lossy compression, so re-encoding may reduce audio quality.`;
    }
    if (target === "wav") {
      return "WAV commonly stores uncompressed audio, so the output can be much larger than the source. A video-to-WAV conversion extracts audio rather than keeping the picture.";
    }
    if (target === "flac") {
      return "FLAC is a lossless audio format. It can preserve decoded audio without additional lossy compression, but it cannot restore quality already lost in the source.";
    }
    if (target === "ogg") {
      return "Ogg is a media container. Playback compatibility depends on the audio codec written inside it and the player you use.";
    }
    return "AAC in ADTS is an audio stream format, not a general-purpose video container. It is intended for compatible AAC audio workflows.";
  }

  if (videoTargets.includes(target)) {
    return "MP4, WebM, MOV, MKV, and Ogg are containers. A container can hold different audio and video codecs, so changing the container does not guarantee that every stream will play in every device or browser.";
  }

  return "The result depends on the source streams, target format, browser support, and available device resources. Keep the original file until you have checked playback and audio/video synchronization.";
}

export default function MediaFeature({
  from,
  to,
}: {
  from: string;
  to: string;
}) {
  const guidance = getConversionGuidance(from, to);

  return (
    <section className="w-full space-y-7" aria-labelledby="media-conversion-guide">
      <div className="space-y-3">
        <h2 id="media-conversion-guide" className="text-xl font-semibold">
          How to convert {from} to {to}
        </h2>
        <ol className="list-decimal space-y-2 pl-6 text-base leading-7 text-slate-700">
          <li>Select a media file from your device. The file should contain streams supported by the browser conversion engine.</li>
          <li>Check the output format selected in the converter. You can change it before starting.</li>
          <li>Start conversion and wait for processing to finish. Large files may take longer and use substantial memory.</li>
          <li>Download the result and test it in the player or application where you intend to use it.</li>
        </ol>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h3 className="text-lg font-semibold text-slate-900">
          What to know about {from} to {to}
        </h3>
        <p className="mt-2 text-sm leading-7 text-slate-700">{guidance}</p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <article className="flex flex-col items-center gap-3 text-center">
          <MdOndemandVideo size={40} aria-hidden="true" />
          <h3 className="text-lg font-semibold text-slate-900">Container and codec</h3>
          <p className="text-sm leading-6 text-slate-700">
            A file extension describes its container or format, but playback also depends on the codecs inside the file.
          </p>
        </article>
        <article className="flex flex-col items-center gap-3 text-center">
          <BsArrowUpRightCircle size={35} aria-hidden="true" />
          <h3 className="text-lg font-semibold text-slate-900">Browser resources</h3>
          <p className="text-sm leading-6 text-slate-700">
            Conversion runs in your browser using your device's processing power and memory. Close other demanding tabs if a large conversion struggles.
          </p>
        </article>
        <article className="flex flex-col items-center gap-3 text-center">
          <AiOutlineSecurityScan size={40} aria-hidden="true" />
          <h3 className="text-lg font-semibold text-slate-900">Local file processing</h3>
          <p className="text-sm leading-6 text-slate-700">
            This converter reads the selected file through the browser's file interface and builds the output in browser memory; it does not send the media to a conversion server in this workflow.
          </p>
        </article>
      </div>
    </section>
  );
}
