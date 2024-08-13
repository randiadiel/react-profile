"use client"

import { useFilter } from "@/app/_contexts/FilterContext"
import { Tags } from "@/app/_types"

const MOCK_CATEGORIES: Tags = [
    {
        id: "all",
        name: "All"
    },
    {
        id: "working-exp",
        name: "Working Experience"
    }
]


export default function CategoriesSelector() {
    const { activeFilter, setActiveFilter } = useFilter() || {};

    return <div className="my-5 flex gap-2">
        {MOCK_CATEGORIES.map((category) => {
            return <div key={category.id} className="text-sm rounded-full border py-2 px-5">{category.name}</div>
        })}
    </div>
}