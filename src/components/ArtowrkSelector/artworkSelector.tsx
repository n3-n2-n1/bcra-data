export function ArtworkSelector({ text, index }) {
    return (
      <li className="">
        <button
          className={` ${
            index ? 'text-zinc-500' : 'text-green-600 underline font-bold'
          }`}
        >
          {text}
        </button>
      </li>
    );
  }