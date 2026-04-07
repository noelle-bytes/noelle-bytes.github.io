const SPECIES_DB = [
  {
    "name": "Human (awake)",
    "group": "Mammal",
    "subgroup": "Great Ape",
    "S": 0.85,
    "I": 0.95,
    "U": 0.95,
    "confidence": "HIGH",
    "notes": "Baseline reference organism"
  },
  {
    "name": "Chimpanzee",
    "group": "Mammal",
    "subgroup": "Great Ape",
    "S": 0.8,
    "I": 0.9,
    "U": 0.9,
    "confidence": "HIGH",
    "notes": "Mirror test, tool use, culture, theory of mind"
  },
  {
    "name": "Bonobo",
    "group": "Mammal",
    "subgroup": "Great Ape",
    "S": 0.78,
    "I": 0.88,
    "U": 0.88,
    "confidence": "HIGH",
    "notes": "Empathy, conflict resolution, symbol use"
  },
  {
    "name": "Gorilla",
    "group": "Mammal",
    "subgroup": "Great Ape",
    "S": 0.78,
    "I": 0.85,
    "U": 0.85,
    "confidence": "HIGH",
    "notes": "Mirror test (some), tool use, sign language (Koko)"
  },
  {
    "name": "Orangutan",
    "group": "Mammal",
    "subgroup": "Great Ape",
    "S": 0.76,
    "I": 0.85,
    "U": 0.85,
    "confidence": "HIGH",
    "notes": "Mirror test, complex tool manufacture, planning"
  },
  {
    "name": "Capuchin monkey",
    "group": "Mammal",
    "subgroup": "Primate",
    "S": 0.72,
    "I": 0.75,
    "U": 0.78,
    "confidence": "HIGH",
    "notes": "Tool use, fairness sense, problem solving"
  },
  {
    "name": "Rhesus macaque",
    "group": "Mammal",
    "subgroup": "Primate",
    "S": 0.72,
    "I": 0.72,
    "U": 0.72,
    "confidence": "HIGH",
    "notes": "Extensive neuroscience data, metacognition evidence"
  },
  {
    "name": "Marmoset",
    "group": "Mammal",
    "subgroup": "Primate",
    "S": 0.68,
    "I": 0.65,
    "U": 0.68,
    "confidence": "MEDIUM",
    "notes": "Social, vocal communication, cooperative breeding"
  },
  {
    "name": "Lemur (ring-tailed)",
    "group": "Mammal",
    "subgroup": "Primate",
    "S": 0.68,
    "I": 0.6,
    "U": 0.62,
    "confidence": "MEDIUM",
    "notes": "Social hierarchy, scent marking, basic tool use"
  },
  {
    "name": "Bottlenose dolphin",
    "group": "Mammal",
    "subgroup": "Cetacean",
    "S": 0.75,
    "I": 0.88,
    "U": 0.88,
    "confidence": "HIGH",
    "notes": "Mirror test, name whistles, culture, cooperation"
  },
  {
    "name": "Orca",
    "group": "Mammal",
    "subgroup": "Cetacean",
    "S": 0.78,
    "I": 0.88,
    "U": 0.9,
    "confidence": "HIGH",
    "notes": "Culture, dialect, cooperative hunting, mourning"
  },
  {
    "name": "Humpback whale",
    "group": "Mammal",
    "subgroup": "Cetacean",
    "S": 0.7,
    "I": 0.78,
    "U": 0.8,
    "confidence": "MEDIUM",
    "notes": "Song culture, bubble net hunting, altruism"
  },
  {
    "name": "Sperm whale",
    "group": "Mammal",
    "subgroup": "Cetacean",
    "S": 0.72,
    "I": 0.8,
    "U": 0.82,
    "confidence": "MEDIUM",
    "notes": "Largest brain, clan dialects, social learning"
  },
  {
    "name": "African elephant",
    "group": "Mammal",
    "subgroup": "Elephant",
    "S": 0.78,
    "I": 0.85,
    "U": 0.85,
    "confidence": "HIGH",
    "notes": "Mirror test, mourning, tool use, empathy, infrasound"
  },
  {
    "name": "Asian elephant",
    "group": "Mammal",
    "subgroup": "Elephant",
    "S": 0.76,
    "I": 0.83,
    "U": 0.84,
    "confidence": "HIGH",
    "notes": "Mirror test passed, cooperative tasks, tool use"
  },
  {
    "name": "Dog (domestic)",
    "group": "Mammal",
    "subgroup": "Canid",
    "S": 0.75,
    "I": 0.72,
    "U": 0.75,
    "confidence": "HIGH",
    "notes": "Social cognition, human reading, empathy, training"
  },
  {
    "name": "Wolf",
    "group": "Mammal",
    "subgroup": "Canid",
    "S": 0.78,
    "I": 0.72,
    "U": 0.75,
    "confidence": "MEDIUM",
    "notes": "Pack coordination, hunting strategy, social bonds"
  },
  {
    "name": "Cat (domestic)",
    "group": "Mammal",
    "subgroup": "Felid",
    "S": 0.78,
    "I": 0.62,
    "U": 0.65,
    "confidence": "MEDIUM",
    "notes": "Good spatial memory, hunting, limited social cognition"
  },
  {
    "name": "Lion",
    "group": "Mammal",
    "subgroup": "Felid",
    "S": 0.78,
    "I": 0.68,
    "U": 0.72,
    "confidence": "MEDIUM",
    "notes": "Cooperative hunting, pride social structure"
  },
  {
    "name": "Pig",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.72,
    "I": 0.7,
    "U": 0.72,
    "confidence": "HIGH",
    "notes": "Mirror-guided behavior, joystick use, empathy evidence"
  },
  {
    "name": "Horse",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.72,
    "I": 0.65,
    "U": 0.68,
    "confidence": "MEDIUM",
    "notes": "Emotion reading, social bonds, spatial memory"
  },
  {
    "name": "Cow",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.68,
    "I": 0.58,
    "U": 0.62,
    "confidence": "MEDIUM",
    "notes": "Emotional states, social bonds, some problem solving"
  },
  {
    "name": "Rat",
    "group": "Mammal",
    "subgroup": "Rodent",
    "S": 0.72,
    "I": 0.68,
    "U": 0.7,
    "confidence": "HIGH",
    "notes": "Empathy (freeing trapped conspecifics), regret, metacognition"
  },
  {
    "name": "Mouse",
    "group": "Mammal",
    "subgroup": "Rodent",
    "S": 0.68,
    "I": 0.6,
    "U": 0.62,
    "confidence": "HIGH",
    "notes": "Extensive neuroscience data, social, fear learning"
  },
  {
    "name": "Raccoon",
    "group": "Mammal",
    "subgroup": "Carnivore",
    "S": 0.75,
    "I": 0.68,
    "U": 0.7,
    "confidence": "MEDIUM",
    "notes": "Problem solving, tactile dexterity, memory"
  },
  {
    "name": "Sea otter",
    "group": "Mammal",
    "subgroup": "Carnivore",
    "S": 0.72,
    "I": 0.68,
    "U": 0.7,
    "confidence": "MEDIUM",
    "notes": "Tool use (rocks), social, tactile"
  },
  {
    "name": "Bat (fruit bat)",
    "group": "Mammal",
    "subgroup": "Chiroptera",
    "S": 0.78,
    "I": 0.65,
    "U": 0.68,
    "confidence": "MEDIUM",
    "notes": "Echolocation (some), social, individual recognition"
  },
  {
    "name": "Bat (echolocating)",
    "group": "Mammal",
    "subgroup": "Chiroptera",
    "S": 0.85,
    "I": 0.68,
    "U": 0.7,
    "confidence": "MEDIUM",
    "notes": "Echolocation = extraordinary sensing, vocal learning"
  },
  {
    "name": "Platypus",
    "group": "Mammal",
    "subgroup": "Monotreme",
    "S": 0.82,
    "I": 0.55,
    "U": 0.58,
    "confidence": "MEDIUM",
    "notes": "Electroreception, venomous, ancient lineage"
  },
  {
    "name": "Hedgehog",
    "group": "Mammal",
    "subgroup": "Insectivore",
    "S": 0.65,
    "I": 0.48,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Basic mammalian cognition, solitary"
  },
  {
    "name": "Opossum",
    "group": "Mammal",
    "subgroup": "Marsupial",
    "S": 0.65,
    "I": 0.5,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Ancient mammal lineage, death feigning, flexible behavior"
  },
  {
    "name": "Rabbit",
    "group": "Mammal",
    "subgroup": "Lagomorph",
    "S": 0.68,
    "I": 0.52,
    "U": 0.55,
    "confidence": "MEDIUM",
    "notes": "Social, spatial memory, fear conditioning"
  },
  {
    "name": "Squirrel",
    "group": "Mammal",
    "subgroup": "Rodent",
    "S": 0.72,
    "I": 0.58,
    "U": 0.6,
    "confidence": "MEDIUM",
    "notes": "Cache planning, deception, spatial memory"
  },
  {
    "name": "Sheep",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.65,
    "I": 0.55,
    "U": 0.58,
    "confidence": "MEDIUM",
    "notes": "Face recognition (50+ faces), emotional states"
  },
  {
    "name": "Crow/Raven",
    "group": "Bird",
    "subgroup": "Corvid",
    "S": 0.7,
    "I": 0.75,
    "U": 0.78,
    "confidence": "HIGH",
    "notes": "Tool manufacture, planning, theory of mind, play"
  },
  {
    "name": "Magpie",
    "group": "Bird",
    "subgroup": "Corvid",
    "S": 0.68,
    "I": 0.72,
    "U": 0.75,
    "confidence": "HIGH",
    "notes": "Mirror test passed (Eurasian magpie), caching"
  },
  {
    "name": "Jay (Eurasian/scrub)",
    "group": "Bird",
    "subgroup": "Corvid",
    "S": 0.68,
    "I": 0.72,
    "U": 0.74,
    "confidence": "HIGH",
    "notes": "Episodic memory, re-caching deception, planning"
  },
  {
    "name": "African grey parrot",
    "group": "Bird",
    "subgroup": "Parrot",
    "S": 0.68,
    "I": 0.75,
    "U": 0.78,
    "confidence": "HIGH",
    "notes": "Symbolic language (Alex), zero concept, inference"
  },
  {
    "name": "Kea",
    "group": "Bird",
    "subgroup": "Parrot",
    "S": 0.68,
    "I": 0.72,
    "U": 0.74,
    "confidence": "MEDIUM",
    "notes": "Tool use, cooperative problem solving, neophilia"
  },
  {
    "name": "Cockatoo",
    "group": "Bird",
    "subgroup": "Parrot",
    "S": 0.68,
    "I": 0.7,
    "U": 0.72,
    "confidence": "MEDIUM",
    "notes": "Lock picking, tool manufacture, rhythm"
  },
  {
    "name": "Pigeon",
    "group": "Bird",
    "subgroup": "Columbid",
    "S": 0.7,
    "I": 0.58,
    "U": 0.6,
    "confidence": "HIGH",
    "notes": "Category learning, navigation, art discrimination"
  },
  {
    "name": "Chicken",
    "group": "Bird",
    "subgroup": "Galliform",
    "S": 0.65,
    "I": 0.52,
    "U": 0.55,
    "confidence": "MEDIUM",
    "notes": "Object permanence, deception, self-control"
  },
  {
    "name": "Eagle/hawk",
    "group": "Bird",
    "subgroup": "Raptor",
    "S": 0.85,
    "I": 0.62,
    "U": 0.65,
    "confidence": "MEDIUM",
    "notes": "Extraordinary vision, hunting strategy"
  },
  {
    "name": "Owl",
    "group": "Bird",
    "subgroup": "Strigiform",
    "S": 0.82,
    "I": 0.58,
    "U": 0.62,
    "confidence": "MEDIUM",
    "notes": "Exceptional hearing, low-light vision, solitary"
  },
  {
    "name": "Songbird (zebra finch)",
    "group": "Bird",
    "subgroup": "Passerine",
    "S": 0.65,
    "I": 0.58,
    "U": 0.6,
    "confidence": "HIGH",
    "notes": "Vocal learning, song culture, mate assessment"
  },
  {
    "name": "Hummingbird",
    "group": "Bird",
    "subgroup": "Apodiform",
    "S": 0.72,
    "I": 0.55,
    "U": 0.58,
    "confidence": "LOW",
    "notes": "Spatial memory (flower maps), hovering control, UV vision"
  },
  {
    "name": "Penguin",
    "group": "Bird",
    "subgroup": "Spheniscid",
    "S": 0.68,
    "I": 0.55,
    "U": 0.6,
    "confidence": "LOW",
    "notes": "Mate recognition by call, navigation, social"
  },
  {
    "name": "Monitor lizard",
    "group": "Reptile",
    "subgroup": "Lizard",
    "S": 0.7,
    "I": 0.45,
    "U": 0.45,
    "confidence": "MEDIUM",
    "notes": "Problem solving, counting to six, play behavior"
  },
  {
    "name": "Crocodile",
    "group": "Reptile",
    "subgroup": "Crocodilian",
    "S": 0.72,
    "I": 0.4,
    "U": 0.42,
    "confidence": "MEDIUM",
    "notes": "Tool use (luring), parental care, pressure sensors, coordinated hunting"
  },
  {
    "name": "Sea turtle",
    "group": "Reptile",
    "subgroup": "Chelonian",
    "S": 0.6,
    "I": 0.35,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Magnetic navigation, long-distance migration"
  },
  {
    "name": "Tortoise",
    "group": "Reptile",
    "subgroup": "Chelonian",
    "S": 0.55,
    "I": 0.35,
    "U": 0.35,
    "confidence": "LOW",
    "notes": "Long-term spatial memory, slow but persistent"
  },
  {
    "name": "Snake (python)",
    "group": "Reptile",
    "subgroup": "Serpent",
    "S": 0.68,
    "I": 0.32,
    "U": 0.35,
    "confidence": "LOW",
    "notes": "Heat pits (IR sensing), vibration detection"
  },
  {
    "name": "Iguana",
    "group": "Reptile",
    "subgroup": "Lizard",
    "S": 0.6,
    "I": 0.35,
    "U": 0.35,
    "confidence": "LOW",
    "notes": "UV vision, social signaling, territorial"
  },
  {
    "name": "Gecko",
    "group": "Reptile",
    "subgroup": "Lizard",
    "S": 0.58,
    "I": 0.32,
    "U": 0.32,
    "confidence": "LOW",
    "notes": "Vocal communication (unusual for lizards), good night vision"
  },
  {
    "name": "Frog",
    "group": "Amphibian",
    "subgroup": "Anuran",
    "S": 0.55,
    "I": 0.3,
    "U": 0.32,
    "confidence": "MEDIUM",
    "notes": "Visual motion detection, vocalization, basic learning"
  },
  {
    "name": "Salamander",
    "group": "Amphibian",
    "subgroup": "Caudata",
    "S": 0.5,
    "I": 0.28,
    "U": 0.3,
    "confidence": "LOW",
    "notes": "Spatial memory, habitat fidelity"
  },
  {
    "name": "Axolotl",
    "group": "Amphibian",
    "subgroup": "Caudata",
    "S": 0.5,
    "I": 0.25,
    "U": 0.28,
    "confidence": "LOW",
    "notes": "Neotenic, electroreception (lateral line), regeneration"
  },
  {
    "name": "Cleaner wrasse",
    "group": "Fish",
    "subgroup": "Bony Fish",
    "S": 0.65,
    "I": 0.55,
    "U": 0.58,
    "confidence": "HIGH",
    "notes": "Mirror test, contingency testing, face recognition, self-model"
  },
  {
    "name": "Manta ray",
    "group": "Fish",
    "subgroup": "Cartilaginous",
    "S": 0.65,
    "I": 0.55,
    "U": 0.58,
    "confidence": "MEDIUM",
    "notes": "Mirror test (possible), largest fish brain ratio, contingency testing"
  },
  {
    "name": "Cichlid",
    "group": "Fish",
    "subgroup": "Bony Fish",
    "S": 0.58,
    "I": 0.42,
    "U": 0.42,
    "confidence": "MEDIUM",
    "notes": "Social hierarchy, tool use, individual recognition"
  },
  {
    "name": "Goldfish",
    "group": "Fish",
    "subgroup": "Bony Fish",
    "S": 0.5,
    "I": 0.35,
    "U": 0.35,
    "confidence": "MEDIUM",
    "notes": "Months-long memory, associative learning, navigation"
  },
  {
    "name": "Zebrafish",
    "group": "Fish",
    "subgroup": "Bony Fish",
    "S": 0.5,
    "I": 0.35,
    "U": 0.35,
    "confidence": "HIGH",
    "notes": "Model organism, well-mapped neural circuits, social"
  },
  {
    "name": "Salmon",
    "group": "Fish",
    "subgroup": "Bony Fish",
    "S": 0.58,
    "I": 0.35,
    "U": 0.35,
    "confidence": "LOW",
    "notes": "Extraordinary olfactory navigation, magnetic sense"
  },
  {
    "name": "Tuna",
    "group": "Fish",
    "subgroup": "Bony Fish",
    "S": 0.62,
    "I": 0.35,
    "U": 0.35,
    "confidence": "LOW",
    "notes": "Endothermic (warm-blooded), fast processing, schooling"
  },
  {
    "name": "Archer fish",
    "group": "Fish",
    "subgroup": "Bony Fish",
    "S": 0.62,
    "I": 0.48,
    "U": 0.5,
    "confidence": "MEDIUM",
    "notes": "Learned ballistic accuracy, face recognition in humans, cross-media hunting"
  },
  {
    "name": "Grouper",
    "group": "Fish",
    "subgroup": "Bony Fish",
    "S": 0.58,
    "I": 0.45,
    "U": 0.48,
    "confidence": "MEDIUM",
    "notes": "Cooperative hunting with moray eels, referential signaling"
  },
  {
    "name": "Great white shark",
    "group": "Fish",
    "subgroup": "Cartilaginous",
    "S": 0.75,
    "I": 0.4,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Electroreception, keen smell, social (maybe), curiosity"
  },
  {
    "name": "Whale shark",
    "group": "Fish",
    "subgroup": "Cartilaginous",
    "S": 0.6,
    "I": 0.35,
    "U": 0.35,
    "confidence": "LOW",
    "notes": "Filter feeder, migration, minimal behavioral data"
  },
  {
    "name": "Octopus",
    "group": "Cephalopod",
    "subgroup": "Octopod",
    "S": 0.8,
    "I": 0.72,
    "U": 0.82,
    "confidence": "HIGH",
    "notes": "Tool use, play, escape artistry, distributed but unified control"
  },
  {
    "name": "Cuttlefish",
    "group": "Cephalopod",
    "subgroup": "Sepiid",
    "S": 0.78,
    "I": 0.68,
    "U": 0.72,
    "confidence": "MEDIUM",
    "notes": "Camouflage communication, episodic memory, self-control (marshmallow test)"
  },
  {
    "name": "Squid",
    "group": "Cephalopod",
    "subgroup": "Teuthid",
    "S": 0.72,
    "I": 0.55,
    "U": 0.58,
    "confidence": "LOW",
    "notes": "Giant axons, fast predation, some social signaling"
  },
  {
    "name": "Nautilus",
    "group": "Cephalopod",
    "subgroup": "Nautiloid",
    "S": 0.45,
    "I": 0.3,
    "U": 0.35,
    "confidence": "LOW",
    "notes": "Pinhole eyes, simpler brain than other cephalopods, ancient lineage"
  },
  {
    "name": "Honeybee",
    "group": "Insect",
    "subgroup": "Social Hymenoptera",
    "S": 0.7,
    "I": 0.7,
    "U": 0.75,
    "confidence": "HIGH",
    "notes": "Waggle dance, number sense, tool use, optimism/pessimism"
  },
  {
    "name": "Bumblebee",
    "group": "Insect",
    "subgroup": "Social Hymenoptera",
    "S": 0.68,
    "I": 0.65,
    "U": 0.68,
    "confidence": "HIGH",
    "notes": "Play behavior (rolling balls), social learning, cross-modal learning"
  },
  {
    "name": "Ant (general)",
    "group": "Insect",
    "subgroup": "Social Hymenoptera",
    "S": 0.65,
    "I": 0.7,
    "U": 0.8,
    "confidence": "MEDIUM",
    "notes": "Chemical communication, colony coordination, navigation"
  },
  {
    "name": "Paper wasp",
    "group": "Insect",
    "subgroup": "Social Hymenoptera",
    "S": 0.7,
    "I": 0.75,
    "U": 0.8,
    "confidence": "MEDIUM",
    "notes": "Individual face recognition, social hierarchy, nest construction"
  },
  {
    "name": "Termite",
    "group": "Insect",
    "subgroup": "Social Blattodea",
    "S": 0.55,
    "I": 0.6,
    "U": 0.65,
    "confidence": "LOW",
    "notes": "Colony architecture, chemical communication, vibration sensing"
  },
  {
    "name": "Dragonfly",
    "group": "Insect",
    "subgroup": "Odonata",
    "S": 0.85,
    "I": 0.62,
    "U": 0.65,
    "confidence": "MEDIUM",
    "notes": "Exceptional vision, 95% hunting success, interception calculation"
  },
  {
    "name": "Mantis",
    "group": "Insect",
    "subgroup": "Mantodea",
    "S": 0.75,
    "I": 0.55,
    "U": 0.58,
    "confidence": "MEDIUM",
    "notes": "3D vision (only insect with stereo), ambush predation"
  },
  {
    "name": "Fruit fly (Drosophila)",
    "group": "Insect",
    "subgroup": "Diptera",
    "S": 0.55,
    "I": 0.55,
    "U": 0.5,
    "confidence": "HIGH",
    "notes": "Most studied insect brain, decision making, sleep, courtship learning"
  },
  {
    "name": "Butterfly/moth",
    "group": "Insect",
    "subgroup": "Lepidoptera",
    "S": 0.62,
    "I": 0.42,
    "U": 0.45,
    "confidence": "LOW",
    "notes": "Navigation (monarch migration), UV vision, olfaction"
  },
  {
    "name": "Beetle (general)",
    "group": "Insect",
    "subgroup": "Coleoptera",
    "S": 0.55,
    "I": 0.4,
    "U": 0.42,
    "confidence": "LOW",
    "notes": "Dung beetle navigation by Milky Way, diverse adaptations"
  },
  {
    "name": "Cockroach",
    "group": "Insect",
    "subgroup": "Blattodea",
    "S": 0.6,
    "I": 0.45,
    "U": 0.48,
    "confidence": "MEDIUM",
    "notes": "Learning, memory, social, decision-making under uncertainty"
  },
  {
    "name": "Cricket",
    "group": "Insect",
    "subgroup": "Orthoptera",
    "S": 0.58,
    "I": 0.4,
    "U": 0.42,
    "confidence": "LOW",
    "notes": "Acoustic communication, mate assessment, aggression learning"
  },
  {
    "name": "Jumping spider",
    "group": "Arachnid",
    "subgroup": "Salticidae",
    "S": 0.75,
    "I": 0.65,
    "U": 0.7,
    "confidence": "HIGH",
    "notes": "Route planning, deception hunting, attention, categorization"
  },
  {
    "name": "Orb weaver spider",
    "group": "Arachnid",
    "subgroup": "Araneae",
    "S": 0.55,
    "I": 0.35,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Web as extended cognition, vibration sensing"
  },
  {
    "name": "Scorpion",
    "group": "Arachnid",
    "subgroup": "Scorpiones",
    "S": 0.6,
    "I": 0.32,
    "U": 0.35,
    "confidence": "LOW",
    "notes": "UV fluorescence, vibration, pectines (ground sensors)"
  },
  {
    "name": "Mantis shrimp",
    "group": "Crustacean",
    "subgroup": "Stomatopod",
    "S": 0.92,
    "I": 0.58,
    "U": 0.62,
    "confidence": "MEDIUM",
    "notes": "16 color receptors, circular polarization, individual recognition"
  },
  {
    "name": "Hermit crab",
    "group": "Crustacean",
    "subgroup": "Decapod",
    "S": 0.55,
    "I": 0.38,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Shell negotiation, social hierarchy, learning"
  },
  {
    "name": "Lobster",
    "group": "Crustacean",
    "subgroup": "Decapod",
    "S": 0.58,
    "I": 0.38,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Social hierarchy, dominance, serotonin system"
  },
  {
    "name": "Crayfish",
    "group": "Crustacean",
    "subgroup": "Decapod",
    "S": 0.55,
    "I": 0.38,
    "U": 0.4,
    "confidence": "MEDIUM",
    "notes": "Anxiety-like behavior, social defeat stress, learning"
  },
  {
    "name": "C. elegans",
    "group": "Nematode",
    "subgroup": "Nematode",
    "S": 0.4,
    "I": 0.5,
    "U": 0.55,
    "confidence": "HIGH",
    "notes": "302 neurons fully mapped, 25 innexin genes, learning, sleep"
  },
  {
    "name": "Earthworm",
    "group": "Annelid",
    "subgroup": "Oligochaeta",
    "S": 0.4,
    "I": 0.3,
    "U": 0.32,
    "confidence": "LOW",
    "notes": "Segmental ganglia, photoreception, learning (T-maze)"
  },
  {
    "name": "Leech",
    "group": "Annelid",
    "subgroup": "Hirudinea",
    "S": 0.42,
    "I": 0.32,
    "U": 0.32,
    "confidence": "MEDIUM",
    "notes": "Well-studied nervous system, swimming CPGs, decision making"
  },
  {
    "name": "Planarian",
    "group": "Flatworm",
    "subgroup": "Turbellaria",
    "S": 0.35,
    "I": 0.28,
    "U": 0.3,
    "confidence": "MEDIUM",
    "notes": "Simple cephalization, light avoidance learning, memory survives regeneration"
  },
  {
    "name": "Box jellyfish",
    "group": "Cnidarian",
    "subgroup": "Cubozoa",
    "S": 0.9,
    "I": 0.15,
    "U": 0.25,
    "confidence": "MEDIUM",
    "notes": "24 eyes (4 types), 4 independent rhopalia, no central brain"
  },
  {
    "name": "Moon jellyfish",
    "group": "Cnidarian",
    "subgroup": "Scyphozoa",
    "S": 0.3,
    "I": 0.1,
    "U": 0.15,
    "confidence": "LOW",
    "notes": "Simple nerve net, basic photoreception, no brain"
  },
  {
    "name": "Hydra",
    "group": "Cnidarian",
    "subgroup": "Hydrozoa",
    "S": 0.25,
    "I": 0.12,
    "U": 0.18,
    "confidence": "MEDIUM",
    "notes": "Diffuse nerve net, sleep-like states, contractions"
  },
  {
    "name": "Sea anemone",
    "group": "Cnidarian",
    "subgroup": "Anthozoa",
    "S": 0.2,
    "I": 0.08,
    "U": 0.1,
    "confidence": "MEDIUM",
    "notes": "Zero innexin genes, no gap junctions, pure chemical signaling"
  },
  {
    "name": "Coral",
    "group": "Cnidarian",
    "subgroup": "Anthozoa",
    "S": 0.15,
    "I": 0.05,
    "U": 0.08,
    "confidence": "LOW",
    "notes": "Colonial, minimal nervous system, photoreception"
  },
  {
    "name": "Sponge",
    "group": "Porifera",
    "subgroup": "Porifera",
    "S": 0.1,
    "I": 0.03,
    "U": 0.05,
    "confidence": "MEDIUM",
    "notes": "No nervous system, some gene precursors for synapses"
  },
  {
    "name": "Starfish",
    "group": "Echinoderm",
    "subgroup": "Asteroid",
    "S": 0.35,
    "I": 0.15,
    "U": 0.18,
    "confidence": "LOW",
    "notes": "Radial nerve, eyespots on arms, no central brain"
  },
  {
    "name": "Sea urchin",
    "group": "Echinoderm",
    "subgroup": "Echinoid",
    "S": 0.3,
    "I": 0.12,
    "U": 0.15,
    "confidence": "LOW",
    "notes": "Photoreceptors distributed across body, spine coordination"
  },
  {
    "name": "Mimosa pudica",
    "group": "Plant",
    "subgroup": "Angiosperm",
    "S": 0.3,
    "I": 0.1,
    "U": 0.12,
    "confidence": "MEDIUM",
    "notes": "Touch response, habituation learning, electrical signaling"
  },
  {
    "name": "Venus flytrap",
    "group": "Plant",
    "subgroup": "Angiosperm",
    "S": 0.28,
    "I": 0.1,
    "U": 0.12,
    "confidence": "MEDIUM",
    "notes": "Counting (trigger hairs), electrical signaling, rapid response"
  },
  {
    "name": "Oak tree",
    "group": "Plant",
    "subgroup": "Angiosperm",
    "S": 0.22,
    "I": 0.05,
    "U": 0.08,
    "confidence": "LOW",
    "notes": "Light, gravity, touch, chemical, water, vibration sensing. Chemical defense signaling."
  },
  {
    "name": "Sunflower",
    "group": "Plant",
    "subgroup": "Angiosperm",
    "S": 0.25,
    "I": 0.05,
    "U": 0.08,
    "confidence": "LOW",
    "notes": "Heliotropism, circadian anticipation of sunrise"
  },
  {
    "name": "Physarum (slime mold)",
    "group": "Protist",
    "subgroup": "Myxomycete",
    "S": 0.3,
    "I": 0.25,
    "U": 0.55,
    "confidence": "MEDIUM",
    "notes": "Maze solving, network optimization, habituation, single-cell unity"
  },
  {
    "name": "Mycelial network (fungus)",
    "group": "Fungus",
    "subgroup": "Basidiomycete",
    "S": 0.25,
    "I": 0.18,
    "U": 0.22,
    "confidence": "LOW",
    "notes": "Electrical signaling, resource allocation, network topology"
  },
  {
    "name": "Paramecium",
    "group": "Protist",
    "subgroup": "Ciliate",
    "S": 0.2,
    "I": 0.15,
    "U": 0.45,
    "confidence": "MEDIUM",
    "notes": "Swimming reversal learning, calcium signaling, single cell = high U"
  },
  {
    "name": "Euglena",
    "group": "Protist",
    "subgroup": "Euglenoid",
    "S": 0.18,
    "I": 0.1,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Eyespot phototaxis, flagellar switching"
  },
  {
    "name": "Amoeba",
    "group": "Protist",
    "subgroup": "Amoebozoa",
    "S": 0.15,
    "I": 0.08,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Chemotaxis, phagocytosis decisions, single cell"
  },
  {
    "name": "Bacterium (E. coli)",
    "group": "Prokaryote",
    "subgroup": "Proteobacteria",
    "S": 0.12,
    "I": 0.05,
    "U": 0.3,
    "confidence": "MEDIUM",
    "notes": "Chemotaxis, quorum sensing, single cell"
  },
  {
    "name": "Cyanobacterium",
    "group": "Prokaryote",
    "subgroup": "Cyanobacteria",
    "S": 0.1,
    "I": 0.05,
    "U": 0.3,
    "confidence": "LOW",
    "notes": "Phototaxis, circadian clock, ancient lineage"
  },
  {
    "name": "Human (dreaming)",
    "group": "Mammal",
    "subgroup": "Great Ape",
    "S": 0.3,
    "I": 0.7,
    "U": 0.4,
    "confidence": "HIGH",
    "notes": "Reduced external, enhanced internal, variable unity"
  },
  {
    "name": "Human (anesthesia)",
    "group": "Mammal",
    "subgroup": "Great Ape",
    "S": 0.85,
    "I": 0.1,
    "U": 0.1,
    "confidence": "HIGH",
    "notes": "Sensors intact, integration disrupted, unity collapsed"
  },
  {
    "name": "Human (deep sleep)",
    "group": "Mammal",
    "subgroup": "Great Ape",
    "S": 0.1,
    "I": 0.55,
    "U": 0.4,
    "confidence": "HIGH",
    "notes": "Minimal sensing, some integration maintained, reduced unity"
  }
];