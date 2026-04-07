const SPECIES_DB = [
  {
    "name": "Human (awake)",
    "group": "Mammal",
    "subgroup": "Great Ape",
    "S": 0.85,
    "I": 0.95,
    "U": 0.95,
    "confidence": "HIGH",
    "notes": "Baseline reference"
  },
  {
    "name": "Chimpanzee",
    "group": "Mammal",
    "subgroup": "Great Ape",
    "S": 0.8,
    "I": 0.9,
    "U": 0.9,
    "confidence": "HIGH",
    "notes": "Tool manufacture, culture, warfare, mirror test"
  },
  {
    "name": "Orca",
    "group": "Mammal",
    "subgroup": "Cetacean",
    "S": 0.78,
    "I": 0.88,
    "U": 0.9,
    "confidence": "HIGH",
    "notes": "Cultural dialects, population-specific hunting, mourning, teaching"
  },
  {
    "name": "Bonobo",
    "group": "Mammal",
    "subgroup": "Great Ape",
    "S": 0.78,
    "I": 0.88,
    "U": 0.88,
    "confidence": "HIGH",
    "notes": "Symbol use (Kanzi), empathy, conflict resolution"
  },
  {
    "name": "Bottlenose dolphin",
    "group": "Mammal",
    "subgroup": "Cetacean",
    "S": 0.75,
    "I": 0.88,
    "U": 0.88,
    "confidence": "HIGH",
    "notes": "Name whistles, mirror test, cultural sponge tool use"
  },
  {
    "name": "Gorilla",
    "group": "Mammal",
    "subgroup": "Great Ape",
    "S": 0.78,
    "I": 0.85,
    "U": 0.85,
    "confidence": "HIGH",
    "notes": "Tool use, sign language (Koko, debated)"
  },
  {
    "name": "African elephant",
    "group": "Mammal",
    "subgroup": "Elephant",
    "S": 0.78,
    "I": 0.85,
    "U": 0.85,
    "confidence": "HIGH",
    "notes": "Mirror test, mourning rituals, bone visitation, infrasound"
  },
  {
    "name": "Orangutan",
    "group": "Mammal",
    "subgroup": "Great Ape",
    "S": 0.76,
    "I": 0.85,
    "U": 0.85,
    "confidence": "HIGH",
    "notes": "Most sophisticated tool manufacture, future planning, pantomime"
  },
  {
    "name": "Asian elephant",
    "group": "Mammal",
    "subgroup": "Elephant",
    "S": 0.76,
    "I": 0.83,
    "U": 0.84,
    "confidence": "HIGH",
    "notes": "Mirror test, body awareness, cooperative timing, vocal mimicry"
  },
  {
    "name": "New Caledonian crow",
    "group": "Bird",
    "subgroup": "Corvid",
    "S": 0.72,
    "I": 0.82,
    "U": 0.82,
    "confidence": "HIGH",
    "notes": "Hook tool manufacture, mental metatool representation"
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
    "name": "Sperm whale",
    "group": "Mammal",
    "subgroup": "Cetacean",
    "S": 0.72,
    "I": 0.8,
    "U": 0.82,
    "confidence": "MEDIUM",
    "notes": "Largest brain, clan dialects, communal calf care"
  },
  {
    "name": "Common raven",
    "group": "Bird",
    "subgroup": "Corvid",
    "S": 0.72,
    "I": 0.8,
    "U": 0.82,
    "confidence": "HIGH",
    "notes": "Future planning (tools+barter), theory of mind"
  },
  {
    "name": "Humpback whale",
    "group": "Mammal",
    "subgroup": "Cetacean",
    "S": 0.7,
    "I": 0.78,
    "U": 0.8,
    "confidence": "MEDIUM",
    "notes": "Song culture, cross-species altruism, bubble net cooperation"
  },
  {
    "name": "African grey parrot",
    "group": "Bird",
    "subgroup": "Parrot",
    "S": 0.7,
    "I": 0.78,
    "U": 0.8,
    "confidence": "HIGH",
    "notes": "Alex: 100 objects, zero concept, 'What color am I?'"
  },
  {
    "name": "American crow",
    "group": "Bird",
    "subgroup": "Corvid",
    "S": 0.7,
    "I": 0.78,
    "U": 0.78,
    "confidence": "HIGH",
    "notes": "Cultural face recognition transmission, funerals"
  },
  {
    "name": "Capuchin monkey",
    "group": "Mammal",
    "subgroup": "Primate",
    "S": 0.72,
    "I": 0.75,
    "U": 0.78,
    "confidence": "HIGH",
    "notes": "3000-year tool record, fairness sensitivity, bartering"
  },
  {
    "name": "Wolf",
    "group": "Mammal",
    "subgroup": "Canid",
    "S": 0.78,
    "I": 0.72,
    "U": 0.75,
    "confidence": "MEDIUM",
    "notes": "Pack hunting with roles, complex social hierarchy"
  },
  {
    "name": "Beluga whale",
    "group": "Mammal",
    "subgroup": "Cetacean",
    "S": 0.7,
    "I": 0.75,
    "U": 0.78,
    "confidence": "MEDIUM",
    "notes": "Vocal mimicry of human speech"
  },
  {
    "name": "Eurasian magpie",
    "group": "Bird",
    "subgroup": "Corvid",
    "S": 0.7,
    "I": 0.75,
    "U": 0.78,
    "confidence": "HIGH",
    "notes": "First non-mammal mirror test (Prior 2008)"
  },
  {
    "name": "Hooded crow",
    "group": "Bird",
    "subgroup": "Corvid",
    "S": 0.7,
    "I": 0.75,
    "U": 0.78,
    "confidence": "MEDIUM",
    "notes": "NEURAL EVIDENCE of subjective experience (Nieder 2020 Science)"
  },
  {
    "name": "Paper wasp (Polistes)",
    "group": "Insect",
    "subgroup": "Social Hymenoptera",
    "S": 0.7,
    "I": 0.75,
    "U": 0.78,
    "confidence": "MEDIUM",
    "notes": "Face recognition via configural processing, transitive inference"
  },
  {
    "name": "Dog (domestic)",
    "group": "Mammal",
    "subgroup": "Canid",
    "S": 0.75,
    "I": 0.72,
    "U": 0.75,
    "confidence": "HIGH",
    "notes": "1000+ word vocabulary, human emotion reading, pointing"
  },
  {
    "name": "Bat (echolocating)",
    "group": "Mammal",
    "subgroup": "Chiroptera",
    "S": 0.85,
    "I": 0.68,
    "U": 0.7,
    "confidence": "MEDIUM",
    "notes": "3D spatial mapping via echolocation, vocal learning"
  },
  {
    "name": "Eurasian jay",
    "group": "Bird",
    "subgroup": "Corvid",
    "S": 0.7,
    "I": 0.75,
    "U": 0.76,
    "confidence": "HIGH",
    "notes": "Episodic memory, desire-state attribution, experience-projection"
  },
  {
    "name": "Kea",
    "group": "Bird",
    "subgroup": "Parrot",
    "S": 0.7,
    "I": 0.75,
    "U": 0.76,
    "confidence": "MEDIUM",
    "notes": "Probability reasoning, extreme neophilia, play"
  },
  {
    "name": "Honeybee",
    "group": "Insect",
    "subgroup": "Social Hymenoptera",
    "S": 0.72,
    "I": 0.72,
    "U": 0.75,
    "confidence": "HIGH",
    "notes": "Waggle dance, zero concept, optimism/pessimism bias"
  },
  {
    "name": "Cuttlefish",
    "group": "Cephalopod",
    "subgroup": "Sepiid",
    "S": 0.78,
    "I": 0.68,
    "U": 0.72,
    "confidence": "MEDIUM",
    "notes": "Camouflage communication, episodic memory, self-control"
  },
  {
    "name": "Lion",
    "group": "Mammal",
    "subgroup": "Felid",
    "S": 0.78,
    "I": 0.68,
    "U": 0.72,
    "confidence": "MEDIUM",
    "notes": "Counts rival numbers by roars, cooperative hunting"
  },
  {
    "name": "Rhesus macaque",
    "group": "Mammal",
    "subgroup": "Primate",
    "S": 0.72,
    "I": 0.72,
    "U": 0.72,
    "confidence": "HIGH",
    "notes": "Metacognition (opt-out when uncertain)"
  },
  {
    "name": "Baboon",
    "group": "Mammal",
    "subgroup": "Primate",
    "S": 0.72,
    "I": 0.72,
    "U": 0.72,
    "confidence": "MEDIUM",
    "notes": "Complex alliance politics, analogical reasoning"
  },
  {
    "name": "Hyena (spotted)",
    "group": "Mammal",
    "subgroup": "Carnivore",
    "S": 0.72,
    "I": 0.72,
    "U": 0.72,
    "confidence": "MEDIUM",
    "notes": "Outperforms chimps on cooperative tasks"
  },
  {
    "name": "Sulphur-crested cockatoo",
    "group": "Bird",
    "subgroup": "Parrot",
    "S": 0.7,
    "I": 0.72,
    "U": 0.74,
    "confidence": "MEDIUM",
    "notes": "Bin-opening culture across Sydney (2021 Science), 14 dance moves"
  },
  {
    "name": "Pig",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.72,
    "I": 0.7,
    "U": 0.72,
    "confidence": "HIGH",
    "notes": "Mirror-guided food finding, joystick operation"
  },
  {
    "name": "Leafcutter ant",
    "group": "Insect",
    "subgroup": "Social Hymenoptera",
    "S": 0.62,
    "I": 0.72,
    "U": 0.8,
    "confidence": "MEDIUM",
    "notes": "Fungal agriculture with antibiotics, 4+ castes"
  },
  {
    "name": "Raccoon",
    "group": "Mammal",
    "subgroup": "Carnivore",
    "S": 0.75,
    "I": 0.68,
    "U": 0.7,
    "confidence": "MEDIUM",
    "notes": "Complex latch opening, 3-year task memory"
  },
  {
    "name": "Dragonfly",
    "group": "Insect",
    "subgroup": "Odonata",
    "S": 0.88,
    "I": 0.62,
    "U": 0.65,
    "confidence": "MEDIUM",
    "notes": "95% hunting success, predictive interception (Nature 2015)"
  },
  {
    "name": "Jackdaw",
    "group": "Bird",
    "subgroup": "Corvid",
    "S": 0.68,
    "I": 0.72,
    "U": 0.72,
    "confidence": "MEDIUM",
    "notes": "Gaze following, collective flock decisions"
  },
  {
    "name": "Rook",
    "group": "Bird",
    "subgroup": "Corvid",
    "S": 0.68,
    "I": 0.72,
    "U": 0.72,
    "confidence": "HIGH",
    "notes": "Water displacement understanding (Aesop's fable)"
  },
  {
    "name": "Goffin's cockatoo",
    "group": "Bird",
    "subgroup": "Parrot",
    "S": 0.68,
    "I": 0.72,
    "U": 0.72,
    "confidence": "HIGH",
    "notes": "Makes and carries tool kits, 5-step lock picking"
  },
  {
    "name": "Desert ant (Cataglyphis)",
    "group": "Insect",
    "subgroup": "Social Hymenoptera",
    "S": 0.68,
    "I": 0.72,
    "U": 0.72,
    "confidence": "HIGH",
    "notes": "Pedometer + polarization compass, Wittlinger stilts experiment"
  },
  {
    "name": "Tiger",
    "group": "Mammal",
    "subgroup": "Felid",
    "S": 0.78,
    "I": 0.65,
    "U": 0.68,
    "confidence": "LOW",
    "notes": "Infrasound vocalization, huge territory management"
  },
  {
    "name": "Harris's hawk",
    "group": "Bird",
    "subgroup": "Raptor",
    "S": 0.78,
    "I": 0.65,
    "U": 0.68,
    "confidence": "MEDIUM",
    "notes": "Only raptor with cooperative pack hunting"
  },
  {
    "name": "Sea otter",
    "group": "Mammal",
    "subgroup": "Marine mammal",
    "S": 0.72,
    "I": 0.68,
    "U": 0.7,
    "confidence": "MEDIUM",
    "notes": "Stone tool use with individual rock preference"
  },
  {
    "name": "Rat",
    "group": "Mammal",
    "subgroup": "Rodent",
    "S": 0.72,
    "I": 0.68,
    "U": 0.7,
    "confidence": "HIGH",
    "notes": "Empathic rescue, regret, metacognition, ultrasonic laughter"
  },
  {
    "name": "Clark's nutcracker",
    "group": "Bird",
    "subgroup": "Corvid",
    "S": 0.68,
    "I": 0.72,
    "U": 0.7,
    "confidence": "MEDIUM",
    "notes": "33,000 cache locations across months"
  },
  {
    "name": "Indian house crow",
    "group": "Bird",
    "subgroup": "Corvid",
    "S": 0.68,
    "I": 0.7,
    "U": 0.72,
    "confidence": "MEDIUM",
    "notes": "Mirror test passed, extreme urban adaptability"
  },
  {
    "name": "Fish crow",
    "group": "Bird",
    "subgroup": "Corvid",
    "S": 0.68,
    "I": 0.7,
    "U": 0.72,
    "confidence": "LOW",
    "notes": "Corvid-typical cognition"
  },
  {
    "name": "Bumblebee",
    "group": "Insect",
    "subgroup": "Social Hymenoptera",
    "S": 0.7,
    "I": 0.68,
    "U": 0.72,
    "confidence": "HIGH",
    "notes": "First insect play behavior, two-step social learning (2024)"
  },
  {
    "name": "Golden eagle",
    "group": "Bird",
    "subgroup": "Raptor",
    "S": 0.85,
    "I": 0.62,
    "U": 0.65,
    "confidence": "MEDIUM",
    "notes": "4-8x human visual acuity, flexible hunting strategies"
  },
  {
    "name": "Jumping spider",
    "group": "Arachnid",
    "subgroup": "Salticidae",
    "S": 0.75,
    "I": 0.65,
    "U": 0.7,
    "confidence": "HIGH",
    "notes": "Route planning, deception hunting, attention"
  },
  {
    "name": "Macaw",
    "group": "Bird",
    "subgroup": "Parrot",
    "S": 0.7,
    "I": 0.68,
    "U": 0.7,
    "confidence": "MEDIUM",
    "notes": "Lifelong pair bonds, regional dialects"
  },
  {
    "name": "Narwhal",
    "group": "Mammal",
    "subgroup": "Cetacean",
    "S": 0.68,
    "I": 0.68,
    "U": 0.72,
    "confidence": "LOW",
    "notes": "Tusk = 10M nerve ending sensory organ"
  },
  {
    "name": "Striated caracara",
    "group": "Bird",
    "subgroup": "Raptor",
    "S": 0.72,
    "I": 0.68,
    "U": 0.68,
    "confidence": "MEDIUM",
    "notes": "Outperforms cockatoos on problem-solving"
  },
  {
    "name": "Mantis shrimp",
    "group": "Crustacean",
    "subgroup": "Stomatopod",
    "S": 0.92,
    "I": 0.58,
    "U": 0.62,
    "confidence": "MEDIUM",
    "notes": "16 color receptors, individual recognition"
  },
  {
    "name": "Spider monkey",
    "group": "Mammal",
    "subgroup": "Primate",
    "S": 0.7,
    "I": 0.68,
    "U": 0.68,
    "confidence": "LOW",
    "notes": "Fission-fusion social system"
  },
  {
    "name": "Bear (grizzly)",
    "group": "Mammal",
    "subgroup": "Carnivore",
    "S": 0.72,
    "I": 0.65,
    "U": 0.68,
    "confidence": "LOW",
    "notes": "Individual fishing techniques, extraordinary olfaction"
  },
  {
    "name": "Horse",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.72,
    "I": 0.65,
    "U": 0.68,
    "confidence": "MEDIUM",
    "notes": "Reads human emotions from photos, symbol communication"
  },
  {
    "name": "Bat (fruit/flying fox)",
    "group": "Mammal",
    "subgroup": "Chiroptera",
    "S": 0.72,
    "I": 0.65,
    "U": 0.68,
    "confidence": "MEDIUM",
    "notes": "Reciprocal altruism with bookkeeping"
  },
  {
    "name": "Peregrine falcon",
    "group": "Bird",
    "subgroup": "Raptor",
    "S": 0.85,
    "I": 0.6,
    "U": 0.62,
    "confidence": "MEDIUM",
    "notes": "Fastest animal, ballistic stoop at 390 km/h"
  },
  {
    "name": "Cat (domestic)",
    "group": "Mammal",
    "subgroup": "Felid",
    "S": 0.78,
    "I": 0.62,
    "U": 0.65,
    "confidence": "MEDIUM",
    "notes": "Object permanence, individual human voice recognition"
  },
  {
    "name": "Weaver ant",
    "group": "Insect",
    "subgroup": "Social Hymenoptera",
    "S": 0.6,
    "I": 0.68,
    "U": 0.75,
    "confidence": "LOW",
    "notes": "Living chains for construction, larval silk gluing"
  },
  {
    "name": "Marmoset",
    "group": "Mammal",
    "subgroup": "Primate",
    "S": 0.68,
    "I": 0.65,
    "U": 0.68,
    "confidence": "MEDIUM",
    "notes": "Vocal turn-taking, cooperative breeding"
  },
  {
    "name": "Great horned owl",
    "group": "Bird",
    "subgroup": "Owl",
    "S": 0.82,
    "I": 0.58,
    "U": 0.62,
    "confidence": "LOW",
    "notes": "Hunts in total darkness by sound alone"
  },
  {
    "name": "Sea lion",
    "group": "Mammal",
    "subgroup": "Marine mammal",
    "S": 0.7,
    "I": 0.62,
    "U": 0.65,
    "confidence": "MEDIUM",
    "notes": "Logical syllogistic reasoning, musical beat-keeping"
  },
  {
    "name": "Cheetah",
    "group": "Mammal",
    "subgroup": "Felid",
    "S": 0.75,
    "I": 0.6,
    "U": 0.62,
    "confidence": "LOW",
    "notes": "70 mph pursuit with real-time trajectory adjustment"
  },
  {
    "name": "Army ant",
    "group": "Insect",
    "subgroup": "Social Hymenoptera",
    "S": 0.55,
    "I": 0.65,
    "U": 0.78,
    "confidence": "LOW",
    "notes": "Living architecture, swarm intelligence, mostly blind"
  },
  {
    "name": "Fox (red)",
    "group": "Mammal",
    "subgroup": "Canid",
    "S": 0.72,
    "I": 0.62,
    "U": 0.62,
    "confidence": "LOW",
    "notes": "Magnetic-aligned pouncing, hundreds of cache memories"
  },
  {
    "name": "Stingless bee",
    "group": "Insect",
    "subgroup": "Social Hymenoptera",
    "S": 0.65,
    "I": 0.62,
    "U": 0.68,
    "confidence": "LOW",
    "notes": "Pulsed sound communication, understudied"
  },
  {
    "name": "Eclectus parrot",
    "group": "Bird",
    "subgroup": "Parrot",
    "S": 0.68,
    "I": 0.62,
    "U": 0.65,
    "confidence": "LOW",
    "notes": "Extreme sexual dimorphism, polyandrous"
  },
  {
    "name": "Fire ant",
    "group": "Insect",
    "subgroup": "Social Hymenoptera",
    "S": 0.6,
    "I": 0.62,
    "U": 0.72,
    "confidence": "MEDIUM",
    "notes": "Self-assembling living rafts"
  },
  {
    "name": "Praying mantis",
    "group": "Insect",
    "subgroup": "Mantodea",
    "S": 0.78,
    "I": 0.58,
    "U": 0.58,
    "confidence": "MEDIUM",
    "notes": "Only insect with true 3D vision (confirmed with 3D glasses)"
  },
  {
    "name": "Yellowjacket",
    "group": "Insect",
    "subgroup": "Social Hymenoptera",
    "S": 0.65,
    "I": 0.62,
    "U": 0.65,
    "confidence": "LOW",
    "notes": "Flexible scavenger"
  },
  {
    "name": "Platypus",
    "group": "Mammal",
    "subgroup": "Monotreme",
    "S": 0.82,
    "I": 0.55,
    "U": 0.58,
    "confidence": "MEDIUM",
    "notes": "40,000 electroreceptors, hunts blind using only bill"
  },
  {
    "name": "Barn owl",
    "group": "Bird",
    "subgroup": "Owl",
    "S": 0.82,
    "I": 0.55,
    "U": 0.58,
    "confidence": "MEDIUM",
    "notes": "Most studied auditory spatial system"
  },
  {
    "name": "Wolverine",
    "group": "Mammal",
    "subgroup": "Carnivore",
    "S": 0.7,
    "I": 0.6,
    "U": 0.62,
    "confidence": "LOW",
    "notes": "Manages caches across 1500 km2, defeats traps"
  },
  {
    "name": "Rock pigeon",
    "group": "Bird",
    "subgroup": "Pigeon",
    "S": 0.7,
    "I": 0.6,
    "U": 0.62,
    "confidence": "HIGH",
    "notes": "Monet vs Picasso discrimination, numerical competence matches primates"
  },
  {
    "name": "Lemur (ring-tailed)",
    "group": "Mammal",
    "subgroup": "Prosimian",
    "S": 0.68,
    "I": 0.6,
    "U": 0.62,
    "confidence": "MEDIUM",
    "notes": "Scent-based social communication"
  },
  {
    "name": "Mouse",
    "group": "Mammal",
    "subgroup": "Rodent",
    "S": 0.68,
    "I": 0.6,
    "U": 0.62,
    "confidence": "HIGH",
    "notes": "Emotional contagion (pain empathy)"
  },
  {
    "name": "European starling",
    "group": "Bird",
    "subgroup": "Songbird",
    "S": 0.68,
    "I": 0.6,
    "U": 0.62,
    "confidence": "MEDIUM",
    "notes": "Recursive grammar recognition (controversial), murmuration"
  },
  {
    "name": "Lyrebird",
    "group": "Bird",
    "subgroup": "Songbird",
    "S": 0.68,
    "I": 0.6,
    "U": 0.62,
    "confidence": "LOW",
    "notes": "Most complex vocal mimicry in nature"
  },
  {
    "name": "Asian giant hornet",
    "group": "Insect",
    "subgroup": "Social Hymenoptera",
    "S": 0.68,
    "I": 0.6,
    "U": 0.62,
    "confidence": "LOW",
    "notes": "Coordinated multi-phase group raids"
  },
  {
    "name": "Squirrel",
    "group": "Mammal",
    "subgroup": "Rodent",
    "S": 0.72,
    "I": 0.58,
    "U": 0.6,
    "confidence": "MEDIUM",
    "notes": "Deceptive fake caching, thousands of cache sites"
  },
  {
    "name": "Cow",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.68,
    "I": 0.58,
    "U": 0.62,
    "confidence": "MEDIUM",
    "notes": "Excitement when solving problems, best friend bonds"
  },
  {
    "name": "Acorn woodpecker",
    "group": "Bird",
    "subgroup": "Woodpecker",
    "S": 0.68,
    "I": 0.58,
    "U": 0.62,
    "confidence": "LOW",
    "notes": "50,000-acorn granary management"
  },
  {
    "name": "Budgerigar",
    "group": "Bird",
    "subgroup": "Parrot",
    "S": 0.65,
    "I": 0.6,
    "U": 0.62,
    "confidence": "MEDIUM",
    "notes": "100+ word vocabulary, grammar-like patterns"
  },
  {
    "name": "Jewel wasp",
    "group": "Insect",
    "subgroup": "Solitary Hymenoptera",
    "S": 0.65,
    "I": 0.62,
    "U": 0.6,
    "confidence": "MEDIUM",
    "notes": "Targeted neurosurgery on cockroach brain"
  },
  {
    "name": "Seal (harbor)",
    "group": "Mammal",
    "subgroup": "Marine mammal",
    "S": 0.68,
    "I": 0.58,
    "U": 0.6,
    "confidence": "LOW",
    "notes": "Hoover mimicked human speech, whisker trail-following"
  },
  {
    "name": "Beaver",
    "group": "Mammal",
    "subgroup": "Rodent",
    "S": 0.65,
    "I": 0.58,
    "U": 0.62,
    "confidence": "LOW",
    "notes": "Dam engineering, repair by sound"
  },
  {
    "name": "Squid",
    "group": "Cephalopod",
    "subgroup": "Teuthid",
    "S": 0.72,
    "I": 0.55,
    "U": 0.58,
    "confidence": "LOW",
    "notes": "Giant axons, fast predation"
  },
  {
    "name": "Ruby-throated hummingbird",
    "group": "Bird",
    "subgroup": "Hummingbird",
    "S": 0.72,
    "I": 0.55,
    "U": 0.58,
    "confidence": "MEDIUM",
    "notes": "Trapline optimization with temporal memory, Gulf crossing"
  },
  {
    "name": "Anna's hummingbird",
    "group": "Bird",
    "subgroup": "Hummingbird",
    "S": 0.72,
    "I": 0.55,
    "U": 0.58,
    "confidence": "LOW",
    "notes": "10G courtship dive, vocal learning"
  },
  {
    "name": "Orchid mantis",
    "group": "Insect",
    "subgroup": "Mantodea",
    "S": 0.75,
    "I": 0.55,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Aggressive flower mimicry"
  },
  {
    "name": "Zebra finch",
    "group": "Bird",
    "subgroup": "Songbird",
    "S": 0.65,
    "I": 0.58,
    "U": 0.6,
    "confidence": "HIGH",
    "notes": "Primary model for vocal learning neuroscience"
  },
  {
    "name": "Emperor penguin",
    "group": "Bird",
    "subgroup": "Penguin",
    "S": 0.68,
    "I": 0.55,
    "U": 0.6,
    "confidence": "LOW",
    "notes": "Mate recognition in 5000+ colony, huddling rotation"
  },
  {
    "name": "Damselfly",
    "group": "Insect",
    "subgroup": "Odonata",
    "S": 0.78,
    "I": 0.52,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Smaller dragonfly cousin"
  },
  {
    "name": "Marsh tit",
    "group": "Bird",
    "subgroup": "Songbird",
    "S": 0.65,
    "I": 0.58,
    "U": 0.58,
    "confidence": "MEDIUM",
    "notes": "Caches 100s of items daily, enlarged hippocampus"
  },
  {
    "name": "Archer fish",
    "group": "Fish",
    "subgroup": "Toxotidae",
    "S": 0.72,
    "I": 0.58,
    "U": 0.52,
    "confidence": "HIGH",
    "notes": "PREDICTION: 44+ human face discrimination, view-invariant recognition, social learning"
  },
  {
    "name": "Sandhill crane",
    "group": "Bird",
    "subgroup": "Crane",
    "S": 0.68,
    "I": 0.55,
    "U": 0.58,
    "confidence": "LOW",
    "notes": "Lifelong pair bonds, teaches migration routes"
  },
  {
    "name": "Southern ground hornbill",
    "group": "Bird",
    "subgroup": "Hornbill",
    "S": 0.68,
    "I": 0.55,
    "U": 0.58,
    "confidence": "LOW",
    "notes": "Tool use, 50+ year lifespan, cooperative breeding"
  },
  {
    "name": "Termite",
    "group": "Insect",
    "subgroup": "Blattodea",
    "S": 0.55,
    "I": 0.6,
    "U": 0.65,
    "confidence": "LOW",
    "notes": "Colony temperature regulation within 1 degree"
  },
  {
    "name": "Sheep",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.65,
    "I": 0.55,
    "U": 0.58,
    "confidence": "MEDIUM",
    "notes": "Remember 50+ faces for 2+ years, self-medication"
  },
  {
    "name": "Goat",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.65,
    "I": 0.55,
    "U": 0.58,
    "confidence": "MEDIUM",
    "notes": "10-month puzzle memory, human emotion recognition"
  },
  {
    "name": "Elephant seal",
    "group": "Mammal",
    "subgroup": "Marine mammal",
    "S": 0.65,
    "I": 0.55,
    "U": 0.58,
    "confidence": "LOW",
    "notes": "Individual vocal recognition with relationship-dependent response"
  },
  {
    "name": "Walrus",
    "group": "Mammal",
    "subgroup": "Marine mammal",
    "S": 0.65,
    "I": 0.55,
    "U": 0.58,
    "confidence": "LOW",
    "notes": "400+ hyper-sensitive whiskers, vocal learning"
  },
  {
    "name": "Chicken",
    "group": "Bird",
    "subgroup": "Gamebird",
    "S": 0.65,
    "I": 0.55,
    "U": 0.58,
    "confidence": "MEDIUM",
    "notes": "Referential alarm calls, self-control, emotional contagion, deception"
  },
  {
    "name": "Carpenter bee",
    "group": "Insect",
    "subgroup": "Solitary Hymenoptera",
    "S": 0.65,
    "I": 0.55,
    "U": 0.58,
    "confidence": "LOW",
    "notes": "Trapline foraging optimization"
  },
  {
    "name": "Cleaner wrasse",
    "group": "Fish",
    "subgroup": "Wrasse",
    "S": 0.65,
    "I": 0.55,
    "U": 0.58,
    "confidence": "HIGH",
    "notes": "Mirror test, contingency testing, face recognition, self-model (Sogawa 2026)"
  },
  {
    "name": "Manta ray",
    "group": "Fish",
    "subgroup": "Mobulidae",
    "S": 0.65,
    "I": 0.55,
    "U": 0.58,
    "confidence": "MEDIUM",
    "notes": "Largest fish brain, anecdotal mirror behavior, needs formal testing"
  },
  {
    "name": "Tarsier",
    "group": "Mammal",
    "subgroup": "Prosimian",
    "S": 0.72,
    "I": 0.52,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Largest eyes relative to body, ultrasonic communication"
  },
  {
    "name": "Burrowing owl",
    "group": "Bird",
    "subgroup": "Owl",
    "S": 0.72,
    "I": 0.52,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Uses dung to bait insect prey"
  },
  {
    "name": "Heron (great blue)",
    "group": "Bird",
    "subgroup": "Waterbird",
    "S": 0.72,
    "I": 0.52,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Bait fishing = tool use"
  },
  {
    "name": "Robber fly",
    "group": "Insect",
    "subgroup": "Diptera",
    "S": 0.72,
    "I": 0.52,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Convergent aerial predator"
  },
  {
    "name": "Giraffe",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.68,
    "I": 0.52,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Recently discovered social complexity, grandmother bonds"
  },
  {
    "name": "Kangaroo",
    "group": "Mammal",
    "subgroup": "Marsupial",
    "S": 0.68,
    "I": 0.52,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Gaze alternation with humans (previously thought dog/primate only)"
  },
  {
    "name": "Rabbit",
    "group": "Mammal",
    "subgroup": "Lagomorph",
    "S": 0.68,
    "I": 0.52,
    "U": 0.55,
    "confidence": "MEDIUM",
    "notes": "Play behavior (binkying), near-panoramic vision"
  },
  {
    "name": "Song sparrow",
    "group": "Bird",
    "subgroup": "Songbird",
    "S": 0.62,
    "I": 0.55,
    "U": 0.55,
    "confidence": "MEDIUM",
    "notes": "Dear enemy recognition, song matching"
  },
  {
    "name": "Grouper (coral)",
    "group": "Fish",
    "subgroup": "Serranidae",
    "S": 0.62,
    "I": 0.55,
    "U": 0.55,
    "confidence": "HIGH",
    "notes": "PREDICTION: referential gestures (Nature Comms 2013), cooperative hunting with moray eels"
  },
  {
    "name": "Kakapo",
    "group": "Bird",
    "subgroup": "Parrot",
    "S": 0.62,
    "I": 0.52,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Critically endangered (247 alive), nocturnal flightless"
  },
  {
    "name": "Canary",
    "group": "Bird",
    "subgroup": "Songbird",
    "S": 0.62,
    "I": 0.52,
    "U": 0.55,
    "confidence": "MEDIUM",
    "notes": "Seasonal neurogenesis (foundational neuroscience discovery)"
  },
  {
    "name": "Deer",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.68,
    "I": 0.5,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Switches to nocturnal during hunting season"
  },
  {
    "name": "Opossum",
    "group": "Mammal",
    "subgroup": "Marsupial",
    "S": 0.65,
    "I": 0.5,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Death feigning, oldest marsupial lineage in N America"
  },
  {
    "name": "Tasmanian devil",
    "group": "Mammal",
    "subgroup": "Marsupial",
    "S": 0.65,
    "I": 0.5,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Social complexity underestimated"
  },
  {
    "name": "Adelie penguin",
    "group": "Bird",
    "subgroup": "Penguin",
    "S": 0.65,
    "I": 0.5,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Pebble theft"
  },
  {
    "name": "Common cuckoo",
    "group": "Bird",
    "subgroup": "Cuckoo",
    "S": 0.65,
    "I": 0.52,
    "U": 0.5,
    "confidence": "MEDIUM",
    "notes": "Brood parasitism with host-matching egg mimicry"
  },
  {
    "name": "Fruit fly (Drosophila)",
    "group": "Insect",
    "subgroup": "Diptera",
    "S": 0.55,
    "I": 0.58,
    "U": 0.52,
    "confidence": "HIGH",
    "notes": "Selective attention (20-30 Hz), connectome nearly complete"
  },
  {
    "name": "Echidna",
    "group": "Mammal",
    "subgroup": "Monotreme",
    "S": 0.68,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Largest relative prefrontal cortex of ANY mammal"
  },
  {
    "name": "Naked mole-rat",
    "group": "Mammal",
    "subgroup": "Rodent",
    "S": 0.5,
    "I": 0.52,
    "U": 0.6,
    "confidence": "MEDIUM",
    "notes": "Only eusocial mammal, colony dialects"
  },
  {
    "name": "Cockroach",
    "group": "Insect",
    "subgroup": "Blattodea",
    "S": 0.62,
    "I": 0.5,
    "U": 0.5,
    "confidence": "MEDIUM",
    "notes": "Central complex as command hub (wasp venom evidence)"
  },
  {
    "name": "Greater flamingo",
    "group": "Bird",
    "subgroup": "Flamingo",
    "S": 0.62,
    "I": 0.48,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Friendships lasting decades"
  },
  {
    "name": "Greylag goose",
    "group": "Bird",
    "subgroup": "Waterbird",
    "S": 0.62,
    "I": 0.48,
    "U": 0.52,
    "confidence": "MEDIUM",
    "notes": "Lorenz's species, triadic awareness, grief"
  },
  {
    "name": "Mole (star-nosed)",
    "group": "Mammal",
    "subgroup": "Insectivore",
    "S": 0.65,
    "I": 0.48,
    "U": 0.48,
    "confidence": "MEDIUM",
    "notes": "Fastest foraging decision (120 ms), underwater smelling"
  },
  {
    "name": "Elephant shrew",
    "group": "Mammal",
    "subgroup": "Insectivore",
    "S": 0.62,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Builds and maintains escape trail networks"
  },
  {
    "name": "Turkey",
    "group": "Bird",
    "subgroup": "Gamebird",
    "S": 0.62,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Male display coalitions"
  },
  {
    "name": "Mud dauber",
    "group": "Insect",
    "subgroup": "Solitary Hymenoptera",
    "S": 0.6,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Nest construction with spatial memory"
  },
  {
    "name": "Hoverfly",
    "group": "Insect",
    "subgroup": "Diptera",
    "S": 0.62,
    "I": 0.48,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "Precision hovering, Batesian mimicry"
  },
  {
    "name": "Dung beetle",
    "group": "Insect",
    "subgroup": "Coleoptera",
    "S": 0.62,
    "I": 0.48,
    "U": 0.48,
    "confidence": "MEDIUM",
    "notes": "First animal to navigate by Milky Way"
  },
  {
    "name": "Hammerhead shark",
    "group": "Fish",
    "subgroup": "Sphyrnidae",
    "S": 0.8,
    "I": 0.42,
    "U": 0.42,
    "confidence": "LOW",
    "notes": "Enhanced electroreception via cephalofoil, unusual schooling"
  },
  {
    "name": "Arctic tern",
    "group": "Bird",
    "subgroup": "Seabird",
    "S": 0.65,
    "I": 0.45,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "71,000 km annual migration (longest animal)"
  },
  {
    "name": "Monarch butterfly",
    "group": "Insect",
    "subgroup": "Lepidoptera",
    "S": 0.65,
    "I": 0.45,
    "U": 0.48,
    "confidence": "MEDIUM",
    "notes": "3000+ mile time-compensated sun compass migration"
  },
  {
    "name": "Electric eel",
    "group": "Fish",
    "subgroup": "Gymnotidae",
    "S": 0.65,
    "I": 0.48,
    "U": 0.45,
    "confidence": "LOW",
    "notes": "Electrogenesis for multiple functions, remote-controls prey"
  },
  {
    "name": "Cichlid (Midas/Oscar)",
    "group": "Fish",
    "subgroup": "Cichlidae",
    "S": 0.58,
    "I": 0.5,
    "U": 0.48,
    "confidence": "MEDIUM",
    "notes": "Reported play behavior, strong personalities, individual human recognition"
  },
  {
    "name": "Great white shark",
    "group": "Fish",
    "subgroup": "Lamnidae",
    "S": 0.78,
    "I": 0.42,
    "U": 0.42,
    "confidence": "LOW",
    "notes": "Extraordinary sensing, breach attack planning"
  },
  {
    "name": "Porcupine",
    "group": "Mammal",
    "subgroup": "Rodent",
    "S": 0.62,
    "I": 0.45,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "Understudied, basic spatial memory"
  },
  {
    "name": "Hedgehog",
    "group": "Mammal",
    "subgroup": "Insectivore",
    "S": 0.62,
    "I": 0.45,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "Self-anointing with toxins"
  },
  {
    "name": "Mourning dove",
    "group": "Bird",
    "subgroup": "Pigeon",
    "S": 0.62,
    "I": 0.45,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "Pair bonding, understudied"
  },
  {
    "name": "Mallard duck",
    "group": "Bird",
    "subgroup": "Waterbird",
    "S": 0.62,
    "I": 0.45,
    "U": 0.48,
    "confidence": "MEDIUM",
    "notes": "Ducklings learn abstract same/different (2016 Science)"
  },
  {
    "name": "Wrasse (Napoleon)",
    "group": "Fish",
    "subgroup": "Labridae",
    "S": 0.58,
    "I": 0.48,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "Cooperative hunting with groupers, individual human recognition"
  },
  {
    "name": "Shrew",
    "group": "Mammal",
    "subgroup": "Insectivore",
    "S": 0.6,
    "I": 0.45,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "Some species echolocate, must eat constantly"
  },
  {
    "name": "Quail (Japanese)",
    "group": "Bird",
    "subgroup": "Gamebird",
    "S": 0.6,
    "I": 0.45,
    "U": 0.48,
    "confidence": "MEDIUM",
    "notes": "Major research model"
  },
  {
    "name": "Grasshopper/Locust",
    "group": "Insect",
    "subgroup": "Orthoptera",
    "S": 0.6,
    "I": 0.45,
    "U": 0.48,
    "confidence": "MEDIUM",
    "notes": "Phase polyphenism: two different brains"
  },
  {
    "name": "Pufferfish",
    "group": "Fish",
    "subgroup": "Tetraodontidae",
    "S": 0.55,
    "I": 0.48,
    "U": 0.48,
    "confidence": "MEDIUM",
    "notes": "Geometric sand circle construction over 7-9 days"
  },
  {
    "name": "Hawk moth",
    "group": "Insect",
    "subgroup": "Lepidoptera",
    "S": 0.62,
    "I": 0.45,
    "U": 0.45,
    "confidence": "MEDIUM",
    "notes": "Flower-tracking while hovering"
  },
  {
    "name": "Cichlid (African)",
    "group": "Fish",
    "subgroup": "Cichlidae",
    "S": 0.58,
    "I": 0.48,
    "U": 0.45,
    "confidence": "MEDIUM",
    "notes": "Social hierarchy, tool use, transitive inference, audience effects"
  },
  {
    "name": "Tuskfish (wrasse)",
    "group": "Fish",
    "subgroup": "Labridae",
    "S": 0.58,
    "I": 0.48,
    "U": 0.45,
    "confidence": "MEDIUM",
    "notes": "Tool use: carries clams to anvil rocks"
  },
  {
    "name": "Assassin bug",
    "group": "Insect",
    "subgroup": "Hemiptera",
    "S": 0.58,
    "I": 0.45,
    "U": 0.45,
    "confidence": "LOW",
    "notes": "Spider web plucking with adjustable mimicry"
  },
  {
    "name": "Moray eel",
    "group": "Fish",
    "subgroup": "Muraenidae",
    "S": 0.58,
    "I": 0.45,
    "U": 0.45,
    "confidence": "MEDIUM",
    "notes": "Cooperative hunting partner, responds to grouper signals"
  },
  {
    "name": "Painted lady butterfly",
    "group": "Insect",
    "subgroup": "Lepidoptera",
    "S": 0.6,
    "I": 0.42,
    "U": 0.45,
    "confidence": "LOW",
    "notes": "Longest insect migration (~9000 miles)"
  },
  {
    "name": "Cricket",
    "group": "Insect",
    "subgroup": "Orthoptera",
    "S": 0.6,
    "I": 0.42,
    "U": 0.44,
    "confidence": "MEDIUM",
    "notes": "Winner/loser effects as mood-like states"
  },
  {
    "name": "C. elegans",
    "group": "Nematode",
    "subgroup": "Nematode",
    "S": 0.4,
    "I": 0.5,
    "U": 0.55,
    "confidence": "HIGH",
    "notes": "302 neurons fully mapped, 25 innexin genes"
  },
  {
    "name": "Mudskipper",
    "group": "Fish",
    "subgroup": "Gobiidae",
    "S": 0.58,
    "I": 0.45,
    "U": 0.42,
    "confidence": "LOW",
    "notes": "Lives on land and water, builds mud towers"
  },
  {
    "name": "Reef shark",
    "group": "Fish",
    "subgroup": "Carcharhinidae",
    "S": 0.68,
    "I": 0.4,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Social hierarchy, dive boat association learning"
  },
  {
    "name": "Bull shark",
    "group": "Fish",
    "subgroup": "Carcharhinidae",
    "S": 0.68,
    "I": 0.4,
    "U": 0.4,
    "confidence": "VERY LOW",
    "notes": "Freshwater-saltwater flexibility"
  },
  {
    "name": "New Zealand wrybill",
    "group": "Bird",
    "subgroup": "Shorebird",
    "S": 0.6,
    "I": 0.42,
    "U": 0.42,
    "confidence": "VERY LOW",
    "notes": "Only asymmetric-billed bird"
  },
  {
    "name": "Sailfish",
    "group": "Fish",
    "subgroup": "Istiophoridae",
    "S": 0.62,
    "I": 0.42,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Group hunting with turn-taking, color signaling"
  },
  {
    "name": "Tuna (bluefin)",
    "group": "Fish",
    "subgroup": "Scombridae",
    "S": 0.65,
    "I": 0.4,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Endothermic brain, severely understudied cognition"
  },
  {
    "name": "Stickleback",
    "group": "Fish",
    "subgroup": "Gasterosteidae",
    "S": 0.55,
    "I": 0.45,
    "U": 0.42,
    "confidence": "HIGH",
    "notes": "Major behavioral ecology model, well-documented personalities"
  },
  {
    "name": "Housefly",
    "group": "Insect",
    "subgroup": "Diptera",
    "S": 0.58,
    "I": 0.42,
    "U": 0.42,
    "confidence": "LOW",
    "notes": "Pre-computed escape trajectories"
  },
  {
    "name": "Sawfish",
    "group": "Fish",
    "subgroup": "Pristidae",
    "S": 0.68,
    "I": 0.38,
    "U": 0.38,
    "confidence": "VERY LOW",
    "notes": "Electroreceptive saw doubles as weapon, critically endangered"
  },
  {
    "name": "Diving beetle",
    "group": "Insect",
    "subgroup": "Coleoptera",
    "S": 0.58,
    "I": 0.4,
    "U": 0.42,
    "confidence": "VERY LOW",
    "notes": "Dual-environment (aquatic + aerial)"
  },
  {
    "name": "Katydid",
    "group": "Insect",
    "subgroup": "Orthoptera",
    "S": 0.58,
    "I": 0.4,
    "U": 0.42,
    "confidence": "LOW",
    "notes": "Acoustic specialists, leaf mimicry"
  },
  {
    "name": "Bark beetle",
    "group": "Insect",
    "subgroup": "Coleoptera",
    "S": 0.55,
    "I": 0.42,
    "U": 0.42,
    "confidence": "LOW",
    "notes": "Pheromone-coordinated mass attacks"
  },
  {
    "name": "Clownfish",
    "group": "Fish",
    "subgroup": "Pomacentridae",
    "S": 0.55,
    "I": 0.42,
    "U": 0.42,
    "confidence": "MEDIUM",
    "notes": "Sequential hermaphroditism driven by social hierarchy, anemone symbiosis"
  },
  {
    "name": "Piranha",
    "group": "Fish",
    "subgroup": "Serrasalmidae",
    "S": 0.55,
    "I": 0.42,
    "U": 0.42,
    "confidence": "LOW",
    "notes": "Group hunting coordination, vocal communication"
  },
  {
    "name": "Pike",
    "group": "Fish",
    "subgroup": "Esocidae",
    "S": 0.6,
    "I": 0.4,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Learns to avoid lures after capture"
  },
  {
    "name": "Salmon (Atlantic)",
    "group": "Fish",
    "subgroup": "Salmonidae",
    "S": 0.6,
    "I": 0.4,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Extraordinary olfactory navigation"
  },
  {
    "name": "Stingray",
    "group": "Fish",
    "subgroup": "Dasyatidae",
    "S": 0.6,
    "I": 0.4,
    "U": 0.4,
    "confidence": "MEDIUM",
    "notes": "Problem solving (Kuba 2010), water jet tool use"
  },
  {
    "name": "Trout (rainbow)",
    "group": "Fish",
    "subgroup": "Salmonidae",
    "S": 0.55,
    "I": 0.42,
    "U": 0.4,
    "confidence": "MEDIUM",
    "notes": "Enrichment improves cognitive flexibility"
  },
  {
    "name": "Swordfish",
    "group": "Fish",
    "subgroup": "Xiphiidae",
    "S": 0.62,
    "I": 0.38,
    "U": 0.38,
    "confidence": "VERY LOW",
    "notes": "Brain-heating organ for visual processing"
  },
  {
    "name": "Lobster",
    "group": "Crustacean",
    "subgroup": "Decapod",
    "S": 0.58,
    "I": 0.38,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Social hierarchy, serotonin system"
  },
  {
    "name": "Firefly",
    "group": "Insect",
    "subgroup": "Coleoptera",
    "S": 0.58,
    "I": 0.38,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Predatory flash mimicry = deception"
  },
  {
    "name": "Bombardier beetle",
    "group": "Insect",
    "subgroup": "Coleoptera",
    "S": 0.55,
    "I": 0.4,
    "U": 0.4,
    "confidence": "VERY LOW",
    "notes": "Precision-aimed chemical defense spray"
  },
  {
    "name": "Triggerfish",
    "group": "Fish",
    "subgroup": "Balistidae",
    "S": 0.55,
    "I": 0.4,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "3D nest defense zone, individual diver memory"
  },
  {
    "name": "Betta",
    "group": "Fish",
    "subgroup": "Osphronemidae",
    "S": 0.52,
    "I": 0.42,
    "U": 0.4,
    "confidence": "MEDIUM",
    "notes": "Audience effects, transitive inference, numerical discrimination"
  },
  {
    "name": "Goby (cleaner)",
    "group": "Fish",
    "subgroup": "Gobiidae",
    "S": 0.52,
    "I": 0.42,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Cleaning symbiosis, client recognition"
  },
  {
    "name": "Seahorse",
    "group": "Fish",
    "subgroup": "Syngnathidae",
    "S": 0.52,
    "I": 0.4,
    "U": 0.42,
    "confidence": "LOW",
    "notes": "Monogamous pair bonding, daily greeting dance, independent eyes"
  },
  {
    "name": "Blenny (fang)",
    "group": "Fish",
    "subgroup": "Blenniidae",
    "S": 0.52,
    "I": 0.42,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "False cleaner deception, opioid venom"
  },
  {
    "name": "Mosquito",
    "group": "Insect",
    "subgroup": "Diptera",
    "S": 0.6,
    "I": 0.38,
    "U": 0.38,
    "confidence": "MEDIUM",
    "notes": "Multi-modal sequential host tracking"
  },
  {
    "name": "Barracuda",
    "group": "Fish",
    "subgroup": "Sphyraenidae",
    "S": 0.6,
    "I": 0.38,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Visual ambush predator, curiosity toward divers"
  },
  {
    "name": "Nurse shark",
    "group": "Fish",
    "subgroup": "Ginglymostomatidae",
    "S": 0.6,
    "I": 0.38,
    "U": 0.38,
    "confidence": "VERY LOW",
    "notes": "Social resting piles"
  },
  {
    "name": "Human (dreaming)",
    "group": "Mammal",
    "subgroup": "Great Ape",
    "S": 0.3,
    "I": 0.7,
    "U": 0.4,
    "confidence": "HIGH",
    "notes": "Reduced external, enhanced internal sensing"
  },
  {
    "name": "Antlion larva",
    "group": "Insect",
    "subgroup": "Neuroptera",
    "S": 0.5,
    "I": 0.4,
    "U": 0.42,
    "confidence": "LOW",
    "notes": "Optimized pit construction, hunger-adjusted"
  },
  {
    "name": "Salmon (Pacific)",
    "group": "Fish",
    "subgroup": "Salmonidae",
    "S": 0.58,
    "I": 0.38,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Semelparous, similar to Atlantic"
  },
  {
    "name": "Catfish",
    "group": "Fish",
    "subgroup": "Ictaluridae",
    "S": 0.58,
    "I": 0.38,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "175,000+ taste buds covering body"
  },
  {
    "name": "Hermit crab",
    "group": "Crustacean",
    "subgroup": "Decapod",
    "S": 0.55,
    "I": 0.38,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Shell negotiation"
  },
  {
    "name": "Crayfish",
    "group": "Crustacean",
    "subgroup": "Decapod",
    "S": 0.55,
    "I": 0.38,
    "U": 0.4,
    "confidence": "MEDIUM",
    "notes": "Anxiety-like behavior, social defeat stress"
  },
  {
    "name": "Water strider",
    "group": "Insect",
    "subgroup": "Hemiptera",
    "S": 0.55,
    "I": 0.38,
    "U": 0.4,
    "confidence": "VERY LOW",
    "notes": "Surface wave communication and hunting"
  },
  {
    "name": "Bass (largemouth)",
    "group": "Fish",
    "subgroup": "Centrarchidae",
    "S": 0.55,
    "I": 0.4,
    "U": 0.38,
    "confidence": "MEDIUM",
    "notes": "Single-trial lure avoidance learning"
  },
  {
    "name": "Guppy",
    "group": "Fish",
    "subgroup": "Poeciliidae",
    "S": 0.52,
    "I": 0.42,
    "U": 0.38,
    "confidence": "HIGH",
    "notes": "Numerical discrimination, mate choice copying, brain size varies with ecology"
  },
  {
    "name": "Parrotfish",
    "group": "Fish",
    "subgroup": "Scaridae",
    "S": 0.55,
    "I": 0.38,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Mucus cocoon sleeping strategy, sequential hermaphroditism"
  },
  {
    "name": "Cod (Atlantic)",
    "group": "Fish",
    "subgroup": "Gadidae",
    "S": 0.55,
    "I": 0.38,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Net avoidance learning, spawning site fidelity"
  },
  {
    "name": "Earwig",
    "group": "Insect",
    "subgroup": "Dermaptera",
    "S": 0.52,
    "I": 0.38,
    "U": 0.4,
    "confidence": "VERY LOW",
    "notes": "Maternal care unusual for non-social insects"
  },
  {
    "name": "Whale shark",
    "group": "Fish",
    "subgroup": "Rhincodontidae",
    "S": 0.6,
    "I": 0.35,
    "U": 0.35,
    "confidence": "LOW",
    "notes": "Gentle giant, almost no cognitive data"
  },
  {
    "name": "Orb weaver spider",
    "group": "Arachnid",
    "subgroup": "Araneae",
    "S": 0.55,
    "I": 0.35,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Web as extended cognition"
  },
  {
    "name": "Cicada",
    "group": "Insect",
    "subgroup": "Hemiptera",
    "S": 0.55,
    "I": 0.35,
    "U": 0.38,
    "confidence": "VERY LOW",
    "notes": "Prime-number cycles (genetic), chorus synchronization"
  },
  {
    "name": "Ladybug",
    "group": "Insect",
    "subgroup": "Coleoptera",
    "S": 0.52,
    "I": 0.35,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Aggregation site fidelity"
  },
  {
    "name": "Goldfish",
    "group": "Fish",
    "subgroup": "Cyprinidae",
    "S": 0.52,
    "I": 0.38,
    "U": 0.35,
    "confidence": "MEDIUM",
    "notes": "Months-long memory, time-place learning"
  },
  {
    "name": "Carp/Koi",
    "group": "Fish",
    "subgroup": "Cyprinidae",
    "S": 0.52,
    "I": 0.38,
    "U": 0.35,
    "confidence": "LOW",
    "notes": "Long-lived, spatial memory"
  },
  {
    "name": "Scorpion",
    "group": "Arachnid",
    "subgroup": "Scorpiones",
    "S": 0.6,
    "I": 0.32,
    "U": 0.35,
    "confidence": "LOW",
    "notes": "UV fluorescence, pectines"
  },
  {
    "name": "Zebrafish",
    "group": "Fish",
    "subgroup": "Cyprinidae",
    "S": 0.5,
    "I": 0.38,
    "U": 0.35,
    "confidence": "HIGH",
    "notes": "Best neural data of any fish, connectome in progress"
  },
  {
    "name": "Herring",
    "group": "Fish",
    "subgroup": "Clupeidae",
    "S": 0.52,
    "I": 0.35,
    "U": 0.35,
    "confidence": "LOW",
    "notes": "Detect predator ultrasound, bubble communication"
  },
  {
    "name": "Lungfish",
    "group": "Fish",
    "subgroup": "Dipnoi",
    "S": 0.5,
    "I": 0.35,
    "U": 0.35,
    "confidence": "VERY LOW",
    "notes": "Aestivation survival, closest fish relative to tetrapods"
  },
  {
    "name": "Sturgeon",
    "group": "Fish",
    "subgroup": "Acipenseridae",
    "S": 0.55,
    "I": 0.32,
    "U": 0.32,
    "confidence": "VERY LOW",
    "notes": "Lives 100+ years, site fidelity across decades"
  },
  {
    "name": "Fig wasp",
    "group": "Insect",
    "subgroup": "Solitary Hymenoptera",
    "S": 0.48,
    "I": 0.32,
    "U": 0.35,
    "confidence": "VERY LOW",
    "notes": "Extreme specialist, short-lived"
  },
  {
    "name": "Stick insect",
    "group": "Insect",
    "subgroup": "Phasmatodea",
    "S": 0.5,
    "I": 0.3,
    "U": 0.35,
    "confidence": "VERY LOW",
    "notes": "Extreme camouflage specialists"
  },
  {
    "name": "Flea",
    "group": "Insect",
    "subgroup": "Siphonaptera",
    "S": 0.5,
    "I": 0.32,
    "U": 0.32,
    "confidence": "VERY LOW",
    "notes": "Extraordinary jumping, narrow behavioral repertoire"
  },
  {
    "name": "Silk moth",
    "group": "Insect",
    "subgroup": "Lepidoptera",
    "S": 0.52,
    "I": 0.3,
    "U": 0.32,
    "confidence": "MEDIUM",
    "notes": "Most sensitive olfactory detection known"
  },
  {
    "name": "Elephant shark",
    "group": "Fish",
    "subgroup": "Callorhinchidae",
    "S": 0.55,
    "I": 0.3,
    "U": 0.3,
    "confidence": "VERY LOW",
    "notes": "Slowest-evolving genome"
  },
  {
    "name": "Nautilus",
    "group": "Cephalopod",
    "subgroup": "Nautiloid",
    "S": 0.45,
    "I": 0.3,
    "U": 0.35,
    "confidence": "LOW",
    "notes": "Pinhole eyes, ancient lineage"
  },
  {
    "name": "Anglerfish",
    "group": "Fish",
    "subgroup": "Lophiidae",
    "S": 0.45,
    "I": 0.32,
    "U": 0.32,
    "confidence": "VERY LOW",
    "notes": "Bioluminescent lure manipulation"
  },
  {
    "name": "Coelacanth",
    "group": "Fish",
    "subgroup": "Latimeriidae",
    "S": 0.48,
    "I": 0.3,
    "U": 0.32,
    "confidence": "VERY LOW",
    "notes": "Living fossil, brain 1.5% of braincase"
  },
  {
    "name": "Lamprey",
    "group": "Fish",
    "subgroup": "Petromyzontidae",
    "S": 0.48,
    "I": 0.32,
    "U": 0.3,
    "confidence": "MEDIUM",
    "notes": "Most ancient vertebrate lineage, pheromone navigation"
  },
  {
    "name": "Leech",
    "group": "Annelid",
    "subgroup": "Hirudinea",
    "S": 0.42,
    "I": 0.32,
    "U": 0.32,
    "confidence": "MEDIUM",
    "notes": "Well-studied nervous system"
  },
  {
    "name": "Physarum (slime mold)",
    "group": "Protist",
    "subgroup": "Myxomycete",
    "S": 0.3,
    "I": 0.25,
    "U": 0.55,
    "confidence": "MEDIUM",
    "notes": "Maze solving, network optimization"
  },
  {
    "name": "Earthworm",
    "group": "Annelid",
    "subgroup": "Oligochaeta",
    "S": 0.4,
    "I": 0.3,
    "U": 0.32,
    "confidence": "LOW",
    "notes": "Segmental ganglia, T-maze learning"
  },
  {
    "name": "Silverfish",
    "group": "Insect",
    "subgroup": "Zygentoma",
    "S": 0.45,
    "I": 0.28,
    "U": 0.3,
    "confidence": "VERY LOW",
    "notes": "Among oldest living insect designs (~400M years)"
  },
  {
    "name": "Box jellyfish",
    "group": "Cnidarian",
    "subgroup": "Cubozoa",
    "S": 0.9,
    "I": 0.15,
    "U": 0.25,
    "confidence": "MEDIUM",
    "notes": "24 eyes, 4 independent rhopalia"
  },
  {
    "name": "Mayfly (adult)",
    "group": "Insect",
    "subgroup": "Ephemeroptera",
    "S": 0.48,
    "I": 0.25,
    "U": 0.28,
    "confidence": "VERY LOW",
    "notes": "Shortest adult lifespan, entire life = mate and die"
  },
  {
    "name": "Hagfish",
    "group": "Fish",
    "subgroup": "Myxinidae",
    "S": 0.42,
    "I": 0.25,
    "U": 0.28,
    "confidence": "VERY LOW",
    "notes": "Slime defense, body knotting, among oldest vertebrates"
  },
  {
    "name": "Planarian",
    "group": "Flatworm",
    "subgroup": "Turbellaria",
    "S": 0.35,
    "I": 0.28,
    "U": 0.3,
    "confidence": "MEDIUM",
    "notes": "Memory survives regeneration"
  },
  {
    "name": "Human (deep sleep)",
    "group": "Mammal",
    "subgroup": "Great Ape",
    "S": 0.1,
    "I": 0.55,
    "U": 0.4,
    "confidence": "HIGH",
    "notes": "Minimal sensing, some integration maintained"
  },
  {
    "name": "Paramecium",
    "group": "Protist",
    "subgroup": "Ciliate",
    "S": 0.2,
    "I": 0.15,
    "U": 0.45,
    "confidence": "MEDIUM",
    "notes": "Swimming reversal learning"
  },
  {
    "name": "Mycelial network",
    "group": "Fungus",
    "subgroup": "Basidiomycete",
    "S": 0.25,
    "I": 0.18,
    "U": 0.22,
    "confidence": "LOW",
    "notes": "Electrical signaling, resource allocation"
  },
  {
    "name": "Starfish",
    "group": "Echinoderm",
    "subgroup": "Asteroid",
    "S": 0.35,
    "I": 0.15,
    "U": 0.18,
    "confidence": "LOW",
    "notes": "Radial nerve, no central brain"
  },
  {
    "name": "Human (anesthesia)",
    "group": "Mammal",
    "subgroup": "Great Ape",
    "S": 0.85,
    "I": 0.1,
    "U": 0.1,
    "confidence": "HIGH",
    "notes": "Sensors intact, integration/unity collapsed"
  },
  {
    "name": "Euglena",
    "group": "Protist",
    "subgroup": "Euglenoid",
    "S": 0.18,
    "I": 0.1,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Eyespot phototaxis"
  },
  {
    "name": "Hydra",
    "group": "Cnidarian",
    "subgroup": "Hydrozoa",
    "S": 0.25,
    "I": 0.12,
    "U": 0.18,
    "confidence": "MEDIUM",
    "notes": "Diffuse nerve net, sleep-like states"
  },
  {
    "name": "Sea urchin",
    "group": "Echinoderm",
    "subgroup": "Echinoid",
    "S": 0.3,
    "I": 0.12,
    "U": 0.15,
    "confidence": "LOW",
    "notes": "Distributed photoreceptors"
  },
  {
    "name": "Amoeba",
    "group": "Protist",
    "subgroup": "Amoebozoa",
    "S": 0.15,
    "I": 0.08,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Chemotaxis decisions"
  },
  {
    "name": "Moon jellyfish",
    "group": "Cnidarian",
    "subgroup": "Scyphozoa",
    "S": 0.3,
    "I": 0.1,
    "U": 0.15,
    "confidence": "LOW",
    "notes": "Simple nerve net"
  },
  {
    "name": "Mimosa pudica",
    "group": "Plant",
    "subgroup": "Angiosperm",
    "S": 0.3,
    "I": 0.1,
    "U": 0.12,
    "confidence": "MEDIUM",
    "notes": "Touch response, habituation learning"
  },
  {
    "name": "Venus flytrap",
    "group": "Plant",
    "subgroup": "Angiosperm",
    "S": 0.28,
    "I": 0.1,
    "U": 0.12,
    "confidence": "MEDIUM",
    "notes": "Counting trigger hairs"
  },
  {
    "name": "E. coli",
    "group": "Prokaryote",
    "subgroup": "Proteobacteria",
    "S": 0.12,
    "I": 0.05,
    "U": 0.3,
    "confidence": "MEDIUM",
    "notes": "Chemotaxis, quorum sensing"
  },
  {
    "name": "Sea anemone",
    "group": "Cnidarian",
    "subgroup": "Anthozoa",
    "S": 0.2,
    "I": 0.08,
    "U": 0.1,
    "confidence": "MEDIUM",
    "notes": "Zero innexin genes"
  },
  {
    "name": "Cyanobacterium",
    "group": "Prokaryote",
    "subgroup": "Cyanobacteria",
    "S": 0.1,
    "I": 0.05,
    "U": 0.3,
    "confidence": "LOW",
    "notes": "Phototaxis, circadian clock"
  },
  {
    "name": "Sunflower",
    "group": "Plant",
    "subgroup": "Angiosperm",
    "S": 0.25,
    "I": 0.05,
    "U": 0.08,
    "confidence": "LOW",
    "notes": "Heliotropism, circadian anticipation"
  },
  {
    "name": "Oak tree",
    "group": "Plant",
    "subgroup": "Angiosperm",
    "S": 0.22,
    "I": 0.05,
    "U": 0.08,
    "confidence": "LOW",
    "notes": "Chemical defense signaling"
  },
  {
    "name": "Coral",
    "group": "Cnidarian",
    "subgroup": "Anthozoa",
    "S": 0.15,
    "I": 0.05,
    "U": 0.08,
    "confidence": "LOW",
    "notes": "Colonial, minimal nervous system"
  },
  {
    "name": "Sponge",
    "group": "Porifera",
    "subgroup": "Porifera",
    "S": 0.1,
    "I": 0.03,
    "U": 0.05,
    "confidence": "MEDIUM",
    "notes": "No nervous system"
  }
];