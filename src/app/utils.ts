import { Cast, Person, RehearsalDate, Scene, Schedule, Script } from './types';

export const importScript  = () => {
    // TODO: Set up script importing logic (NO idea how to do this yet)
    return;
}

export const createSchedule = (script: Script, cast: Cast): void => {
    const scenes = script.scenes;

    const schedule: Schedule = new Schedule();

    for (const scene of scenes) {
        // TODO: iterate through each scene and get the following: 
        // - Characters
        // - Create rehearsal blocks? 
    }
}

export const isActorInScene = (scene: Scene, actor: Person): boolean => {
    return scene.characters.has(actor.role);
}


export const getRehearsalDate = (date: Date): RehearsalDate => {
    return date.toLocaleDateString() // wondering if I should worry about a bug if users from different time zones use the same app...
}
