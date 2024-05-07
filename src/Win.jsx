import { useEffect, useRef, useState } from "react";

export default function Win({
  reset,
  resetGet,
  setCurrent,
  setBest,
  setSelected,
}) {
  const [url, setUrl] = useState("");
  const modalRef = useRef();

  useEffect(() => {
    // public key :)
    const key = "MK4IDpyP0NBLFWLBzovnMJR6hsgetjNi";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=congratulations&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const getWinGif = async () => {
      const data = await fetch(url);
      const gifUrl = (await data.json()).data[0].images.original.url;
      setUrl(gifUrl);
    };
    getWinGif();
  }, []);

  useEffect(() => {
    modalRef.current.showModal();
  }, [url]);

  const playAgain = () => {
    modalRef.current.close();
    setCurrent(0);
    setBest(0);
    setSelected([]);
    resetGet();
  };

  return (
    <dialog ref={modalRef}>
      <div className="win-container">
        <img src={url} alt="congratulations gif" />
        <p>Congratulations, You Won!</p>
        <button className="win-dialog-button" onClick={playAgain}>
          Play again
        </button>
        <button className="win-dialog-button" onClick={reset}>
          Different Type
        </button>
      </div>
    </dialog>
  );
}
