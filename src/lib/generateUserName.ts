function generateUsername(): string {
  const addRandomNumber: boolean = true; // Set to true or false based on your needs
  const randomNumberRange: number = 1000; // Specify the range for the random number

  const adjectives: string[] = [
    "Happy",
    "Brave",
    "Clever",
    "Witty",
    "Bright",
    "Charming",
    "Energetic",
    "Fearless",
    "Graceful",
    "Mighty",
  ];

  const nouns: string[] = [
    "Panda",
    "Eagle",
    "Lion",
    "Tiger",
    "Dragon",
    "Phoenix",
    "Wolf",
    "Falcon",
    "Panther",
    "Bear",
  ];

  // Randomly pick an adjective and a noun
  const randomAdjective: string =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun: string = nouns[Math.floor(Math.random() * nouns.length)];

  // Combine adjective and noun
  let username: string = `${randomAdjective}${randomNoun}`;

  // Optionally add a random number to the end
  if (addRandomNumber) {
    const randomNumber: number = Math.floor(Math.random() * randomNumberRange);
    username += randomNumber.toString();
  }

  return username;
}

export { generateUsername };
