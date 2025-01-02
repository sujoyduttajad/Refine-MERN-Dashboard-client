import { BaseKey } from "@pankod/refine-core";

// export interface FormFieldProp {
//     title: string;
//     labelName: string;
// }

export interface FormValues {
    title: string;
    description: string;
    propertyType: string;
    location: string;
    price: number | undefined;
}

export interface ReviewCardProps {
    id?: BaseKey | undefined;
    title: string;
    property: string;
    reviewer: string;
    rating: string;
    description: number;
    date: string;
}

export interface PropertyDropdownData {
    id: string;
    propName: string;
    photo: string;
}

export interface AdditionalData {
    data: PropertyDropdownData[];
}


export interface ReviewFormProps {
    register: any;
    queryResult?: any;
    // onFinish: (
    //     values: FieldValues,
    // ) => Promise<
    //     void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>
    // >;
    formLoading: boolean;
    // handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
    // handleImageChange: (file) => void;
    // onFinishHandler: (data: FieldValues) => Promise<void> | void;
    propertyList: PropertyDropdownData[];
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

