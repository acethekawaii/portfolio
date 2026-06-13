import Image from "next/image";
import photo from "../../public/professional-photo.png";
import photoGlasses from "../../public/professional-photo-glasses.png";

/* Compact avatar. The face is a detail now, not the headline; the playful
   bit stays: it swaps to the glasses shot on hover / focus. Pure CSS
   crossfade (see .photo-swap), keyboard-focusable, still under reduced
   motion. */
export function ProfilePhoto({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <figure
      className={`photo-swap shrink-0 overflow-hidden rounded-full border border-border-strong bg-surface ${className}`}
      tabIndex={0}
      aria-label="Portrait of Ace Gabriel Pasiliao. It changes to a glasses-on photo on hover."
    >
      <Image
        src={photo}
        alt="Ace Gabriel Pasiliao"
        placeholder="blur"
        priority
        sizes="96px"
        className="h-full w-full object-cover"
      />
      <Image
        src={photoGlasses}
        alt=""
        aria-hidden="true"
        placeholder="blur"
        sizes="96px"
        className="photo-top h-full w-full object-cover"
      />
    </figure>
  );
}
