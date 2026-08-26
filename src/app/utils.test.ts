import { expect, test } from 'vitest';
import { importScript, createSchedule, isActorInScene, getRehearsalDate } from "./utils";
import { Person, Scene } from './types';

/*
This is a guess as to the kind of data form I want the schedule to be once parsed from the script (or entered manually, worst case scenario)
Notes:
    - I think the mockScript object is my representation of the structure that the script is parsed into, ideally. Problem is that the scenes probably need to be parsed
    further because the character arrays are supposed to be sets as I've typed them. Oh well. I'll make a parseScript function, how's that?
    - length is number of pages. This might lead to them being floats. I figured it may be useful since the length of a scene will affect how many
    rehearsal blocks are necesary to fully rehearse them.
    - 
*/
const mockScript = {
    scenes: [
        {
            length: 4,
            characters: ['A', 'B']
        },
        {
            length: 10,
            characters: ['A', 'B', 'C']
        },
        {
            length: 2,
            characters: ['C']
        }
    ]
}

test('Test actor not in scene', () => {
    const mockScene: Scene = {
        length: 4,
        characters: new Set(['A', 'B', 'D'])
    };

    const mockActor: Person = {
        name: 'Jordan',
        role: 'C',
        conflicts: []
    }
    expect(isActorInScene(mockScene, mockActor)).toBe(false);
})

test('Test actor IS in scene', () => {
    const scene: Scene = {
        length: 1,
        characters: new Set(['A', 'B', 'C', 'D'])
    };

    const actor: Person = {
        name: 'Jordan',
        role: 'C',
        conflicts: []
    }
    expect(isActorInScene(scene, actor)).toBe(true);
})