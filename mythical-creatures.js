const mythicalCreatures = [
  { name: "Dragon", type: "Fire", lastSeen: "Volcano Valley" },
  { name: "Mermaid", type: "Water", lastSeen: "Coral Caves" },
  { name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest" },
  { name: "Griffin", type: "Air", lastSeen: "Highwind Mountains" },
  { name: "Kraken", type: "Water", lastSeen: "Abyssal Depths" },
];

const firstWaterCreature = mythicalCreatures.find(
  (creature) => creature.type === "Water"
);

console.log("First Water-type Creature:", firstWaterCreature);

const griffinIndex = mythicalCreatures.findIndex(
  (creature) => creature.name === "Griffin"
);

console.log("Index of Griffin:", griffinIndex);

const firstCreatureLastSeenInEnchantedForest = mythicalCreatures.find(
  (creature) => creature.lastSeen === "Enchanted Forest"
);

console.log(
  "First Creature Last Seen in Enchanted Forest:",
  firstCreatureLastSeenInEnchantedForest
);
