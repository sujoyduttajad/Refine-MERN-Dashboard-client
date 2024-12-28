import { BaseKey } from "@pankod/refine-core";

// export interface FormFieldProp {
//     title: string;
//     labelName: string;
// }

// export interface FormValues {
//     title: string;
//     // sale/rent toggle button
//     description: string;
//     propertyType: string;
//     location: string;
//     price: number | undefined;
// }

export interface ReviewCardProps {
    id?: BaseKey | undefined;
    title: string;
    reviewer: string;
    rating: string;
    comment: number;
    date: string;
}

// export interface PropertyListValues {
//     id?: string;
//     creator?: string;
//     title?: string;
//     description?: string;
//     propertyType?: string;
//     location?: string;
//     photo?: string;
//     price: number;
// }

