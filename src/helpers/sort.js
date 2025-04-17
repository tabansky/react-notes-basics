import { SortTypes } from "../constants";

export const getSortCallbackByType = (type) => {
    switch (type) {
        case SortTypes.NEWEST:
            return (a, b) => b.id - a.id;
        case SortTypes.OLDEST:
            return (a, b) => a.id - b.id;
        case SortTypes.AZ:
            return (a, b) => a.title.localeCompare(b.title);
        case SortTypes.ZA:
            return (a, b) => b.title.localeCompare(a.title);
        default:
            return (a, b) => b.id - a.id;
    }
}