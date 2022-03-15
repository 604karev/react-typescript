import { type } from "os";
import React, { useEffect, useReducer, useState } from "react";
import { Statement } from "typescript";

interface Person {
    name: string;
    height: string;
    mass: string;
    hairColor: string;
    skinColor: string;
    eyesColor: string;
    birthYear: string;
    gender: string;
    homeWorld: string;
    films: string[];
    species: any[];
    vehicles: string[];
    starships: string[];
    created: Date;
    edited: Date;
    url: string;
}

async function getPerson(id = 1): Promise<Person> {
    const response = await fetch(`https://swapi.dev/api/people/${id}`)
    return response.json()
}
type State = {
    data: Person | null;
    loading: boolean;
    error: Error;
}
type Action = {
    type: 'request'
} | { type: 'response' }

declare function reducer(state: State, action: Action): State

export const LoadPersonReducer = () => {

    const [state, dispatch] = useReducer(reducer, {} as State);

    useEffect(() => {
        dispatch({ type: 'request' })
    }, [])

    return (
        <div>
            {state.data?.name}
        </div>
    )
}