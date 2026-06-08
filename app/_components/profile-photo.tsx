import Image from "next/image";
import photo from "../../public/professional-photo.png";
import photoGlasses from "../../public/professional-photo-glasses.png";

/* Playful detail: the portrait swaps to the glasses shot on hover / focus.
   Pure CSS crossfade (see .photo-swap); keyboard-focusable so it's not
   hover-only, and held still under reduced motion. */
export function ProfilePhoto() {
  return (
    <figure
      className="photo-swap aspect-square w-full overflow-hidden rounded-2xl border bg-surface"
      tabIndex={0}
      aria-label="Portrait of Ace Gabriel Pasiliao. It changes to a glasses-on photo on hover."
    >
      <Image
        src={photo}
        alt="Ace Gabriel Pasiliao"
        placeholder="blur"
        priority
        sizes="(max-width: 880px) 70vw, 360px"
        className="h-full w-full object-cover"
      />
      <Image
        src={photoGlasses}
        alt=""
        aria-hidden="true"
        placeholder="blur"
        sizes="(max-width: 880px) 70vw, 360px"
        className="photo-top h-full w-full object-cover"
      />
    </figure>
  );
}
