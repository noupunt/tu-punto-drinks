import { useEffect, useState } from "react";
export interface Cocktel {
    id: string;
    img: string;
}

export interface CocktellistInit {
    status: 'init';
}
export interface CocktellistLoading {
    status: 'loading';
}
export interface CocktellistLoaded<T> {
    status: 'loaded';
    payload: T;
}
export interface CocktellistError {
    status: 'error';
    error: Error;
}


export type Cocktellist<T> =
    | CocktellistInit
    | CocktellistLoading
    | CocktellistLoaded<T>
    | CocktellistError;

export type Cocktels = Cocktel[];
export const useFetchJSON = (url: string) => {

    const [data, setData] = useState<Cocktellist<Cocktels>>({
        status: 'loading'
    });



    // ho fa un sol cop
    useEffect(() => {
        if (url) {
            setData({ status: 'loading' });
            fetch(url)
                .then(response => response.json())
                .then(response => setData({ status: 'loaded', payload: response }))
                .catch(error => setData({ status: 'error', error }));
        }

    }, [url]);


    return data;

}
