import { ReactNode } from "react";

export interface Tag {
    id: string;
    name: string;
}

export type Tags = Tag[];

export interface Note {
    id: string;
    title: string;
    tags: Tags;
    color: `#${string}`,
    content: ReactNode
}

export type Notes = Note[];