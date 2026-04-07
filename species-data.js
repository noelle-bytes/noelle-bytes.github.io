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
    "notes": "Tool manufacture, culture, mirror test"
  },
  {
    "name": "Orca",
    "group": "Mammal",
    "subgroup": "Cetacean",
    "S": 0.78,
    "I": 0.88,
    "U": 0.9,
    "confidence": "HIGH",
    "notes": "Cultural dialects, mourning, teaching"
  },
  {
    "name": "Bonobo",
    "group": "Mammal",
    "subgroup": "Great Ape",
    "S": 0.78,
    "I": 0.88,
    "U": 0.88,
    "confidence": "HIGH",
    "notes": "Symbol use (Kanzi), empathy"
  },
  {
    "name": "Bottlenose dolphin",
    "group": "Mammal",
    "subgroup": "Cetacean",
    "S": 0.75,
    "I": 0.88,
    "U": 0.88,
    "confidence": "HIGH",
    "notes": "Name whistles, mirror test, sponge tools"
  },
  {
    "name": "Gorilla",
    "group": "Mammal",
    "subgroup": "Great Ape",
    "S": 0.78,
    "I": 0.85,
    "U": 0.85,
    "confidence": "HIGH",
    "notes": "Tool use, sign language (Koko)"
  },
  {
    "name": "African elephant",
    "group": "Mammal",
    "subgroup": "Elephant",
    "S": 0.78,
    "I": 0.85,
    "U": 0.85,
    "confidence": "HIGH",
    "notes": "Mirror test, mourning, infrasound"
  },
  {
    "name": "Orangutan",
    "group": "Mammal",
    "subgroup": "Great Ape",
    "S": 0.76,
    "I": 0.85,
    "U": 0.85,
    "confidence": "HIGH",
    "notes": "Sophisticated tools, future planning"
  },
  {
    "name": "Asian elephant",
    "group": "Mammal",
    "subgroup": "Elephant",
    "S": 0.76,
    "I": 0.83,
    "U": 0.84,
    "confidence": "HIGH",
    "notes": "Mirror test, body awareness"
  },
  {
    "name": "New Caledonian crow",
    "group": "Bird",
    "subgroup": "Corvid",
    "S": 0.72,
    "I": 0.82,
    "U": 0.82,
    "confidence": "HIGH",
    "notes": "Hook tools, metatool representation"
  },
  {
    "name": "Octopus",
    "group": "Cephalopod",
    "subgroup": "Octopod",
    "S": 0.8,
    "I": 0.72,
    "U": 0.82,
    "confidence": "HIGH",
    "notes": "Tool use, play, escape artistry"
  },
  {
    "name": "Sperm whale",
    "group": "Mammal",
    "subgroup": "Cetacean",
    "S": 0.72,
    "I": 0.8,
    "U": 0.82,
    "confidence": "MEDIUM",
    "notes": "Largest brain, clan dialects"
  },
  {
    "name": "Common raven",
    "group": "Bird",
    "subgroup": "Corvid",
    "S": 0.72,
    "I": 0.8,
    "U": 0.82,
    "confidence": "HIGH",
    "notes": "Future planning, theory of mind"
  },
  {
    "name": "Humpback whale",
    "group": "Mammal",
    "subgroup": "Cetacean",
    "S": 0.7,
    "I": 0.78,
    "U": 0.8,
    "confidence": "MEDIUM",
    "notes": "Song culture, cross-species altruism"
  },
  {
    "name": "African grey parrot",
    "group": "Bird",
    "subgroup": "Parrot",
    "S": 0.7,
    "I": 0.78,
    "U": 0.8,
    "confidence": "HIGH",
    "notes": "Alex: 'What color am I?'"
  },
  {
    "name": "American crow",
    "group": "Bird",
    "subgroup": "Corvid",
    "S": 0.7,
    "I": 0.78,
    "U": 0.78,
    "confidence": "HIGH",
    "notes": "Cultural face recognition, funerals"
  },
  {
    "name": "Capuchin",
    "group": "Mammal",
    "subgroup": "Primate",
    "S": 0.72,
    "I": 0.75,
    "U": 0.78,
    "confidence": "HIGH",
    "notes": "3000-year tool record, fairness"
  },
  {
    "name": "Wolf",
    "group": "Mammal",
    "subgroup": "Canid",
    "S": 0.78,
    "I": 0.72,
    "U": 0.75,
    "confidence": "MEDIUM",
    "notes": "Pack hunting with roles"
  },
  {
    "name": "Paper wasp",
    "group": "Insect",
    "subgroup": "Social Hymenoptera",
    "S": 0.7,
    "I": 0.75,
    "U": 0.78,
    "confidence": "MEDIUM",
    "notes": "Face recognition, transitive inference"
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
    "notes": "First non-mammal mirror test"
  },
  {
    "name": "Hooded crow",
    "group": "Bird",
    "subgroup": "Corvid",
    "S": 0.7,
    "I": 0.75,
    "U": 0.78,
    "confidence": "MEDIUM",
    "notes": "Neural evidence of subjective experience"
  },
  {
    "name": "Dog",
    "group": "Mammal",
    "subgroup": "Canid",
    "S": 0.75,
    "I": 0.72,
    "U": 0.75,
    "confidence": "HIGH",
    "notes": "1000+ words, human emotion reading"
  },
  {
    "name": "Bat (echolocating)",
    "group": "Mammal",
    "subgroup": "Chiroptera",
    "S": 0.85,
    "I": 0.68,
    "U": 0.7,
    "confidence": "MEDIUM",
    "notes": "3D spatial mapping, vocal learning"
  },
  {
    "name": "Eurasian jay",
    "group": "Bird",
    "subgroup": "Corvid",
    "S": 0.7,
    "I": 0.75,
    "U": 0.76,
    "confidence": "HIGH",
    "notes": "Episodic memory, desire attribution"
  },
  {
    "name": "Kea",
    "group": "Bird",
    "subgroup": "Parrot",
    "S": 0.7,
    "I": 0.75,
    "U": 0.76,
    "confidence": "MEDIUM",
    "notes": "Probability reasoning, neophilia"
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
    "notes": "Camouflage, episodic memory"
  },
  {
    "name": "Lion",
    "group": "Mammal",
    "subgroup": "Felid",
    "S": 0.78,
    "I": 0.68,
    "U": 0.72,
    "confidence": "MEDIUM",
    "notes": "Counts rivals by roars"
  },
  {
    "name": "Rhesus macaque",
    "group": "Mammal",
    "subgroup": "Primate",
    "S": 0.72,
    "I": 0.72,
    "U": 0.72,
    "confidence": "HIGH",
    "notes": "Metacognition"
  },
  {
    "name": "Baboon",
    "group": "Mammal",
    "subgroup": "Primate",
    "S": 0.72,
    "I": 0.72,
    "U": 0.72,
    "confidence": "MEDIUM",
    "notes": "Alliance politics, analogical reasoning"
  },
  {
    "name": "Japanese macaque",
    "group": "Mammal",
    "subgroup": "Primate",
    "S": 0.72,
    "I": 0.72,
    "U": 0.72,
    "confidence": "MEDIUM",
    "notes": "Cultural potato washing, hot springs"
  },
  {
    "name": "Hyena (spotted)",
    "group": "Mammal",
    "subgroup": "Carnivore",
    "S": 0.72,
    "I": 0.72,
    "U": 0.72,
    "confidence": "MEDIUM",
    "notes": "Outperforms chimps on cooperation"
  },
  {
    "name": "Sulphur-crested cockatoo",
    "group": "Bird",
    "subgroup": "Parrot",
    "S": 0.7,
    "I": 0.72,
    "U": 0.74,
    "confidence": "MEDIUM",
    "notes": "Bin-opening culture, 14 dance moves"
  },
  {
    "name": "Gibbon",
    "group": "Mammal",
    "subgroup": "Primate",
    "S": 0.72,
    "I": 0.7,
    "U": 0.72,
    "confidence": "MEDIUM",
    "notes": "Duet singing, brachiation"
  },
  {
    "name": "Pig",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.72,
    "I": 0.7,
    "U": 0.72,
    "confidence": "HIGH",
    "notes": "Mirror-guided food, joystick operation"
  },
  {
    "name": "Leafcutter ant",
    "group": "Insect",
    "subgroup": "Social Hymenoptera",
    "S": 0.62,
    "I": 0.72,
    "U": 0.8,
    "confidence": "MEDIUM",
    "notes": "Fungal agriculture"
  },
  {
    "name": "Raccoon",
    "group": "Mammal",
    "subgroup": "Carnivore",
    "S": 0.75,
    "I": 0.68,
    "U": 0.7,
    "confidence": "MEDIUM",
    "notes": "Latch opening, 3-year memory"
  },
  {
    "name": "Dragonfly",
    "group": "Insect",
    "subgroup": "Odonata",
    "S": 0.88,
    "I": 0.62,
    "U": 0.65,
    "confidence": "MEDIUM",
    "notes": "95% hunting success, predictive interception"
  },
  {
    "name": "Desert ant",
    "group": "Insect",
    "subgroup": "Social Hymenoptera",
    "S": 0.68,
    "I": 0.72,
    "U": 0.72,
    "confidence": "HIGH",
    "notes": "Pedometer navigation, stilts experiment"
  },
  {
    "name": "Goffin's cockatoo",
    "group": "Bird",
    "subgroup": "Parrot",
    "S": 0.68,
    "I": 0.72,
    "U": 0.72,
    "confidence": "HIGH",
    "notes": "Tool kits, 5-step lock picking"
  },
  {
    "name": "Jackdaw",
    "group": "Bird",
    "subgroup": "Corvid",
    "S": 0.68,
    "I": 0.72,
    "U": 0.72,
    "confidence": "MEDIUM",
    "notes": "Gaze following, consensus decisions"
  },
  {
    "name": "Rook",
    "group": "Bird",
    "subgroup": "Corvid",
    "S": 0.68,
    "I": 0.72,
    "U": 0.72,
    "confidence": "HIGH",
    "notes": "Aesop's fable water displacement"
  },
  {
    "name": "Jungle crow",
    "group": "Bird",
    "subgroup": "Corvid",
    "S": 0.68,
    "I": 0.72,
    "U": 0.72,
    "confidence": "LOW",
    "notes": "Human face discrimination"
  },
  {
    "name": "Tiger",
    "group": "Mammal",
    "subgroup": "Felid",
    "S": 0.78,
    "I": 0.65,
    "U": 0.68,
    "confidence": "LOW",
    "notes": "Infrasound, huge territory"
  },
  {
    "name": "Jaguar",
    "group": "Mammal",
    "subgroup": "Felid",
    "S": 0.78,
    "I": 0.65,
    "U": 0.68,
    "confidence": "LOW",
    "notes": "Strongest relative bite, underwater hunting"
  },
  {
    "name": "Leopard",
    "group": "Mammal",
    "subgroup": "Felid",
    "S": 0.78,
    "I": 0.65,
    "U": 0.68,
    "confidence": "LOW",
    "notes": "Caches prey in trees"
  },
  {
    "name": "Bengal tiger",
    "group": "Mammal",
    "subgroup": "Felid",
    "S": 0.78,
    "I": 0.65,
    "U": 0.68,
    "confidence": "LOW",
    "notes": "Mangrove specialist"
  },
  {
    "name": "Harris's hawk",
    "group": "Bird",
    "subgroup": "Raptor",
    "S": 0.78,
    "I": 0.65,
    "U": 0.68,
    "confidence": "MEDIUM",
    "notes": "Only cooperative hunting raptor"
  },
  {
    "name": "Sea otter",
    "group": "Mammal",
    "subgroup": "Marine mammal",
    "S": 0.72,
    "I": 0.68,
    "U": 0.7,
    "confidence": "MEDIUM",
    "notes": "Stone tool use"
  },
  {
    "name": "African wild dog",
    "group": "Mammal",
    "subgroup": "Canid",
    "S": 0.72,
    "I": 0.68,
    "U": 0.7,
    "confidence": "MEDIUM",
    "notes": "80% hunt success, sneezing votes"
  },
  {
    "name": "Rat",
    "group": "Mammal",
    "subgroup": "Rodent",
    "S": 0.72,
    "I": 0.68,
    "U": 0.7,
    "confidence": "HIGH",
    "notes": "Empathic rescue, regret, metacognition"
  },
  {
    "name": "Clark's nutcracker",
    "group": "Bird",
    "subgroup": "Corvid",
    "S": 0.68,
    "I": 0.72,
    "U": 0.7,
    "confidence": "MEDIUM",
    "notes": "33,000 cache memories"
  },
  {
    "name": "Bumblebee",
    "group": "Insect",
    "subgroup": "Social Hymenoptera",
    "S": 0.7,
    "I": 0.68,
    "U": 0.72,
    "confidence": "HIGH",
    "notes": "First insect play, two-step social learning"
  },
  {
    "name": "Indian house crow",
    "group": "Bird",
    "subgroup": "Corvid",
    "S": 0.68,
    "I": 0.7,
    "U": 0.72,
    "confidence": "MEDIUM",
    "notes": "Mirror test passed"
  },
  {
    "name": "Fish crow",
    "group": "Bird",
    "subgroup": "Corvid",
    "S": 0.68,
    "I": 0.7,
    "U": 0.72,
    "confidence": "LOW",
    "notes": "Corvid-typical"
  },
  {
    "name": "Golden eagle",
    "group": "Bird",
    "subgroup": "Raptor",
    "S": 0.85,
    "I": 0.62,
    "U": 0.65,
    "confidence": "MEDIUM",
    "notes": "4-8x human visual acuity"
  },
  {
    "name": "Jumping spider",
    "group": "Arachnid",
    "subgroup": "Salticidae",
    "S": 0.75,
    "I": 0.65,
    "U": 0.7,
    "confidence": "HIGH",
    "notes": "Route planning, deception"
  },
  {
    "name": "Macaw (scarlet)",
    "group": "Bird",
    "subgroup": "Parrot",
    "S": 0.7,
    "I": 0.68,
    "U": 0.7,
    "confidence": "MEDIUM",
    "notes": "Lifelong bonds, regional dialects"
  },
  {
    "name": "Narwhal",
    "group": "Mammal",
    "subgroup": "Cetacean",
    "S": 0.68,
    "I": 0.68,
    "U": 0.72,
    "confidence": "LOW",
    "notes": "Tusk = 10M nerve sensor"
  },
  {
    "name": "Striated caracara",
    "group": "Bird",
    "subgroup": "Raptor",
    "S": 0.72,
    "I": 0.68,
    "U": 0.68,
    "confidence": "MEDIUM",
    "notes": "Outperforms cockatoos"
  },
  {
    "name": "Mantis shrimp",
    "group": "Crustacean",
    "subgroup": "Stomatopod",
    "S": 0.92,
    "I": 0.58,
    "U": 0.62,
    "confidence": "MEDIUM",
    "notes": "16 color receptors"
  },
  {
    "name": "Spider monkey",
    "group": "Mammal",
    "subgroup": "Primate",
    "S": 0.7,
    "I": 0.68,
    "U": 0.68,
    "confidence": "LOW",
    "notes": "Fission-fusion"
  },
  {
    "name": "Mandrill",
    "group": "Mammal",
    "subgroup": "Primate",
    "S": 0.7,
    "I": 0.68,
    "U": 0.68,
    "confidence": "LOW",
    "notes": "Most colorful mammal face"
  },
  {
    "name": "Bear (grizzly)",
    "group": "Mammal",
    "subgroup": "Carnivore",
    "S": 0.72,
    "I": 0.65,
    "U": 0.68,
    "confidence": "LOW",
    "notes": "Individual fishing techniques"
  },
  {
    "name": "Horse",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.72,
    "I": 0.65,
    "U": 0.68,
    "confidence": "MEDIUM",
    "notes": "Cross-modal human recognition"
  },
  {
    "name": "Bat (fruit)",
    "group": "Mammal",
    "subgroup": "Chiroptera",
    "S": 0.72,
    "I": 0.65,
    "U": 0.68,
    "confidence": "MEDIUM",
    "notes": "Reciprocal altruism"
  },
  {
    "name": "Peregrine falcon",
    "group": "Bird",
    "subgroup": "Raptor",
    "S": 0.85,
    "I": 0.6,
    "U": 0.62,
    "confidence": "MEDIUM",
    "notes": "Fastest animal, 390 km/h"
  },
  {
    "name": "Canada jay",
    "group": "Bird",
    "subgroup": "Corvid",
    "S": 0.68,
    "I": 0.68,
    "U": 0.68,
    "confidence": "MEDIUM",
    "notes": "Cultural caching, cold specialist"
  },
  {
    "name": "Cat",
    "group": "Mammal",
    "subgroup": "Felid",
    "S": 0.78,
    "I": 0.62,
    "U": 0.65,
    "confidence": "MEDIUM",
    "notes": "Object permanence, voice recognition"
  },
  {
    "name": "Weaver ant",
    "group": "Insect",
    "subgroup": "Social Hymenoptera",
    "S": 0.6,
    "I": 0.68,
    "U": 0.75,
    "confidence": "LOW",
    "notes": "Living chains, larval silk gluing"
  },
  {
    "name": "Bald eagle",
    "group": "Bird",
    "subgroup": "Raptor",
    "S": 0.82,
    "I": 0.6,
    "U": 0.62,
    "confidence": "MEDIUM",
    "notes": "Fish-snatching, piracy"
  },
  {
    "name": "Philippine eagle",
    "group": "Bird",
    "subgroup": "Raptor",
    "S": 0.82,
    "I": 0.6,
    "U": 0.62,
    "confidence": "LOW",
    "notes": "Monkey-hunting, critically endangered"
  },
  {
    "name": "Polar bear",
    "group": "Mammal",
    "subgroup": "Carnivore",
    "S": 0.75,
    "I": 0.62,
    "U": 0.65,
    "confidence": "LOW",
    "notes": "Seal hunting patience"
  },
  {
    "name": "Marmoset",
    "group": "Mammal",
    "subgroup": "Primate",
    "S": 0.68,
    "I": 0.65,
    "U": 0.68,
    "confidence": "MEDIUM",
    "notes": "Vocal turn-taking"
  },
  {
    "name": "Great horned owl",
    "group": "Bird",
    "subgroup": "Owl",
    "S": 0.82,
    "I": 0.58,
    "U": 0.62,
    "confidence": "LOW",
    "notes": "Hunts by sound in total darkness"
  },
  {
    "name": "Weaver ant (Australian)",
    "group": "Insect",
    "subgroup": "Social Hymenoptera",
    "S": 0.6,
    "I": 0.65,
    "U": 0.75,
    "confidence": "LOW",
    "notes": "1700 years as bio-control"
  },
  {
    "name": "Vampire bat",
    "group": "Mammal",
    "subgroup": "Chiroptera",
    "S": 0.72,
    "I": 0.62,
    "U": 0.65,
    "confidence": "MEDIUM",
    "notes": "Reciprocal altruism with bookkeeping"
  },
  {
    "name": "Giant otter",
    "group": "Mammal",
    "subgroup": "Carnivore",
    "S": 0.72,
    "I": 0.62,
    "U": 0.65,
    "confidence": "LOW",
    "notes": "9+ distinct calls, cooperative hunting"
  },
  {
    "name": "Gyrfalcon",
    "group": "Bird",
    "subgroup": "Raptor",
    "S": 0.82,
    "I": 0.58,
    "U": 0.6,
    "confidence": "LOW",
    "notes": "Largest falcon, Arctic"
  },
  {
    "name": "Spanish imperial eagle",
    "group": "Bird",
    "subgroup": "Raptor",
    "S": 0.82,
    "I": 0.58,
    "U": 0.6,
    "confidence": "LOW",
    "notes": "Iberian endemic"
  },
  {
    "name": "Meerkat",
    "group": "Mammal",
    "subgroup": "Carnivore",
    "S": 0.7,
    "I": 0.62,
    "U": 0.65,
    "confidence": "MEDIUM",
    "notes": "Teaching with progressive difficulty"
  },
  {
    "name": "Sea lion",
    "group": "Mammal",
    "subgroup": "Marine mammal",
    "S": 0.7,
    "I": 0.62,
    "U": 0.65,
    "confidence": "MEDIUM",
    "notes": "Logical reasoning, beat-keeping"
  },
  {
    "name": "Cheetah",
    "group": "Mammal",
    "subgroup": "Felid",
    "S": 0.75,
    "I": 0.6,
    "U": 0.62,
    "confidence": "LOW",
    "notes": "70 mph pursuit trajectory"
  },
  {
    "name": "Snow leopard",
    "group": "Mammal",
    "subgroup": "Felid",
    "S": 0.75,
    "I": 0.6,
    "U": 0.62,
    "confidence": "LOW",
    "notes": "Mountain specialist"
  },
  {
    "name": "Army ant",
    "group": "Insect",
    "subgroup": "Social Hymenoptera",
    "S": 0.55,
    "I": 0.65,
    "U": 0.78,
    "confidence": "LOW",
    "notes": "Living architecture, swarm intelligence"
  },
  {
    "name": "Osprey",
    "group": "Bird",
    "subgroup": "Raptor",
    "S": 0.8,
    "I": 0.58,
    "U": 0.6,
    "confidence": "MEDIUM",
    "notes": "Specialized fish hunter"
  },
  {
    "name": "Fox",
    "group": "Mammal",
    "subgroup": "Canid",
    "S": 0.72,
    "I": 0.62,
    "U": 0.62,
    "confidence": "LOW",
    "notes": "Magnetic-aligned pouncing"
  },
  {
    "name": "Black kite (firehawk)",
    "group": "Bird",
    "subgroup": "Raptor",
    "S": 0.72,
    "I": 0.62,
    "U": 0.62,
    "confidence": "MEDIUM",
    "notes": "Intentional fire-spreading"
  },
  {
    "name": "Azure-winged magpie",
    "group": "Bird",
    "subgroup": "Corvid",
    "S": 0.65,
    "I": 0.65,
    "U": 0.65,
    "confidence": "LOW",
    "notes": "Prosocial food sharing"
  },
  {
    "name": "Stingless bee",
    "group": "Insect",
    "subgroup": "Social Hymenoptera",
    "S": 0.65,
    "I": 0.62,
    "U": 0.68,
    "confidence": "LOW",
    "notes": "Pulsed sound communication"
  },
  {
    "name": "Eclectus parrot",
    "group": "Bird",
    "subgroup": "Parrot",
    "S": 0.68,
    "I": 0.62,
    "U": 0.65,
    "confidence": "LOW",
    "notes": "Extreme sexual dimorphism"
  },
  {
    "name": "African fish eagle",
    "group": "Bird",
    "subgroup": "Raptor",
    "S": 0.78,
    "I": 0.58,
    "U": 0.6,
    "confidence": "LOW",
    "notes": "Iconic African raptor"
  },
  {
    "name": "Saker falcon",
    "group": "Bird",
    "subgroup": "Raptor",
    "S": 0.8,
    "I": 0.58,
    "U": 0.58,
    "confidence": "LOW",
    "notes": "Steppe pursuit predator"
  },
  {
    "name": "Ethiopian wolf",
    "group": "Mammal",
    "subgroup": "Canid",
    "S": 0.72,
    "I": 0.6,
    "U": 0.62,
    "confidence": "LOW",
    "notes": "Rarest canid, ~500 left"
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
    "notes": "Only insect with true 3D vision"
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
    "notes": "40,000 electroreceptors"
  },
  {
    "name": "Barn owl",
    "group": "Bird",
    "subgroup": "Owl",
    "S": 0.82,
    "I": 0.55,
    "U": 0.58,
    "confidence": "MEDIUM",
    "notes": "Best studied auditory system"
  },
  {
    "name": "Golden snub-nosed monkey",
    "group": "Mammal",
    "subgroup": "Primate",
    "S": 0.68,
    "I": 0.62,
    "U": 0.62,
    "confidence": "LOW",
    "notes": "Multi-level social, -25C cold"
  },
  {
    "name": "Iberian lynx",
    "group": "Mammal",
    "subgroup": "Felid",
    "S": 0.75,
    "I": 0.58,
    "U": 0.6,
    "confidence": "LOW",
    "notes": "Rarest cat, conservation success"
  },
  {
    "name": "Wolverine",
    "group": "Mammal",
    "subgroup": "Carnivore",
    "S": 0.7,
    "I": 0.6,
    "U": 0.62,
    "confidence": "LOW",
    "notes": "1500 km2 territory, defeats traps"
  },
  {
    "name": "Rock pigeon",
    "group": "Bird",
    "subgroup": "Pigeon",
    "S": 0.7,
    "I": 0.6,
    "U": 0.62,
    "confidence": "HIGH",
    "notes": "Monet vs Picasso, numerical = primates"
  },
  {
    "name": "Snowy owl",
    "group": "Bird",
    "subgroup": "Owl",
    "S": 0.8,
    "I": 0.55,
    "U": 0.58,
    "confidence": "LOW",
    "notes": "Arctic specialist, diurnal"
  },
  {
    "name": "Asian giant hornet",
    "group": "Insect",
    "subgroup": "Social Hymenoptera",
    "S": 0.68,
    "I": 0.6,
    "U": 0.62,
    "confidence": "LOW",
    "notes": "Multi-phase group raids"
  },
  {
    "name": "Lemur",
    "group": "Mammal",
    "subgroup": "Prosimian",
    "S": 0.68,
    "I": 0.6,
    "U": 0.62,
    "confidence": "MEDIUM",
    "notes": "Scent communication"
  },
  {
    "name": "Mouse",
    "group": "Mammal",
    "subgroup": "Rodent",
    "S": 0.68,
    "I": 0.6,
    "U": 0.62,
    "confidence": "HIGH",
    "notes": "Pain empathy, emotional contagion"
  },
  {
    "name": "Prairie dog",
    "group": "Mammal",
    "subgroup": "Rodent",
    "S": 0.68,
    "I": 0.6,
    "U": 0.62,
    "confidence": "MEDIUM",
    "notes": "Language-like alarm calls encoding predator details"
  },
  {
    "name": "European starling",
    "group": "Bird",
    "subgroup": "Songbird",
    "S": 0.68,
    "I": 0.6,
    "U": 0.62,
    "confidence": "MEDIUM",
    "notes": "Recursive grammar, murmuration"
  },
  {
    "name": "Lyrebird",
    "group": "Bird",
    "subgroup": "Songbird",
    "S": 0.68,
    "I": 0.6,
    "U": 0.62,
    "confidence": "LOW",
    "notes": "Most complex vocal mimicry"
  },
  {
    "name": "Squirrel",
    "group": "Mammal",
    "subgroup": "Rodent",
    "S": 0.72,
    "I": 0.58,
    "U": 0.6,
    "confidence": "MEDIUM",
    "notes": "Deceptive fake caching"
  },
  {
    "name": "Galah",
    "group": "Bird",
    "subgroup": "Parrot",
    "S": 0.65,
    "I": 0.62,
    "U": 0.62,
    "confidence": "LOW",
    "notes": "Social learning, play"
  },
  {
    "name": "Javan hawk-eagle",
    "group": "Bird",
    "subgroup": "Raptor",
    "S": 0.78,
    "I": 0.55,
    "U": 0.58,
    "confidence": "LOW",
    "notes": "Rare Indonesian endemic"
  },
  {
    "name": "Cow",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.68,
    "I": 0.58,
    "U": 0.62,
    "confidence": "MEDIUM",
    "notes": "Excitement when solving problems"
  },
  {
    "name": "Acorn woodpecker",
    "group": "Bird",
    "subgroup": "Woodpecker",
    "S": 0.68,
    "I": 0.58,
    "U": 0.62,
    "confidence": "LOW",
    "notes": "50,000-acorn granary"
  },
  {
    "name": "Trap-jaw ant",
    "group": "Insect",
    "subgroup": "Social Hymenoptera",
    "S": 0.62,
    "I": 0.58,
    "U": 0.68,
    "confidence": "LOW",
    "notes": "Fastest movement: 230 km/h mandible"
  },
  {
    "name": "Bullet ant",
    "group": "Insect",
    "subgroup": "Social Hymenoptera",
    "S": 0.62,
    "I": 0.58,
    "U": 0.68,
    "confidence": "LOW",
    "notes": "Individual landmark navigation"
  },
  {
    "name": "Jewel wasp",
    "group": "Insect",
    "subgroup": "Solitary Hymenoptera",
    "S": 0.65,
    "I": 0.62,
    "U": 0.6,
    "confidence": "MEDIUM",
    "notes": "Cockroach brain neurosurgery"
  },
  {
    "name": "Howler monkey",
    "group": "Mammal",
    "subgroup": "Primate",
    "S": 0.65,
    "I": 0.6,
    "U": 0.62,
    "confidence": "LOW",
    "notes": "Loudest land animal"
  },
  {
    "name": "Budgerigar",
    "group": "Bird",
    "subgroup": "Parrot",
    "S": 0.65,
    "I": 0.6,
    "U": 0.62,
    "confidence": "MEDIUM",
    "notes": "100+ words, grammar patterns"
  },
  {
    "name": "Seal (harbor)",
    "group": "Mammal",
    "subgroup": "Marine mammal",
    "S": 0.68,
    "I": 0.58,
    "U": 0.6,
    "confidence": "LOW",
    "notes": "Hoover mimicked speech"
  },
  {
    "name": "Common kestrel",
    "group": "Bird",
    "subgroup": "Raptor",
    "S": 0.78,
    "I": 0.55,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "UV vision for rodent urine trails"
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
    "name": "Troodon",
    "group": "Dinosaur",
    "subgroup": "Maniraptora",
    "S": 0.72,
    "I": 0.58,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Smartest non-avian dinosaur"
  },
  {
    "name": "Clouded leopard",
    "group": "Mammal",
    "subgroup": "Felid",
    "S": 0.72,
    "I": 0.55,
    "U": 0.58,
    "confidence": "LOW",
    "notes": "Best arboreal big cat"
  },
  {
    "name": "Hummingbird (ruby-throated)",
    "group": "Bird",
    "subgroup": "Hummingbird",
    "S": 0.72,
    "I": 0.55,
    "U": 0.58,
    "confidence": "MEDIUM",
    "notes": "Flower timing memory, Gulf crossing"
  },
  {
    "name": "Anna's hummingbird",
    "group": "Bird",
    "subgroup": "Hummingbird",
    "S": 0.72,
    "I": 0.55,
    "U": 0.58,
    "confidence": "LOW",
    "notes": "10G courtship dive"
  },
  {
    "name": "Orchid mantis",
    "group": "Insect",
    "subgroup": "Mantodea",
    "S": 0.75,
    "I": 0.55,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "More attractive to pollinators than real flowers"
  },
  {
    "name": "Proboscis monkey",
    "group": "Mammal",
    "subgroup": "Primate",
    "S": 0.65,
    "I": 0.58,
    "U": 0.6,
    "confidence": "LOW",
    "notes": "Swims between islands"
  },
  {
    "name": "Zebra finch",
    "group": "Bird",
    "subgroup": "Songbird",
    "S": 0.65,
    "I": 0.58,
    "U": 0.6,
    "confidence": "HIGH",
    "notes": "Vocal learning neuroscience model"
  },
  {
    "name": "Emperor penguin",
    "group": "Bird",
    "subgroup": "Penguin",
    "S": 0.68,
    "I": 0.55,
    "U": 0.6,
    "confidence": "LOW",
    "notes": "Mate call in 5000+ colony"
  },
  {
    "name": "Arctic fox",
    "group": "Mammal",
    "subgroup": "Canid",
    "S": 0.7,
    "I": 0.55,
    "U": 0.58,
    "confidence": "LOW",
    "notes": "Caches thousands of eggs"
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
    "notes": "Enlarged hippocampus, caches"
  },
  {
    "name": "Secretary bird",
    "group": "Bird",
    "subgroup": "Raptor",
    "S": 0.72,
    "I": 0.55,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Stomps snakes, 5x body weight kicks"
  },
  {
    "name": "Archer fish",
    "group": "Fish",
    "subgroup": "Toxotidae",
    "S": 0.72,
    "I": 0.58,
    "U": 0.52,
    "confidence": "HIGH",
    "notes": "PREDICTION: 44+ human face discrimination, view-invariant"
  },
  {
    "name": "Leopard seal",
    "group": "Mammal",
    "subgroup": "Marine mammal",
    "S": 0.68,
    "I": 0.55,
    "U": 0.58,
    "confidence": "LOW",
    "notes": "Plays with prey, offers penguins to divers"
  },
  {
    "name": "Sandhill crane",
    "group": "Bird",
    "subgroup": "Crane",
    "S": 0.68,
    "I": 0.55,
    "U": 0.58,
    "confidence": "LOW",
    "notes": "Teaches migration routes"
  },
  {
    "name": "Red-crowned crane",
    "group": "Bird",
    "subgroup": "Crane",
    "S": 0.68,
    "I": 0.55,
    "U": 0.58,
    "confidence": "LOW",
    "notes": "Japan cultural, pair dancing"
  },
  {
    "name": "Southern ground hornbill",
    "group": "Bird",
    "subgroup": "Hornbill",
    "S": 0.68,
    "I": 0.55,
    "U": 0.58,
    "confidence": "LOW",
    "notes": "Tool use, 50+ years"
  },
  {
    "name": "Fur seal",
    "group": "Mammal",
    "subgroup": "Marine mammal",
    "S": 0.68,
    "I": 0.55,
    "U": 0.58,
    "confidence": "LOW",
    "notes": "Unihemispheric sleep"
  },
  {
    "name": "Cockatiel",
    "group": "Bird",
    "subgroup": "Parrot",
    "S": 0.62,
    "I": 0.58,
    "U": 0.6,
    "confidence": "LOW",
    "notes": "Whistling melodies"
  },
  {
    "name": "Termite",
    "group": "Insect",
    "subgroup": "Blattodea",
    "S": 0.55,
    "I": 0.6,
    "U": 0.65,
    "confidence": "LOW",
    "notes": "Colony temperature regulation"
  },
  {
    "name": "Cleaner wrasse",
    "group": "Fish",
    "subgroup": "Wrasse",
    "S": 0.65,
    "I": 0.55,
    "U": 0.58,
    "confidence": "HIGH",
    "notes": "Mirror test, contingency testing, self-model (Sogawa 2026)"
  },
  {
    "name": "Manta ray",
    "group": "Fish",
    "subgroup": "Mobulidae",
    "S": 0.65,
    "I": 0.55,
    "U": 0.58,
    "confidence": "MEDIUM",
    "notes": "Largest fish brain, anecdotal mirror behavior"
  },
  {
    "name": "Carpenter bee",
    "group": "Insect",
    "subgroup": "Solitary Hymenoptera",
    "S": 0.65,
    "I": 0.55,
    "U": 0.58,
    "confidence": "LOW",
    "notes": "Trapline foraging"
  },
  {
    "name": "Sheep",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.65,
    "I": 0.55,
    "U": 0.58,
    "confidence": "MEDIUM",
    "notes": "50+ faces for 2+ years"
  },
  {
    "name": "Goat",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.65,
    "I": 0.55,
    "U": 0.58,
    "confidence": "MEDIUM",
    "notes": "10-month puzzle memory"
  },
  {
    "name": "Elephant seal",
    "group": "Mammal",
    "subgroup": "Marine mammal",
    "S": 0.65,
    "I": 0.55,
    "U": 0.58,
    "confidence": "LOW",
    "notes": "Voice-based relationship tracking"
  },
  {
    "name": "Walrus",
    "group": "Mammal",
    "subgroup": "Marine mammal",
    "S": 0.65,
    "I": 0.55,
    "U": 0.58,
    "confidence": "LOW",
    "notes": "400+ whiskers, vocal learning"
  },
  {
    "name": "Chicken",
    "group": "Bird",
    "subgroup": "Gamebird",
    "S": 0.65,
    "I": 0.55,
    "U": 0.58,
    "confidence": "MEDIUM",
    "notes": "Referential calls, emotional contagion, deception"
  },
  {
    "name": "Coati",
    "group": "Mammal",
    "subgroup": "Carnivore",
    "S": 0.65,
    "I": 0.55,
    "U": 0.58,
    "confidence": "LOW",
    "notes": "Social bands, prehensile nose"
  },
  {
    "name": "Mongoose",
    "group": "Mammal",
    "subgroup": "Carnivore",
    "S": 0.65,
    "I": 0.55,
    "U": 0.58,
    "confidence": "LOW",
    "notes": "Cooperative breeding, escort behavior"
  },
  {
    "name": "Tarsier",
    "group": "Mammal",
    "subgroup": "Prosimian",
    "S": 0.72,
    "I": 0.52,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Largest eyes relative to body"
  },
  {
    "name": "Little owl",
    "group": "Bird",
    "subgroup": "Owl",
    "S": 0.72,
    "I": 0.52,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Athena's owl"
  },
  {
    "name": "Burrowing owl",
    "group": "Bird",
    "subgroup": "Owl",
    "S": 0.72,
    "I": 0.52,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Dung baiting, colonial"
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
    "name": "Aye-aye",
    "group": "Mammal",
    "subgroup": "Prosimian",
    "S": 0.68,
    "I": 0.55,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Percussive foraging"
  },
  {
    "name": "Kookaburra",
    "group": "Bird",
    "subgroup": "Kingfisher",
    "S": 0.68,
    "I": 0.55,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Cooperative breeding, laughing call"
  },
  {
    "name": "European robin",
    "group": "Bird",
    "subgroup": "Songbird",
    "S": 0.65,
    "I": 0.55,
    "U": 0.55,
    "confidence": "MEDIUM",
    "notes": "Magnetic compass in eye"
  },
  {
    "name": "Common myna",
    "group": "Bird",
    "subgroup": "Songbird",
    "S": 0.65,
    "I": 0.55,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Vocal mimicry, urban adaptability"
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
    "name": "Common kingfisher",
    "group": "Bird",
    "subgroup": "Kingfisher",
    "S": 0.72,
    "I": 0.52,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Compensates for refraction"
  },
  {
    "name": "Archaeopteryx",
    "group": "Dinosaur",
    "subgroup": "Avialae",
    "S": 0.68,
    "I": 0.55,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "78% toward bird brain"
  },
  {
    "name": "Komodo dragon",
    "group": "Reptile",
    "subgroup": "Monitor",
    "S": 0.68,
    "I": 0.52,
    "U": 0.55,
    "confidence": "MEDIUM",
    "notes": "Play, individual recognition"
  },
  {
    "name": "Giraffe",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.68,
    "I": 0.52,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Recently discovered social complexity"
  },
  {
    "name": "Kangaroo",
    "group": "Mammal",
    "subgroup": "Marsupial",
    "S": 0.68,
    "I": 0.52,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Gaze alternation with humans"
  },
  {
    "name": "Rabbit",
    "group": "Mammal",
    "subgroup": "Lagomorph",
    "S": 0.68,
    "I": 0.52,
    "U": 0.55,
    "confidence": "MEDIUM",
    "notes": "Play (binkying), panoramic vision"
  },
  {
    "name": "Jamaican streamertail",
    "group": "Bird",
    "subgroup": "Hummingbird",
    "S": 0.68,
    "I": 0.52,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Jamaica national bird"
  },
  {
    "name": "Lovebird",
    "group": "Bird",
    "subgroup": "Parrot",
    "S": 0.6,
    "I": 0.55,
    "U": 0.58,
    "confidence": "LOW",
    "notes": "Pair bonding"
  },
  {
    "name": "Grouper (coral)",
    "group": "Fish",
    "subgroup": "Serranidae",
    "S": 0.62,
    "I": 0.55,
    "U": 0.55,
    "confidence": "HIGH",
    "notes": "PREDICTION: referential gestures (Nature Comms 2013)"
  },
  {
    "name": "Tarantula hawk wasp",
    "group": "Insect",
    "subgroup": "Solitary Hymenoptera",
    "S": 0.62,
    "I": 0.55,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Hunts tarantulas, most painful sting"
  },
  {
    "name": "Song sparrow",
    "group": "Bird",
    "subgroup": "Songbird",
    "S": 0.62,
    "I": 0.55,
    "U": 0.55,
    "confidence": "MEDIUM",
    "notes": "Dear enemy recognition"
  },
  {
    "name": "Nightingale",
    "group": "Bird",
    "subgroup": "Songbird",
    "S": 0.62,
    "I": 0.55,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "200+ song types"
  },
  {
    "name": "American bison",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.68,
    "I": 0.5,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Collective movement decisions"
  },
  {
    "name": "European bison",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.68,
    "I": 0.5,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Back from 12 individuals"
  },
  {
    "name": "Asian water monitor",
    "group": "Reptile",
    "subgroup": "Monitor",
    "S": 0.65,
    "I": 0.52,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Counting, urban specialist"
  },
  {
    "name": "Indian peafowl",
    "group": "Bird",
    "subgroup": "Gamebird",
    "S": 0.65,
    "I": 0.52,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Elaborate display, India national"
  },
  {
    "name": "King penguin",
    "group": "Bird",
    "subgroup": "Penguin",
    "S": 0.65,
    "I": 0.52,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Vocal recognition, deep diving"
  },
  {
    "name": "Green woodpecker",
    "group": "Bird",
    "subgroup": "Woodpecker",
    "S": 0.65,
    "I": 0.52,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Ground-feeding ant specialist"
  },
  {
    "name": "Pileated woodpecker",
    "group": "Bird",
    "subgroup": "Woodpecker",
    "S": 0.65,
    "I": 0.52,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Largest N American woodpecker"
  },
  {
    "name": "Blue crane",
    "group": "Bird",
    "subgroup": "Crane",
    "S": 0.65,
    "I": 0.52,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "South Africa national"
  },
  {
    "name": "Black crowned crane",
    "group": "Bird",
    "subgroup": "Crane",
    "S": 0.65,
    "I": 0.52,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Nigeria national"
  },
  {
    "name": "Rhinoceros hornbill",
    "group": "Bird",
    "subgroup": "Hornbill",
    "S": 0.65,
    "I": 0.52,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Malaysia national, sealed nest"
  },
  {
    "name": "Badger",
    "group": "Mammal",
    "subgroup": "Carnivore",
    "S": 0.65,
    "I": 0.52,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "100+ year old sett systems"
  },
  {
    "name": "Deinonychus",
    "group": "Dinosaur",
    "subgroup": "Dromaeosauridae",
    "S": 0.68,
    "I": 0.52,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Best pack hunting evidence"
  },
  {
    "name": "Barn swallow",
    "group": "Bird",
    "subgroup": "Swallow",
    "S": 0.68,
    "I": 0.52,
    "U": 0.52,
    "confidence": "MEDIUM",
    "notes": "6000+ mile migration"
  },
  {
    "name": "Tyrannosaurus rex",
    "group": "Dinosaur",
    "subgroup": "Tyrannosauridae",
    "S": 0.72,
    "I": 0.5,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "NOT baboon-smart (Caspar 2024)"
  },
  {
    "name": "Saltwater crocodile",
    "group": "Reptile",
    "subgroup": "Crocodilian",
    "S": 0.65,
    "I": 0.5,
    "U": 0.55,
    "confidence": "MEDIUM",
    "notes": "Stick-lure tool use, maternal care"
  },
  {
    "name": "Harp seal",
    "group": "Mammal",
    "subgroup": "Marine mammal",
    "S": 0.65,
    "I": 0.5,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Pup recognition by smell"
  },
  {
    "name": "Northern cardinal",
    "group": "Bird",
    "subgroup": "Songbird",
    "S": 0.62,
    "I": 0.52,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Pair duetting"
  },
  {
    "name": "Kakapo",
    "group": "Bird",
    "subgroup": "Parrot",
    "S": 0.62,
    "I": 0.52,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "247 alive, every one named"
  },
  {
    "name": "Canary",
    "group": "Bird",
    "subgroup": "Songbird",
    "S": 0.62,
    "I": 0.52,
    "U": 0.55,
    "confidence": "MEDIUM",
    "notes": "Seasonal neurogenesis"
  },
  {
    "name": "Oriental magpie-robin",
    "group": "Bird",
    "subgroup": "Songbird",
    "S": 0.62,
    "I": 0.52,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Bangladesh national bird"
  },
  {
    "name": "Rufous hornero",
    "group": "Bird",
    "subgroup": "Songbird",
    "S": 0.62,
    "I": 0.52,
    "U": 0.55,
    "confidence": "LOW",
    "notes": "Argentina national, mud oven nests"
  },
  {
    "name": "Velociraptor",
    "group": "Dinosaur",
    "subgroup": "Dromaeosauridae",
    "S": 0.68,
    "I": 0.52,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Killing claw precision"
  },
  {
    "name": "Deer",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.68,
    "I": 0.5,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Nocturnal switch during hunting season"
  },
  {
    "name": "Zebra",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.68,
    "I": 0.5,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Unique stripe patterns = ID"
  },
  {
    "name": "Moose",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.68,
    "I": 0.5,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Largest deer, dives for plants"
  },
  {
    "name": "Herring gull",
    "group": "Bird",
    "subgroup": "Seabird",
    "S": 0.65,
    "I": 0.52,
    "U": 0.52,
    "confidence": "MEDIUM",
    "notes": "Rain-mimicry foot-stamping, shellfish dropping"
  },
  {
    "name": "White-throated dipper",
    "group": "Bird",
    "subgroup": "Songbird",
    "S": 0.65,
    "I": 0.52,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Only aquatic passerine"
  },
  {
    "name": "Bee-eater",
    "group": "Bird",
    "subgroup": "Roller",
    "S": 0.65,
    "I": 0.52,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "De-stings bees before eating"
  },
  {
    "name": "Andean condor",
    "group": "Bird",
    "subgroup": "Vulture",
    "S": 0.68,
    "I": 0.48,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Largest flying bird by combined measure"
  },
  {
    "name": "Nile monitor",
    "group": "Reptile",
    "subgroup": "Monitor",
    "S": 0.65,
    "I": 0.5,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Cooperative croc nest raiding"
  },
  {
    "name": "Opossum",
    "group": "Mammal",
    "subgroup": "Marsupial",
    "S": 0.65,
    "I": 0.5,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Death feigning"
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
    "name": "Cassowary",
    "group": "Bird",
    "subgroup": "Ratite",
    "S": 0.65,
    "I": 0.5,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Infrasound communication, dangerous"
  },
  {
    "name": "Kiwi",
    "group": "Bird",
    "subgroup": "Ratite",
    "S": 0.65,
    "I": 0.5,
    "U": 0.52,
    "confidence": "MEDIUM",
    "notes": "Olfaction-dominant, nostrils at bill tip"
  },
  {
    "name": "Common cuckoo",
    "group": "Bird",
    "subgroup": "Cuckoo",
    "S": 0.65,
    "I": 0.52,
    "U": 0.5,
    "confidence": "MEDIUM",
    "notes": "Brood parasitism, egg mimicry"
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
    "name": "Fruit fly",
    "group": "Insect",
    "subgroup": "Diptera",
    "S": 0.55,
    "I": 0.58,
    "U": 0.52,
    "confidence": "HIGH",
    "notes": "Selective attention 20-30 Hz, consciousness hypothesis"
  },
  {
    "name": "Reindeer",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.68,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "UV vision, 5000 km migration"
  },
  {
    "name": "Echidna",
    "group": "Mammal",
    "subgroup": "Monotreme",
    "S": 0.68,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Largest relative prefrontal cortex"
  },
  {
    "name": "Common swift",
    "group": "Bird",
    "subgroup": "Swift",
    "S": 0.68,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Sleeps while flying, 10 months airborne"
  },
  {
    "name": "Perentie",
    "group": "Reptile",
    "subgroup": "Monitor",
    "S": 0.65,
    "I": 0.48,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Bipedal surveillance"
  },
  {
    "name": "American alligator",
    "group": "Reptile",
    "subgroup": "Crocodilian",
    "S": 0.65,
    "I": 0.48,
    "U": 0.52,
    "confidence": "MEDIUM",
    "notes": "Most sensitive touch (jaw ISOs)"
  },
  {
    "name": "Hippopotamus",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.65,
    "I": 0.48,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Underwater vocal communication"
  },
  {
    "name": "Ostrich",
    "group": "Bird",
    "subgroup": "Ratite",
    "S": 0.65,
    "I": 0.48,
    "U": 0.52,
    "confidence": "MEDIUM",
    "notes": "Largest eyes of any land animal"
  },
  {
    "name": "Pelican (great white)",
    "group": "Bird",
    "subgroup": "Waterbird",
    "S": 0.65,
    "I": 0.48,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Cooperative group fishing"
  },
  {
    "name": "Leaf-cutter bee",
    "group": "Insect",
    "subgroup": "Solitary Hymenoptera",
    "S": 0.62,
    "I": 0.5,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Precise circular leaf-cutting"
  },
  {
    "name": "Giant panda",
    "group": "Mammal",
    "subgroup": "Bear",
    "S": 0.62,
    "I": 0.5,
    "U": 0.52,
    "confidence": "MEDIUM",
    "notes": "Bamboo specialist, pseudothumb"
  },
  {
    "name": "Killdeer",
    "group": "Bird",
    "subgroup": "Shorebird",
    "S": 0.62,
    "I": 0.5,
    "U": 0.52,
    "confidence": "MEDIUM",
    "notes": "Broken-wing display = flexible deception"
  },
  {
    "name": "Resplendent quetzal",
    "group": "Bird",
    "subgroup": "Trogon",
    "S": 0.62,
    "I": 0.5,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Sacred to Maya/Aztec, Guatemala national"
  },
  {
    "name": "American robin",
    "group": "Bird",
    "subgroup": "Songbird",
    "S": 0.62,
    "I": 0.5,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Head-cocking for earthworms"
  },
  {
    "name": "Andean cock-of-the-rock",
    "group": "Bird",
    "subgroup": "Songbird",
    "S": 0.62,
    "I": 0.5,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Peru national, elaborate lek"
  },
  {
    "name": "Strawberry poison frog",
    "group": "Amphibian",
    "subgroup": "Dendrobatid",
    "S": 0.58,
    "I": 0.52,
    "U": 0.52,
    "confidence": "MEDIUM",
    "notes": "Individually provisions multiple tadpoles at separate locations over weeks"
  },
  {
    "name": "Pteranodon",
    "group": "Dinosaur",
    "subgroup": "Pterosauria",
    "S": 0.68,
    "I": 0.48,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "Flying reptile, not a dinosaur"
  },
  {
    "name": "Markhor",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.65,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Spiral horns, cliff specialist"
  },
  {
    "name": "Okapi",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.65,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Closest giraffe relative"
  },
  {
    "name": "Naked mole-rat",
    "group": "Mammal",
    "subgroup": "Rodent",
    "S": 0.5,
    "I": 0.52,
    "U": 0.6,
    "confidence": "MEDIUM",
    "notes": "Only eusocial mammal"
  },
  {
    "name": "Pelican (brown)",
    "group": "Bird",
    "subgroup": "Waterbird",
    "S": 0.65,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Plunge-diving"
  },
  {
    "name": "Gaur",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.65,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Largest living bovine"
  },
  {
    "name": "Chital deer",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.65,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Follows langurs for fruit"
  },
  {
    "name": "Cockroach",
    "group": "Insect",
    "subgroup": "Blattodea",
    "S": 0.62,
    "I": 0.5,
    "U": 0.5,
    "confidence": "MEDIUM",
    "notes": "Central complex = command hub"
  },
  {
    "name": "Llama",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.62,
    "I": 0.48,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Guard llamas protect sheep"
  },
  {
    "name": "Capybara",
    "group": "Mammal",
    "subgroup": "Rodent",
    "S": 0.62,
    "I": 0.48,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Largest rodent, highly social"
  },
  {
    "name": "Greylag goose",
    "group": "Bird",
    "subgroup": "Waterbird",
    "S": 0.62,
    "I": 0.48,
    "U": 0.52,
    "confidence": "MEDIUM",
    "notes": "Triadic awareness, grief"
  },
  {
    "name": "Flamingo",
    "group": "Bird",
    "subgroup": "Flamingo",
    "S": 0.62,
    "I": 0.48,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Friendships lasting decades"
  },
  {
    "name": "Mute swan",
    "group": "Bird",
    "subgroup": "Waterbird",
    "S": 0.62,
    "I": 0.48,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Denmark national"
  },
  {
    "name": "Whooper swan",
    "group": "Bird",
    "subgroup": "Waterbird",
    "S": 0.62,
    "I": 0.48,
    "U": 0.52,
    "confidence": "LOW",
    "notes": "Finland national"
  },
  {
    "name": "Turkey vulture",
    "group": "Bird",
    "subgroup": "Vulture",
    "S": 0.7,
    "I": 0.45,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "Extraordinary olfaction for a bird"
  },
  {
    "name": "Mole (star-nosed)",
    "group": "Mammal",
    "subgroup": "Insectivore",
    "S": 0.65,
    "I": 0.48,
    "U": 0.48,
    "confidence": "MEDIUM",
    "notes": "120 ms foraging decision"
  },
  {
    "name": "Cuban crocodile",
    "group": "Reptile",
    "subgroup": "Crocodilian",
    "S": 0.62,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Pack hunting, highest cognitive rep"
  },
  {
    "name": "Red panda",
    "group": "Mammal",
    "subgroup": "Carnivore",
    "S": 0.62,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Arboreal specialist"
  },
  {
    "name": "Alpaca",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.62,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Communal dung piles, spitting"
  },
  {
    "name": "Pika",
    "group": "Mammal",
    "subgroup": "Lagomorph",
    "S": 0.62,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Hay-making food preservation"
  },
  {
    "name": "Elephant shrew",
    "group": "Mammal",
    "subgroup": "Insectivore",
    "S": 0.62,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Escape trail networks"
  },
  {
    "name": "Emu",
    "group": "Bird",
    "subgroup": "Ratite",
    "S": 0.62,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Male-only parental care"
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
    "name": "Himalayan monal",
    "group": "Bird",
    "subgroup": "Gamebird",
    "S": 0.62,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Nepal national bird"
  },
  {
    "name": "Ring-necked pheasant",
    "group": "Bird",
    "subgroup": "Gamebird",
    "S": 0.62,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Male display"
  },
  {
    "name": "White stork",
    "group": "Bird",
    "subgroup": "Waterbird",
    "S": 0.62,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Nest fidelity for decades"
  },
  {
    "name": "Hoopoe",
    "group": "Bird",
    "subgroup": "Hoopoe",
    "S": 0.62,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Israel national bird"
  },
  {
    "name": "Sri Lanka junglefowl",
    "group": "Bird",
    "subgroup": "Gamebird",
    "S": 0.62,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Sri Lanka national"
  },
  {
    "name": "Mud dauber",
    "group": "Insect",
    "subgroup": "Solitary Hymenoptera",
    "S": 0.6,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Nest construction"
  },
  {
    "name": "Wombat",
    "group": "Mammal",
    "subgroup": "Marsupial",
    "S": 0.6,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Cube-shaped feces for territory marking"
  },
  {
    "name": "Hyrax",
    "group": "Mammal",
    "subgroup": "Hyrax",
    "S": 0.6,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Closest relative to elephants, vocal syntax"
  },
  {
    "name": "Rufous-bellied thrush",
    "group": "Bird",
    "subgroup": "Songbird",
    "S": 0.6,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Brazil national bird"
  },
  {
    "name": "Clay-colored thrush",
    "group": "Bird",
    "subgroup": "Songbird",
    "S": 0.6,
    "I": 0.48,
    "U": 0.5,
    "confidence": "LOW",
    "notes": "Costa Rica national bird"
  },
  {
    "name": "Tegu",
    "group": "Reptile",
    "subgroup": "Lizard",
    "S": 0.62,
    "I": 0.48,
    "U": 0.48,
    "confidence": "MEDIUM",
    "notes": "House-trainable, seasonal endothermy"
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
    "notes": "Navigates by Milky Way"
  },
  {
    "name": "Atlantic puffin",
    "group": "Bird",
    "subgroup": "Seabird",
    "S": 0.62,
    "I": 0.48,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "First seabird tool use (stick scratching)"
  },
  {
    "name": "Lilac-breasted roller",
    "group": "Bird",
    "subgroup": "Roller",
    "S": 0.62,
    "I": 0.48,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "Kenya national"
  },
  {
    "name": "Hammerhead shark",
    "group": "Fish",
    "subgroup": "Sphyrnidae",
    "S": 0.8,
    "I": 0.42,
    "U": 0.42,
    "confidence": "LOW",
    "notes": "Enhanced electroreception via cephalofoil"
  },
  {
    "name": "Monarch butterfly",
    "group": "Insect",
    "subgroup": "Lepidoptera",
    "S": 0.65,
    "I": 0.45,
    "U": 0.48,
    "confidence": "MEDIUM",
    "notes": "Time-compensated sun compass migration"
  },
  {
    "name": "Arctic tern",
    "group": "Bird",
    "subgroup": "Seabird",
    "S": 0.65,
    "I": 0.45,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "71,000 km annual migration"
  },
  {
    "name": "Electric eel",
    "group": "Fish",
    "subgroup": "Gymnotidae",
    "S": 0.65,
    "I": 0.48,
    "U": 0.45,
    "confidence": "LOW",
    "notes": "Electrogenesis, remote-controls prey"
  },
  {
    "name": "Cichlid (Oscar)",
    "group": "Fish",
    "subgroup": "Cichlidae",
    "S": 0.58,
    "I": 0.5,
    "U": 0.48,
    "confidence": "MEDIUM",
    "notes": "Reported play, strong personalities"
  },
  {
    "name": "Tiger beetle",
    "group": "Insect",
    "subgroup": "Coleoptera",
    "S": 0.68,
    "I": 0.45,
    "U": 0.45,
    "confidence": "LOW",
    "notes": "Runs faster than it can see"
  },
  {
    "name": "Great white shark",
    "group": "Fish",
    "subgroup": "Lamnidae",
    "S": 0.78,
    "I": 0.42,
    "U": 0.42,
    "confidence": "LOW",
    "notes": "Extraordinary sensing, breach planning"
  },
  {
    "name": "King cobra",
    "group": "Reptile",
    "subgroup": "Snake",
    "S": 0.62,
    "I": 0.45,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "Only nest-building snake"
  },
  {
    "name": "Wildebeest",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.62,
    "I": 0.45,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "1.5M individual migration"
  },
  {
    "name": "Springbok",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.62,
    "I": 0.45,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "Pronking fitness signal"
  },
  {
    "name": "Porcupine",
    "group": "Mammal",
    "subgroup": "Rodent",
    "S": 0.62,
    "I": 0.45,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "Understudied"
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
    "name": "Mallard duck",
    "group": "Bird",
    "subgroup": "Waterbird",
    "S": 0.62,
    "I": 0.45,
    "U": 0.48,
    "confidence": "MEDIUM",
    "notes": "Ducklings learn abstract same/different"
  },
  {
    "name": "Mourning dove",
    "group": "Bird",
    "subgroup": "Pigeon",
    "S": 0.62,
    "I": 0.45,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "Pair bonding"
  },
  {
    "name": "Caiman",
    "group": "Reptile",
    "subgroup": "Crocodilian",
    "S": 0.62,
    "I": 0.45,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "Social hierarchy, maternal care"
  },
  {
    "name": "Mugger crocodile",
    "group": "Reptile",
    "subgroup": "Crocodilian",
    "S": 0.62,
    "I": 0.45,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "Stick-lure tool use"
  },
  {
    "name": "Yak",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.62,
    "I": 0.45,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "Extreme altitude specialist"
  },
  {
    "name": "Tapir",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.62,
    "I": 0.45,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "Prehensile nose, seed disperser"
  },
  {
    "name": "Wrasse (Napoleon)",
    "group": "Fish",
    "subgroup": "Labridae",
    "S": 0.58,
    "I": 0.48,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "Cooperative hunting, human recognition"
  },
  {
    "name": "Crimson sunbird",
    "group": "Bird",
    "subgroup": "Songbird",
    "S": 0.58,
    "I": 0.48,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "Singapore national bird"
  },
  {
    "name": "Poison dart frog",
    "group": "Amphibian",
    "subgroup": "Dendrobatid",
    "S": 0.58,
    "I": 0.48,
    "U": 0.48,
    "confidence": "MEDIUM",
    "notes": "Tadpole transport, territorial wrestling with assessment"
  },
  {
    "name": "Grasshopper/Locust",
    "group": "Insect",
    "subgroup": "Orthoptera",
    "S": 0.6,
    "I": 0.45,
    "U": 0.48,
    "confidence": "MEDIUM",
    "notes": "Phase polyphenism: two brains"
  },
  {
    "name": "Shrew",
    "group": "Mammal",
    "subgroup": "Insectivore",
    "S": 0.6,
    "I": 0.45,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "Some echolocate, extreme metabolism"
  },
  {
    "name": "Nicobar pigeon",
    "group": "Bird",
    "subgroup": "Pigeon",
    "S": 0.6,
    "I": 0.45,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "Closest living dodo relative"
  },
  {
    "name": "Quail",
    "group": "Bird",
    "subgroup": "Gamebird",
    "S": 0.6,
    "I": 0.45,
    "U": 0.48,
    "confidence": "MEDIUM",
    "notes": "Research model"
  },
  {
    "name": "Grey peacock-pheasant",
    "group": "Bird",
    "subgroup": "Gamebird",
    "S": 0.6,
    "I": 0.45,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "Myanmar national"
  },
  {
    "name": "Chinchilla",
    "group": "Mammal",
    "subgroup": "Rodent",
    "S": 0.6,
    "I": 0.45,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "Densest fur, social"
  },
  {
    "name": "Pufferfish",
    "group": "Fish",
    "subgroup": "Tetraodontidae",
    "S": 0.55,
    "I": 0.48,
    "U": 0.48,
    "confidence": "MEDIUM",
    "notes": "Geometric sand circle construction"
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
    "notes": "Social hierarchy, transitive inference"
  },
  {
    "name": "Tuskfish",
    "group": "Fish",
    "subgroup": "Labridae",
    "S": 0.58,
    "I": 0.48,
    "U": 0.45,
    "confidence": "MEDIUM",
    "notes": "Tool use: anvil for shellfish"
  },
  {
    "name": "Scarlet ibis",
    "group": "Bird",
    "subgroup": "Waterbird",
    "S": 0.58,
    "I": 0.45,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "Trinidad & Tobago national"
  },
  {
    "name": "Cuban trogon",
    "group": "Bird",
    "subgroup": "Trogon",
    "S": 0.58,
    "I": 0.45,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "Cuba national"
  },
  {
    "name": "Sacred scarab",
    "group": "Insect",
    "subgroup": "Coleoptera",
    "S": 0.6,
    "I": 0.45,
    "U": 0.45,
    "confidence": "LOW",
    "notes": "Sun compass, sacred to Egypt"
  },
  {
    "name": "Panther chameleon",
    "group": "Reptile",
    "subgroup": "Lizard",
    "S": 0.68,
    "I": 0.42,
    "U": 0.42,
    "confidence": "LOW",
    "notes": "Independent eyes, color communication"
  },
  {
    "name": "Tungara frog",
    "group": "Amphibian",
    "subgroup": "Leptodactylid",
    "S": 0.55,
    "I": 0.48,
    "U": 0.45,
    "confidence": "MEDIUM",
    "notes": "Adjusts call complexity by competition AND predation risk"
  },
  {
    "name": "Moray eel",
    "group": "Fish",
    "subgroup": "Muraenidae",
    "S": 0.58,
    "I": 0.45,
    "U": 0.45,
    "confidence": "MEDIUM",
    "notes": "Cooperative hunting with groupers"
  },
  {
    "name": "Assassin bug",
    "group": "Insect",
    "subgroup": "Hemiptera",
    "S": 0.58,
    "I": 0.45,
    "U": 0.45,
    "confidence": "LOW",
    "notes": "Web plucking, adjustable mimicry"
  },
  {
    "name": "Arabian oryx",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.62,
    "I": 0.42,
    "U": 0.45,
    "confidence": "LOW",
    "notes": "Detects rain from 50 km"
  },
  {
    "name": "Saiga antelope",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.62,
    "I": 0.42,
    "U": 0.45,
    "confidence": "VERY LOW",
    "notes": "Bizarre nose, critically endangered"
  },
  {
    "name": "Gharial",
    "group": "Reptile",
    "subgroup": "Crocodilian",
    "S": 0.6,
    "I": 0.42,
    "U": 0.45,
    "confidence": "LOW",
    "notes": "Acoustic communication via ghara"
  },
  {
    "name": "Painted lady",
    "group": "Insect",
    "subgroup": "Lepidoptera",
    "S": 0.6,
    "I": 0.42,
    "U": 0.45,
    "confidence": "LOW",
    "notes": "Longest insect migration"
  },
  {
    "name": "White rhinoceros",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.6,
    "I": 0.42,
    "U": 0.45,
    "confidence": "LOW",
    "notes": "Dung middens, poor vision"
  },
  {
    "name": "Indian rhinoceros",
    "group": "Mammal",
    "subgroup": "Ungulate",
    "S": 0.6,
    "I": 0.42,
    "U": 0.45,
    "confidence": "LOW",
    "notes": "Dung communication"
  },
  {
    "name": "Black-tailed godwit",
    "group": "Bird",
    "subgroup": "Shorebird",
    "S": 0.6,
    "I": 0.42,
    "U": 0.45,
    "confidence": "LOW",
    "notes": "Netherlands national"
  },
  {
    "name": "Golden poison frog",
    "group": "Amphibian",
    "subgroup": "Dendrobatid",
    "S": 0.55,
    "I": 0.45,
    "U": 0.45,
    "confidence": "LOW",
    "notes": "Most toxic vertebrate, social for a frog"
  },
  {
    "name": "Cricket",
    "group": "Insect",
    "subgroup": "Orthoptera",
    "S": 0.6,
    "I": 0.42,
    "U": 0.44,
    "confidence": "MEDIUM",
    "notes": "Winner/loser mood states"
  },
  {
    "name": "Manatee",
    "group": "Mammal",
    "subgroup": "Sirenian",
    "S": 0.55,
    "I": 0.42,
    "U": 0.48,
    "confidence": "LOW",
    "notes": "Touch-sensitive, gentle"
  },
  {
    "name": "C. elegans",
    "group": "Nematode",
    "subgroup": "Nematode",
    "S": 0.4,
    "I": 0.5,
    "U": 0.55,
    "confidence": "HIGH",
    "notes": "302 neurons mapped"
  },
  {
    "name": "Mudskipper",
    "group": "Fish",
    "subgroup": "Gobiidae",
    "S": 0.58,
    "I": 0.45,
    "U": 0.42,
    "confidence": "LOW",
    "notes": "Land+water, builds mud towers"
  },
  {
    "name": "Quokka",
    "group": "Mammal",
    "subgroup": "Marsupial",
    "S": 0.58,
    "I": 0.42,
    "U": 0.45,
    "confidence": "LOW",
    "notes": "Habituated to humans"
  },
  {
    "name": "Dormouse",
    "group": "Mammal",
    "subgroup": "Rodent",
    "S": 0.58,
    "I": 0.42,
    "U": 0.45,
    "confidence": "VERY LOW",
    "notes": "Hibernates 6+ months"
  },
  {
    "name": "Reef shark",
    "group": "Fish",
    "subgroup": "Carcharhinidae",
    "S": 0.68,
    "I": 0.4,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Social hierarchy"
  },
  {
    "name": "Bull shark",
    "group": "Fish",
    "subgroup": "Carcharhinidae",
    "S": 0.68,
    "I": 0.4,
    "U": 0.4,
    "confidence": "VERY LOW",
    "notes": "Freshwater flexibility"
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
    "name": "Goliath frog",
    "group": "Amphibian",
    "subgroup": "Conrauidae",
    "S": 0.52,
    "I": 0.45,
    "U": 0.45,
    "confidence": "LOW",
    "notes": "Builds breeding ponds by clearing rocks"
  },
  {
    "name": "Sailfish",
    "group": "Fish",
    "subgroup": "Istiophoridae",
    "S": 0.62,
    "I": 0.42,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Group hunting with turn-taking"
  },
  {
    "name": "Spinosaurus",
    "group": "Dinosaur",
    "subgroup": "Spinosauridae",
    "S": 0.65,
    "I": 0.4,
    "U": 0.4,
    "confidence": "VERY LOW",
    "notes": "Semi-aquatic, pressure sensors"
  },
  {
    "name": "Tuna (bluefin)",
    "group": "Fish",
    "subgroup": "Scombridae",
    "S": 0.65,
    "I": 0.4,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Endothermic brain"
  },
  {
    "name": "Stickleback",
    "group": "Fish",
    "subgroup": "Gasterosteidae",
    "S": 0.55,
    "I": 0.45,
    "U": 0.42,
    "confidence": "HIGH",
    "notes": "Bold/shy personalities, social learning"
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
    "name": "Burying beetle",
    "group": "Insect",
    "subgroup": "Coleoptera",
    "S": 0.58,
    "I": 0.42,
    "U": 0.42,
    "confidence": "MEDIUM",
    "notes": "Biparental care, adjusts brood to resource"
  },
  {
    "name": "Darwin's frog",
    "group": "Amphibian",
    "subgroup": "Rhinodermatid",
    "S": 0.5,
    "I": 0.45,
    "U": 0.45,
    "confidence": "LOW",
    "notes": "Male broods tadpoles in vocal sac 6-8 weeks"
  },
  {
    "name": "Giant anteater",
    "group": "Mammal",
    "subgroup": "Xenarthra",
    "S": 0.6,
    "I": 0.4,
    "U": 0.42,
    "confidence": "LOW",
    "notes": "60 cm tongue, 35K insects/day"
  },
  {
    "name": "Rattlesnake",
    "group": "Reptile",
    "subgroup": "Snake",
    "S": 0.62,
    "I": 0.4,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "IR imaging, graduated rattle warning"
  },
  {
    "name": "Dugong",
    "group": "Mammal",
    "subgroup": "Sirenian",
    "S": 0.55,
    "I": 0.4,
    "U": 0.45,
    "confidence": "LOW",
    "notes": "Seagrass grazer, 70+ years"
  },
  {
    "name": "Sawfish",
    "group": "Fish",
    "subgroup": "Pristidae",
    "S": 0.68,
    "I": 0.38,
    "U": 0.38,
    "confidence": "VERY LOW",
    "notes": "Electroreceptive saw, critically endangered"
  },
  {
    "name": "Diving beetle",
    "group": "Insect",
    "subgroup": "Coleoptera",
    "S": 0.58,
    "I": 0.4,
    "U": 0.42,
    "confidence": "VERY LOW",
    "notes": "Dual-environment"
  },
  {
    "name": "Katydid",
    "group": "Insect",
    "subgroup": "Orthoptera",
    "S": 0.58,
    "I": 0.4,
    "U": 0.42,
    "confidence": "LOW",
    "notes": "Acoustic specialist, leaf mimicry"
  },
  {
    "name": "Numbat",
    "group": "Mammal",
    "subgroup": "Marsupial",
    "S": 0.58,
    "I": 0.4,
    "U": 0.42,
    "confidence": "LOW",
    "notes": "Only diurnal marsupial"
  },
  {
    "name": "Clownfish",
    "group": "Fish",
    "subgroup": "Pomacentridae",
    "S": 0.55,
    "I": 0.42,
    "U": 0.42,
    "confidence": "MEDIUM",
    "notes": "Social hierarchy drives sex change"
  },
  {
    "name": "Piranha",
    "group": "Fish",
    "subgroup": "Serrasalmidae",
    "S": 0.55,
    "I": 0.42,
    "U": 0.42,
    "confidence": "LOW",
    "notes": "Group hunting, vocal communication"
  },
  {
    "name": "Bark beetle",
    "group": "Insect",
    "subgroup": "Coleoptera",
    "S": 0.55,
    "I": 0.42,
    "U": 0.42,
    "confidence": "LOW",
    "notes": "Pheromone mass attacks"
  },
  {
    "name": "American bullfrog",
    "group": "Amphibian",
    "subgroup": "Ranid",
    "S": 0.55,
    "I": 0.42,
    "U": 0.42,
    "confidence": "MEDIUM",
    "notes": "Graded territorial escalation, individual voice recognition"
  },
  {
    "name": "Red-eyed tree frog",
    "group": "Amphibian",
    "subgroup": "Phyllomedusid",
    "S": 0.55,
    "I": 0.42,
    "U": 0.42,
    "confidence": "LOW",
    "notes": "Embryos hatch early if they detect snake vibrations"
  },
  {
    "name": "Mantella",
    "group": "Amphibian",
    "subgroup": "Mantellid",
    "S": 0.55,
    "I": 0.42,
    "U": 0.42,
    "confidence": "LOW",
    "notes": "Madagascar convergent poison frog"
  },
  {
    "name": "Pike",
    "group": "Fish",
    "subgroup": "Esocidae",
    "S": 0.6,
    "I": 0.4,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Lure avoidance learning"
  },
  {
    "name": "Salmon (Atlantic)",
    "group": "Fish",
    "subgroup": "Salmonidae",
    "S": 0.6,
    "I": 0.4,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Olfactory navigation"
  },
  {
    "name": "Stingray",
    "group": "Fish",
    "subgroup": "Dasyatidae",
    "S": 0.6,
    "I": 0.4,
    "U": 0.4,
    "confidence": "MEDIUM",
    "notes": "Problem solving (Kuba 2010)"
  },
  {
    "name": "Indian cobra",
    "group": "Reptile",
    "subgroup": "Snake",
    "S": 0.58,
    "I": 0.4,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Hood threat display"
  },
  {
    "name": "Koala",
    "group": "Mammal",
    "subgroup": "Marsupial",
    "S": 0.58,
    "I": 0.38,
    "U": 0.42,
    "confidence": "MEDIUM",
    "notes": "Smallest brain-to-body ratio of any mammal"
  },
  {
    "name": "Green iguana",
    "group": "Reptile",
    "subgroup": "Lizard",
    "S": 0.55,
    "I": 0.4,
    "U": 0.42,
    "confidence": "LOW",
    "notes": "Parietal third eye"
  },
  {
    "name": "Trout",
    "group": "Fish",
    "subgroup": "Salmonidae",
    "S": 0.55,
    "I": 0.42,
    "U": 0.4,
    "confidence": "MEDIUM",
    "notes": "Cognitive flexibility trainable"
  },
  {
    "name": "Stag beetle",
    "group": "Insect",
    "subgroup": "Coleoptera",
    "S": 0.55,
    "I": 0.4,
    "U": 0.42,
    "confidence": "LOW",
    "notes": "Opponent size assessment before combat"
  },
  {
    "name": "Cane toad",
    "group": "Amphibian",
    "subgroup": "Bufonid",
    "S": 0.52,
    "I": 0.42,
    "U": 0.42,
    "confidence": "MEDIUM",
    "notes": "Most successful amphibian invader, behavioral flexibility"
  },
  {
    "name": "Swordfish",
    "group": "Fish",
    "subgroup": "Xiphiidae",
    "S": 0.62,
    "I": 0.38,
    "U": 0.38,
    "confidence": "VERY LOW",
    "notes": "Brain-heating organ"
  },
  {
    "name": "Midwife toad",
    "group": "Amphibian",
    "subgroup": "Alytid",
    "S": 0.5,
    "I": 0.42,
    "U": 0.42,
    "confidence": "LOW",
    "notes": "Male carries eggs on legs for weeks"
  },
  {
    "name": "African clawed frog",
    "group": "Amphibian",
    "subgroup": "Pipid",
    "S": 0.5,
    "I": 0.42,
    "U": 0.42,
    "confidence": "HIGH",
    "notes": "Major lab model, spatial learning documented"
  },
  {
    "name": "Lobster",
    "group": "Crustacean",
    "subgroup": "Decapod",
    "S": 0.58,
    "I": 0.38,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Social hierarchy, serotonin"
  },
  {
    "name": "Parasaurolophus",
    "group": "Dinosaur",
    "subgroup": "Hadrosauridae",
    "S": 0.58,
    "I": 0.38,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Built-in resonating crest"
  },
  {
    "name": "Boa constrictor",
    "group": "Reptile",
    "subgroup": "Snake",
    "S": 0.58,
    "I": 0.38,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Monitors prey heartbeat"
  },
  {
    "name": "Firefly",
    "group": "Insect",
    "subgroup": "Coleoptera",
    "S": 0.58,
    "I": 0.38,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Predatory flash mimicry"
  },
  {
    "name": "Gecko (tokay)",
    "group": "Reptile",
    "subgroup": "Lizard",
    "S": 0.58,
    "I": 0.38,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Vocal 'tokay' call"
  },
  {
    "name": "Bearded dragon",
    "group": "Reptile",
    "subgroup": "Lizard",
    "S": 0.55,
    "I": 0.4,
    "U": 0.4,
    "confidence": "MEDIUM",
    "notes": "First reptile social learning (2015)"
  },
  {
    "name": "Triggerfish",
    "group": "Fish",
    "subgroup": "Balistidae",
    "S": 0.55,
    "I": 0.4,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "3D nest defense, diver memory"
  },
  {
    "name": "Bombardier beetle",
    "group": "Insect",
    "subgroup": "Coleoptera",
    "S": 0.55,
    "I": 0.4,
    "U": 0.4,
    "confidence": "VERY LOW",
    "notes": "Precision chemical spray"
  },
  {
    "name": "Betta",
    "group": "Fish",
    "subgroup": "Osphronemidae",
    "S": 0.52,
    "I": 0.42,
    "U": 0.4,
    "confidence": "MEDIUM",
    "notes": "Audience effects, transitive inference"
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
    "notes": "Pair bonding, daily dance, independent eyes"
  },
  {
    "name": "Blenny (fang)",
    "group": "Fish",
    "subgroup": "Blenniidae",
    "S": 0.52,
    "I": 0.42,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "False cleaner deception"
  },
  {
    "name": "Barracuda",
    "group": "Fish",
    "subgroup": "Sphyraenidae",
    "S": 0.6,
    "I": 0.38,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Visual ambush predator"
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
    "name": "Mosquito",
    "group": "Insect",
    "subgroup": "Diptera",
    "S": 0.6,
    "I": 0.38,
    "U": 0.38,
    "confidence": "MEDIUM",
    "notes": "Multi-modal host tracking"
  },
  {
    "name": "Whirligig beetle",
    "group": "Insect",
    "subgroup": "Coleoptera",
    "S": 0.6,
    "I": 0.38,
    "U": 0.38,
    "confidence": "VERY LOW",
    "notes": "Split eyes: air+water simultaneously"
  },
  {
    "name": "Antlion larva",
    "group": "Insect",
    "subgroup": "Neuroptera",
    "S": 0.5,
    "I": 0.4,
    "U": 0.42,
    "confidence": "LOW",
    "notes": "Optimized pit construction"
  },
  {
    "name": "Human (dreaming)",
    "group": "Mammal",
    "subgroup": "Great Ape",
    "S": 0.3,
    "I": 0.7,
    "U": 0.4,
    "confidence": "HIGH",
    "notes": "Reduced external sensing"
  },
  {
    "name": "Salmon (Pacific)",
    "group": "Fish",
    "subgroup": "Salmonidae",
    "S": 0.58,
    "I": 0.38,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Semelparous migration"
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
    "name": "Tsetse fly",
    "group": "Insect",
    "subgroup": "Diptera",
    "S": 0.58,
    "I": 0.38,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Viviparous fly"
  },
  {
    "name": "Green mamba",
    "group": "Reptile",
    "subgroup": "Snake",
    "S": 0.58,
    "I": 0.38,
    "U": 0.38,
    "confidence": "VERY LOW",
    "notes": "Arboreal, fast neurotoxin"
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
    "notes": "Anxiety-like behavior"
  },
  {
    "name": "Tuatara",
    "group": "Reptile",
    "subgroup": "Tuatara",
    "S": 0.55,
    "I": 0.38,
    "U": 0.4,
    "confidence": "MEDIUM",
    "notes": "250M year lineage, functional third eye"
  },
  {
    "name": "Bass",
    "group": "Fish",
    "subgroup": "Centrarchidae",
    "S": 0.55,
    "I": 0.4,
    "U": 0.38,
    "confidence": "MEDIUM",
    "notes": "Single-trial lure avoidance"
  },
  {
    "name": "Water strider",
    "group": "Insect",
    "subgroup": "Hemiptera",
    "S": 0.55,
    "I": 0.38,
    "U": 0.4,
    "confidence": "VERY LOW",
    "notes": "Surface wave communication"
  },
  {
    "name": "Hercules beetle",
    "group": "Insect",
    "subgroup": "Coleoptera",
    "S": 0.55,
    "I": 0.38,
    "U": 0.4,
    "confidence": "VERY LOW",
    "notes": "Strongest animal relative to weight"
  },
  {
    "name": "Armadillo",
    "group": "Mammal",
    "subgroup": "Xenarthra",
    "S": 0.55,
    "I": 0.38,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Identical quadruplets"
  },
  {
    "name": "Blue-tongued skink",
    "group": "Reptile",
    "subgroup": "Lizard",
    "S": 0.55,
    "I": 0.38,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "UV tongue display"
  },
  {
    "name": "Guppy",
    "group": "Fish",
    "subgroup": "Poeciliidae",
    "S": 0.52,
    "I": 0.42,
    "U": 0.38,
    "confidence": "HIGH",
    "notes": "Numerical discrimination, mate copying"
  },
  {
    "name": "Glass frog",
    "group": "Amphibian",
    "subgroup": "Centrolenid",
    "S": 0.5,
    "I": 0.4,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Paternal care, leaf vibration communication"
  },
  {
    "name": "Common toad",
    "group": "Amphibian",
    "subgroup": "Bufonid",
    "S": 0.5,
    "I": 0.4,
    "U": 0.4,
    "confidence": "MEDIUM",
    "notes": "Annual migration with multi-year pond memory"
  },
  {
    "name": "Gray tree frog",
    "group": "Amphibian",
    "subgroup": "Hylid",
    "S": 0.5,
    "I": 0.4,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Changes color to match substrate"
  },
  {
    "name": "Galapagos tortoise",
    "group": "Reptile",
    "subgroup": "Tortoise",
    "S": 0.5,
    "I": 0.38,
    "U": 0.42,
    "confidence": "LOW",
    "notes": "9-year memory, lives 175 years"
  },
  {
    "name": "Parrotfish",
    "group": "Fish",
    "subgroup": "Scaridae",
    "S": 0.55,
    "I": 0.38,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Mucus cocoon sleeping"
  },
  {
    "name": "Cod",
    "group": "Fish",
    "subgroup": "Gadidae",
    "S": 0.55,
    "I": 0.38,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Net avoidance learning"
  },
  {
    "name": "Gila monster",
    "group": "Reptile",
    "subgroup": "Lizard",
    "S": 0.55,
    "I": 0.38,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Venomous lizard"
  },
  {
    "name": "Earwig",
    "group": "Insect",
    "subgroup": "Dermaptera",
    "S": 0.52,
    "I": 0.38,
    "U": 0.4,
    "confidence": "VERY LOW",
    "notes": "Maternal care"
  },
  {
    "name": "Triceratops",
    "group": "Dinosaur",
    "subgroup": "Ceratopsidae",
    "S": 0.58,
    "I": 0.35,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Horn+frill display"
  },
  {
    "name": "Red-backed salamander",
    "group": "Amphibian",
    "subgroup": "Plethodontid",
    "S": 0.48,
    "I": 0.4,
    "U": 0.4,
    "confidence": "MEDIUM",
    "notes": "Chemical territories, dear enemy recognition by scent"
  },
  {
    "name": "Chinese giant salamander",
    "group": "Amphibian",
    "subgroup": "Cryptobranchid",
    "S": 0.5,
    "I": 0.38,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Largest amphibian, 2-3 month paternal care"
  },
  {
    "name": "Japanese giant salamander",
    "group": "Amphibian",
    "subgroup": "Cryptobranchid",
    "S": 0.5,
    "I": 0.38,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Active tail-fanning egg care, national treasure"
  },
  {
    "name": "Fire salamander",
    "group": "Amphibian",
    "subgroup": "Salamandrid",
    "S": 0.5,
    "I": 0.38,
    "U": 0.4,
    "confidence": "LOW",
    "notes": "Live birth in some subspecies"
  },
  {
    "name": "Anole",
    "group": "Reptile",
    "subgroup": "Lizard",
    "S": 0.52,
    "I": 0.38,
    "U": 0.38,
    "confidence": "MEDIUM",
    "notes": "First lizard problem-solving (2012)"
  },
  {
    "name": "Whale shark",
    "group": "Fish",
    "subgroup": "Rhincodontidae",
    "S": 0.6,
    "I": 0.35,
    "U": 0.35,
    "confidence": "LOW",
    "notes": "Gentle giant"
  },
  {
    "name": "Orb weaver",
    "group": "Arachnid",
    "subgroup": "Araneae",
    "S": 0.55,
    "I": 0.35,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Web as extended cognition"
  },
  {
    "name": "Leatherback turtle",
    "group": "Reptile",
    "subgroup": "Sea turtle",
    "S": 0.55,
    "I": 0.35,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Deepest-diving reptile, 12000 km migration"
  },
  {
    "name": "Ball python",
    "group": "Reptile",
    "subgroup": "Snake",
    "S": 0.55,
    "I": 0.35,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Bold/shy personality"
  },
  {
    "name": "Cicada",
    "group": "Insect",
    "subgroup": "Hemiptera",
    "S": 0.55,
    "I": 0.35,
    "U": 0.38,
    "confidence": "VERY LOW",
    "notes": "Prime-number cycles"
  },
  {
    "name": "Pangolin",
    "group": "Mammal",
    "subgroup": "Pangolin",
    "S": 0.55,
    "I": 0.35,
    "U": 0.38,
    "confidence": "VERY LOW",
    "notes": "Most trafficked mammal"
  },
  {
    "name": "Axolotl",
    "group": "Amphibian",
    "subgroup": "Ambystomatid",
    "S": 0.48,
    "I": 0.38,
    "U": 0.4,
    "confidence": "MEDIUM",
    "notes": "Regenerates limbs + brain, neotenic, spatial learning"
  },
  {
    "name": "Horned frog",
    "group": "Amphibian",
    "subgroup": "Ceratophryid",
    "S": 0.5,
    "I": 0.38,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Toe-wiggling prey lure, eats prey its own size"
  },
  {
    "name": "Wallace's flying frog",
    "group": "Amphibian",
    "subgroup": "Rhacophorid",
    "S": 0.5,
    "I": 0.38,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Glides between trees, foam nest construction"
  },
  {
    "name": "Surinam toad",
    "group": "Amphibian",
    "subgroup": "Pipid",
    "S": 0.48,
    "I": 0.38,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Babies develop inside mother's back skin"
  },
  {
    "name": "Wood frog",
    "group": "Amphibian",
    "subgroup": "Ranid",
    "S": 0.48,
    "I": 0.38,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Survives being frozen solid, natal pond fidelity"
  },
  {
    "name": "Spring peeper",
    "group": "Amphibian",
    "subgroup": "Hylid",
    "S": 0.48,
    "I": 0.38,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Chorus timing coordination, antifreeze survival"
  },
  {
    "name": "Harlequin frog",
    "group": "Amphibian",
    "subgroup": "Bufonid",
    "S": 0.48,
    "I": 0.38,
    "U": 0.38,
    "confidence": "VERY LOW",
    "notes": "Hand-waving communication, critically endangered"
  },
  {
    "name": "Tiger salamander",
    "group": "Amphibian",
    "subgroup": "Ambystomatid",
    "S": 0.48,
    "I": 0.38,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Chooses whether to metamorphose, cannibal morph when crowded"
  },
  {
    "name": "Rough-skinned newt",
    "group": "Amphibian",
    "subgroup": "Salamandrid",
    "S": 0.48,
    "I": 0.38,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Arms race with garter snakes, tetrodotoxin"
  },
  {
    "name": "Hellbender",
    "group": "Amphibian",
    "subgroup": "Cryptobranchid",
    "S": 0.48,
    "I": 0.38,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Flips rocks to hunt, male nest guarding"
  },
  {
    "name": "Eastern newt",
    "group": "Amphibian",
    "subgroup": "Salamandrid",
    "S": 0.48,
    "I": 0.38,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Magnetic compass for homing, three life stages"
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
    "name": "Jewel beetle",
    "group": "Insect",
    "subgroup": "Coleoptera",
    "S": 0.55,
    "I": 0.35,
    "U": 0.35,
    "confidence": "VERY LOW",
    "notes": "IR fire detection from 80 km"
  },
  {
    "name": "Longhorn beetle",
    "group": "Insect",
    "subgroup": "Coleoptera",
    "S": 0.55,
    "I": 0.35,
    "U": 0.35,
    "confidence": "VERY LOW",
    "notes": "Detects stressed trees long-range"
  },
  {
    "name": "Scorpion",
    "group": "Arachnid",
    "subgroup": "Scorpiones",
    "S": 0.6,
    "I": 0.32,
    "U": 0.35,
    "confidence": "LOW",
    "notes": "UV fluorescence"
  },
  {
    "name": "Zebrafish",
    "group": "Fish",
    "subgroup": "Cyprinidae",
    "S": 0.5,
    "I": 0.38,
    "U": 0.35,
    "confidence": "HIGH",
    "notes": "Best neural data, connectome in progress"
  },
  {
    "name": "Spotted salamander",
    "group": "Amphibian",
    "subgroup": "Ambystomatid",
    "S": 0.48,
    "I": 0.35,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Only vertebrate with intracellular algal symbiont"
  },
  {
    "name": "Mudpuppy",
    "group": "Amphibian",
    "subgroup": "Proteidae",
    "S": 0.48,
    "I": 0.35,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Neotenic, keeps gills for life"
  },
  {
    "name": "Corn snake",
    "group": "Reptile",
    "subgroup": "Snake",
    "S": 0.52,
    "I": 0.35,
    "U": 0.35,
    "confidence": "MEDIUM",
    "notes": "Maze learning model"
  },
  {
    "name": "Herring",
    "group": "Fish",
    "subgroup": "Clupeidae",
    "S": 0.52,
    "I": 0.35,
    "U": 0.35,
    "confidence": "LOW",
    "notes": "Predator ultrasound detection"
  },
  {
    "name": "Colorado potato beetle",
    "group": "Insect",
    "subgroup": "Coleoptera",
    "S": 0.52,
    "I": 0.35,
    "U": 0.35,
    "confidence": "LOW",
    "notes": "Fastest insecticide resistance"
  },
  {
    "name": "Lungfish",
    "group": "Fish",
    "subgroup": "Dipnoi",
    "S": 0.5,
    "I": 0.35,
    "U": 0.35,
    "confidence": "VERY LOW",
    "notes": "Aestivation, closest fish to tetrapods"
  },
  {
    "name": "Olm",
    "group": "Amphibian",
    "subgroup": "Proteidae",
    "S": 0.45,
    "I": 0.35,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Blind cave salamander, lives 100+ years, 10+ years without food"
  },
  {
    "name": "Caecilian",
    "group": "Amphibian",
    "subgroup": "Caecilian",
    "S": 0.45,
    "I": 0.35,
    "U": 0.38,
    "confidence": "LOW",
    "notes": "Legless, babies eat mother's skin, unique tentacle sensor"
  },
  {
    "name": "Red-eared slider",
    "group": "Reptile",
    "subgroup": "Turtle",
    "S": 0.48,
    "I": 0.35,
    "U": 0.35,
    "confidence": "MEDIUM",
    "notes": "Most studied turtle"
  },
  {
    "name": "Caddisfly larva",
    "group": "Insect",
    "subgroup": "Trichoptera",
    "S": 0.48,
    "I": 0.35,
    "U": 0.35,
    "confidence": "VERY LOW",
    "notes": "Builds cases from found materials"
  },
  {
    "name": "Vietnamese mossy frog",
    "group": "Amphibian",
    "subgroup": "Rhacophorid",
    "S": 0.48,
    "I": 0.35,
    "U": 0.35,
    "confidence": "VERY LOW",
    "notes": "Extreme camouflage, death feigning"
  },
  {
    "name": "Tomato frog",
    "group": "Amphibian",
    "subgroup": "Microhylid",
    "S": 0.48,
    "I": 0.35,
    "U": 0.35,
    "confidence": "VERY LOW",
    "notes": "Puffs up + sticky skin defense"
  },
  {
    "name": "Sturgeon",
    "group": "Fish",
    "subgroup": "Acipenseridae",
    "S": 0.55,
    "I": 0.32,
    "U": 0.32,
    "confidence": "VERY LOW",
    "notes": "Lives 100+ years"
  },
  {
    "name": "Sloth",
    "group": "Mammal",
    "subgroup": "Xenarthra",
    "S": 0.5,
    "I": 0.32,
    "U": 0.35,
    "confidence": "LOW",
    "notes": "Slowest mammal"
  },
  {
    "name": "Fig wasp",
    "group": "Insect",
    "subgroup": "Solitary Hymenoptera",
    "S": 0.48,
    "I": 0.32,
    "U": 0.35,
    "confidence": "VERY LOW",
    "notes": "Extreme specialist"
  },
  {
    "name": "Painted turtle",
    "group": "Reptile",
    "subgroup": "Turtle",
    "S": 0.48,
    "I": 0.32,
    "U": 0.35,
    "confidence": "LOW",
    "notes": "Freeze tolerance"
  },
  {
    "name": "Stick insect",
    "group": "Insect",
    "subgroup": "Phasmatodea",
    "S": 0.5,
    "I": 0.3,
    "U": 0.35,
    "confidence": "VERY LOW",
    "notes": "Extreme camouflage"
  },
  {
    "name": "Flea",
    "group": "Insect",
    "subgroup": "Siphonaptera",
    "S": 0.5,
    "I": 0.32,
    "U": 0.32,
    "confidence": "VERY LOW",
    "notes": "Extraordinary jumping"
  },
  {
    "name": "Weevil",
    "group": "Insect",
    "subgroup": "Coleoptera",
    "S": 0.5,
    "I": 0.32,
    "U": 0.32,
    "confidence": "VERY LOW",
    "notes": "Precision acorn drilling"
  },
  {
    "name": "Darkling beetle",
    "group": "Insect",
    "subgroup": "Coleoptera",
    "S": 0.5,
    "I": 0.32,
    "U": 0.32,
    "confidence": "MEDIUM",
    "notes": "Mealworm research model"
  },
  {
    "name": "Siren",
    "group": "Amphibian",
    "subgroup": "Sirenid",
    "S": 0.45,
    "I": 0.32,
    "U": 0.35,
    "confidence": "VERY LOW",
    "notes": "Eel-like salamander, aestivation cocoon"
  },
  {
    "name": "Silk moth",
    "group": "Insect",
    "subgroup": "Lepidoptera",
    "S": 0.52,
    "I": 0.3,
    "U": 0.32,
    "confidence": "MEDIUM",
    "notes": "Most sensitive olfaction known"
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
    "notes": "Pinhole eyes, ancient"
  },
  {
    "name": "Anglerfish",
    "group": "Fish",
    "subgroup": "Lophiidae",
    "S": 0.45,
    "I": 0.32,
    "U": 0.32,
    "confidence": "VERY LOW",
    "notes": "Bioluminescent lure"
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
    "notes": "Most ancient vertebrate lineage"
  },
  {
    "name": "Glowworm",
    "group": "Insect",
    "subgroup": "Coleoptera",
    "S": 0.48,
    "I": 0.3,
    "U": 0.3,
    "confidence": "VERY LOW",
    "notes": "Bioluminescent fishing traps"
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
    "name": "Purple frog",
    "group": "Amphibian",
    "subgroup": "Sooglossid",
    "S": 0.42,
    "I": 0.32,
    "U": 0.32,
    "confidence": "VERY LOW",
    "notes": "100M year lineage, lives underground"
  },
  {
    "name": "Physarum",
    "group": "Protist",
    "subgroup": "Myxomycete",
    "S": 0.3,
    "I": 0.25,
    "U": 0.55,
    "confidence": "MEDIUM",
    "notes": "Maze solving"
  },
  {
    "name": "Earthworm",
    "group": "Annelid",
    "subgroup": "Oligochaeta",
    "S": 0.4,
    "I": 0.3,
    "U": 0.32,
    "confidence": "LOW",
    "notes": "T-maze learning"
  },
  {
    "name": "Silverfish",
    "group": "Insect",
    "subgroup": "Zygentoma",
    "S": 0.45,
    "I": 0.28,
    "U": 0.3,
    "confidence": "VERY LOW",
    "notes": "400M year old design"
  },
  {
    "name": "Brachiosaurus",
    "group": "Dinosaur",
    "subgroup": "Sauropoda",
    "S": 0.5,
    "I": 0.25,
    "U": 0.3,
    "confidence": "VERY LOW",
    "notes": "Tiny brain for enormous body"
  },
  {
    "name": "Box jellyfish",
    "group": "Cnidarian",
    "subgroup": "Cubozoa",
    "S": 0.9,
    "I": 0.15,
    "U": 0.25,
    "confidence": "MEDIUM",
    "notes": "24 eyes, 4 rhopalia"
  },
  {
    "name": "Mayfly",
    "group": "Insect",
    "subgroup": "Ephemeroptera",
    "S": 0.48,
    "I": 0.25,
    "U": 0.28,
    "confidence": "VERY LOW",
    "notes": "Entire adult life = mate and die"
  },
  {
    "name": "Stegosaurus",
    "group": "Dinosaur",
    "subgroup": "Stegosauridae",
    "S": 0.5,
    "I": 0.22,
    "U": 0.28,
    "confidence": "VERY LOW",
    "notes": "Famous tiny brain"
  },
  {
    "name": "Hagfish",
    "group": "Fish",
    "subgroup": "Myxinidae",
    "S": 0.42,
    "I": 0.25,
    "U": 0.28,
    "confidence": "VERY LOW",
    "notes": "Slime defense, body knotting"
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
    "notes": "Minimal sensing"
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
    "notes": "Electrical signaling"
  },
  {
    "name": "Starfish",
    "group": "Echinoderm",
    "subgroup": "Asteroid",
    "S": 0.35,
    "I": 0.15,
    "U": 0.18,
    "confidence": "LOW",
    "notes": "Radial nerve, no brain"
  },
  {
    "name": "Human (anesthesia)",
    "group": "Mammal",
    "subgroup": "Great Ape",
    "S": 0.85,
    "I": 0.1,
    "U": 0.1,
    "confidence": "HIGH",
    "notes": "Integration/unity collapsed"
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
    "notes": "Sleep-like states"
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
    "notes": "Touch response, habituation"
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
    "notes": "Heliotropism"
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
    "notes": "Colonial"
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