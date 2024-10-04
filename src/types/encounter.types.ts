export type EncounterRequest = {
    id: number;
};

export type EncounterResponse = {
    id:    number;
    name:  string;
    names: Name[];
    order: number;
}

export type Name = {
    language: Language;
    name:     string;
}

export type Language = {
    name: string;
    url:  string;
}