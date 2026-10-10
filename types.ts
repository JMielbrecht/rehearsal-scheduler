
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
    duration: number; // Hours required (NO GREATER THAN MAX SPECIFIED BY USER)
}

export interface Scene {
    length: number; //pages
    characters: Set<string>; // corresponds to all valid Person.role (TODO: strongly type? How enforced?)
}
export interface Script {
    length: number; // pages (top-level? or maybe derived from Scenes?)
    scenes: Array<Scene>;
}

export interface Cast {
    castMembers: Set<Person>;
}

export type RehearsalDate = string;

export class Schedule {
    private rehearsals: Map<RehearsalDate, Array<RehearsalBlock>>;

    constructor() {
        this.rehearsals = new Map<RehearsalDate, Array<RehearsalBlock>>();
    }

    public addRehearsal = (date: RehearsalDate, blocks: Array<RehearsalBlock>) => {
        this.rehearsals.set(date, blocks);
    }

    public clearRehearsal = (date: RehearsalDate) => {
        this.rehearsals.delete(date);
    }

    public getSchedule = () => {
        return this.rehearsals;
    }

    public clearSchedule = () => {
        this.rehearsals.clear();
    }
}

