
interface Person {
  name: string;
  role: string;
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

type CharacterBreakdownKeyObject = [key: string]: number;

interface Scene {
  length: number; //pages
  characters: Array<string>;
}
interface Script {
  length: number; // pages (top-level? or maybe derived from Scenes?)
  scenes: Array<Scene>;
}
