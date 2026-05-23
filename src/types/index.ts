
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

interface Scene {
  length: number; //pages
  characters: Array<string>; // corresponds to all valid Person.role (TODO: strongly type? How enforced?)
}
interface Script {
  length: number; // pages (top-level? or maybe derived from Scenes?)
  scenes: Array<Scene>;
}

interface Cast {
  castMembers: Array<Person>;
}
