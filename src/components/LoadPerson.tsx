import React, { useEffect, useState } from "react";

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

export const LoadPerson = () => {

    const [person, setPerson] = useState<Person | null>(null);

    useEffect(() => {
        getPerson(1).then(
            res => setPerson(res)
        ).catch(
            err => console.log(err)

        )
    }, [])

    return (
        <div>
            {person?.name}
        </div>
    )
}