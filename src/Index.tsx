import { useState } from "react";
import NavBar from "./NavBar";
import { beeMovieScriptArr } from "./beeMovieScript";
import { beeMovieScriptByWordArr } from "./beeMovieScriptByWord";
import { beeMovieScriptByCharArr } from "./beeMovieScriptByChar";

function Index() {
  const [beeMovieScript, setBeeMovieScript] = useState<boolean>(false);
  const [beeMovieScriptByWord, setBeeMovieScriptByWord] =
    useState<boolean>(false);
  const [beeMovieScriptByChar, setBeeMovieScriptByChar] =
    useState<boolean>(false);

  return (
    <div className="py-3">
      <NavBar />
      <h1 className="text-4xl font-bold text-center mt-10">TSX Challenges</h1>
      {beeMovieScript ? (
        <button
          onClick={() => setBeeMovieScript(false)}
          className="bg-black mx-3 rounded-xl text-2xl underline underline-offset-4 p-4 font-medium text-gray-100"
        >
          Hide Entire Bee Movie Script
        </button>
      ) : (
        <button
          onClick={() => setBeeMovieScript(true)}
          className="bg-black mx-3 rounded-xl text-2xl underline underline-offset-4 p-4 font-medium text-gray-100"
        >
          Show Entire Bee Movie Script
        </button>
      )}
      {beeMovieScript && (
        <ul>
          {beeMovieScriptArr.map((line: string, index: number) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      )}
      {beeMovieScriptByWord ? (
        <button
          onClick={() => setBeeMovieScriptByWord(false)}
          className="bg-black mx-3 rounded-xl text-2xl underline underline-offset-4 p-4 font-medium text-gray-100"
        >
          Hide Entire Bee Movie Script by Word
        </button>
      ) : (
        <button
          onClick={() => setBeeMovieScriptByWord(true)}
          className="bg-black mx-3 rounded-xl text-2xl underline underline-offset-4 p-4 font-medium text-gray-100"
        >
          Show Entire Bee Movie Script by Word
        </button>
      )}
      {beeMovieScriptByWord && (
        <ul>
          {beeMovieScriptByWordArr.map((line: string, index: number) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      )}
      {beeMovieScriptByChar ? (
        <button
          onClick={() => setBeeMovieScriptByChar(false)}
          className="bg-black mx-3 rounded-xl text-2xl underline underline-offset-4 p-4 font-medium text-gray-100"
        >
          Hide Entire Bee Movie Script by Char
        </button>
      ) : (
        <button
          onClick={() => setBeeMovieScriptByChar(true)}
          className="bg-black mx-3 rounded-xl text-2xl underline underline-offset-4 p-4 font-medium text-gray-100"
        >
          Show Entire Bee Movie Script by Char
        </button>
      )}
      {beeMovieScriptByChar && (
        <ul>
          {beeMovieScriptByCharArr.map((line: string, index: number) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Index;
