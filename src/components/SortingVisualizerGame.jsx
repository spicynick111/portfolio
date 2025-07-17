import React, { useRef, useEffect, useState } from "react";

const BAR_COUNT = 25;
const BAR_MIN = 10;
const BAR_MAX = 250;
const BAR_WIDTH = 20;
const BAR_GAP = 2;
const CANVAS_WIDTH = BAR_COUNT * (BAR_WIDTH + BAR_GAP);
const CANVAS_HEIGHT = 300;
const ANIMATION_DELAY = 100;
const ALGORITHMS = ["Bubble", "Selection", "Insertion", "Merge"];

function getRandomBars() {
  return Array.from({ length: BAR_COUNT }, () => Math.floor(Math.random() * (BAR_MAX - BAR_MIN) + BAR_MIN));
}

const SortingVisualizerGame = () => {
  const canvasRef = useRef(null);
  const [bars, setBars] = useState(getRandomBars());
  const [currentAlgorithm, setCurrentAlgorithm] = useState("");
  const [isSorting, setIsSorting] = useState(false);
  const [guessSection, setGuessSection] = useState(false);
  const [result, setResult] = useState("");
  const [resultColor, setResultColor] = useState("");

  // Draw bars on canvas
  const drawBars = (highlight = -1, customBars = null) => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    (customBars || bars).forEach((height, index) => {
      ctx.fillStyle = index === highlight ? "#f87171" : "#60a5fa";
      ctx.fillRect(index * (BAR_WIDTH + BAR_GAP), CANVAS_HEIGHT - height, BAR_WIDTH, height);
    });
  };

  useEffect(() => {
    drawBars();
    // eslint-disable-next-line
  }, [bars]);

  // Sorting Algorithms
  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  const bubbleSort = async () => {
    let arr = [...bars];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          drawBars(j + 1, arr);
          await sleep(ANIMATION_DELAY);
        }
      }
    }
    setBars(arr);
  };

  const selectionSort = async () => {
    let arr = [...bars];
    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) min = j;
      }
      [arr[i], arr[min]] = [arr[min], arr[i]];
      drawBars(i, arr);
      await sleep(ANIMATION_DELAY);
    }
    setBars(arr);
  };

  const insertionSort = async () => {
    let arr = [...bars];
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
        drawBars(j + 1, arr);
        await sleep(ANIMATION_DELAY);
      }
      arr[j + 1] = key;
      drawBars(i, arr);
      await sleep(ANIMATION_DELAY);
    }
    setBars(arr);
  };

  const mergeSort = async (start = 0, end = bars.length - 1, arr = null) => {
    arr = arr || [...bars];
    if (start >= end) return;
    const mid = Math.floor((start + end) / 2);
    await mergeSort(start, mid, arr);
    await mergeSort(mid + 1, end, arr);
    await merge(start, mid, end, arr);
    if (start === 0 && end === arr.length - 1) setBars([...arr]);
  };

  const merge = async (start, mid, end, arr) => {
    const left = arr.slice(start, mid + 1);
    const right = arr.slice(mid + 1, end + 1);
    let i = 0, j = 0, k = start;
    while (i < left.length && j < right.length) {
      arr[k++] = left[i] < right[j] ? left[i++] : right[j++];
      drawBars(k - 1, arr);
      await sleep(ANIMATION_DELAY);
    }
    while (i < left.length) {
      arr[k++] = left[i++];
      drawBars(k - 1, arr);
      await sleep(ANIMATION_DELAY);
    }
    while (j < right.length) {
      arr[k++] = right[j++];
      drawBars(k - 1, arr);
      await sleep(ANIMATION_DELAY);
    }
  };

  // Game Logic
  const resetBars = () => {
    setBars(getRandomBars());
    setResult("");
    setResultColor("");
    setGuessSection(false);
    setCurrentAlgorithm("");
  };

  const startGame = async () => {
    resetBars();
    const algo = ALGORITHMS[Math.floor(Math.random() * ALGORITHMS.length)];
    setCurrentAlgorithm(algo);
    setGuessSection(true);
    setIsSorting(true);
    if (algo === "Bubble") await bubbleSort();
    else if (algo === "Selection") await selectionSort();
    else if (algo === "Insertion") await insertionSort();
    else if (algo === "Merge") await mergeSort();
    setIsSorting(false);
    drawBars();
  };

  const checkGuess = (guess) => {
    if (!currentAlgorithm) return;
    if (guess === currentAlgorithm) {
      setResult(`✅ Correct! It was ${currentAlgorithm} Sort.`);
      setResultColor("text-green-400");
    } else {
      setResult(`❌ Nope! It was actually ${currentAlgorithm} Sort.`);
      setResultColor("text-red-400");
    }
  };

  return (
    <div className="flex flex-col items-center w-full py-8">
      <h1 className="text-3xl font-bold mb-4">🧠 Sorting Algorithm Visualizer & Guess Game</h1>
      <div className="overflow-x-auto" style={{ width: CANVAS_WIDTH }}>
        <canvas
          ref={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          className="bg-gray-800 rounded shadow-md"
        />
      </div>
      <div className="flex gap-3 mt-6 flex-wrap justify-center">
        <button
          onClick={startGame}
          className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
          disabled={isSorting}
        >
          🎮 Start Game
        </button>
        <button
          onClick={resetBars}
          className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
          disabled={isSorting}
        >
          🔄 Reset Bars
        </button>
      </div>
      {guessSection && (
        <div id="guessSection" className="mt-6">
          <p className="mb-2">Guess the algorithm used 👇</p>
          <div className="flex gap-4 flex-wrap">
            <button onClick={() => checkGuess("Bubble")} className="bg-green-500 px-3 py-1 rounded">Bubble Sort</button>
            <button onClick={() => checkGuess("Selection")} className="bg-yellow-500 px-3 py-1 rounded">Selection Sort</button>
            <button onClick={() => checkGuess("Insertion")} className="bg-purple-500 px-3 py-1 rounded">Insertion Sort</button>
            <button onClick={() => checkGuess("Merge")} className="bg-pink-500 px-3 py-1 rounded">Merge Sort</button>
          </div>
          <p id="result" className={`mt-4 text-xl font-semibold ${resultColor}`}>{result}</p>
        </div>
      )}
    </div>
  );
};

export default SortingVisualizerGame; 