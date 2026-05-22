enum ProductionRole {
  Cast,
  Crew
}

interface Person {
  name: string;
  role: ProductionRole;
  conflicts: Date[];
}

enum RehearsalType {
  Blocking,
  Choreography,
  Music
}

interface RehearsalBlock {
  type: RehearsalType;
  duration: number; // Hours required
}


