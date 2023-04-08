import { BaseKey } from "@pankod/refine-core";

export interface FormFieldProp {
    title: string;
    labelName: string;
}

export interface FormValues {
    title: string;
    // sale/rent toggle button
    description: string;
    propertyType: string;
    location: string;
    price: number | undefined;
}

export interface PropertyCardProps {
    id?: BaseKey | undefined;
    title: string;
    location: string;
    price: number;
    photo: string;
}

export interface PropertyListValues {
    id?: string;
    creator?: string;
    title?: string;
    description?: string;
    propertyType?: string;
    location?: string;
    photo?: string;
    price: number | undefined;
}

// Total Revenue Calculate
export interface PropertyInterface {
    _id: string;
    creator: string;
    description: string;
    location: string;
    photo: string;
    price: number;
    propertyType: string;
    title: string;
};