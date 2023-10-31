import { NextRequest } from "next/server";
import crypto from "crypto";
import seedrandom from "seedrandom";

// Generate a seeded random color
const generateColor = (rng: Function) =>
  `#${Math.floor(rng() * 16777215).toString(16)}`;

// Create a seeded random number generator
const createSeededRNG = (seed: string) => {
  return seedrandom(seed);
};

// Generate hash from a custom string
const generateHash = (customString: string) => {
  const hash = crypto.createHash("sha256");
  hash.update(customString);
  return hash.digest("hex");
};

export async function GET(
  request: NextRequest,
  { params }: { params: { string: string } }
) {
  const customString = params.string;
  const seed = generateHash(customString);
  const rng = createSeededRNG(seed);

  const color1 = generateColor(rng);
  const color2 = generateColor(rng);

  const svgString = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="Gradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="${color1}"/>
            <stop offset="100%" stop-color="${color2}"/>
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#Gradient)" />
      </svg>
    `;

  return new Response(svgString, {
    headers: {
      "Content-Type": "image/svg+xml",
      // Cache for 60 seconds on the client and shared caches
      "Cache-Control": "public, max-age=60, stale-while-revalidate=60",
    },
  });
}
