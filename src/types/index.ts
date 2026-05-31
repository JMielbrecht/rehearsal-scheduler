
export interface Person {
    name: string;
    role: string;
    conflicts: Date[];
}

export enum RehearsalType {
    Blocking,
    Choreography,
    Music
}

export interface RehearsalBlock {
    type: RehearsalType;
    duration: number; // Hours required
}

export interface Scene {
    length: number; //pages
    characters: Array<string>; // corresponds to all valid Person.role (TODO: strongly type? How enforced?)
}
export interface Script {
    length: number; // pages (top-level? or maybe derived from Scenes?)
    scenes: Array<Scene>;
}

export interface Cast {
    castMembers: Array<Person>;
}
