export interface CustomButtonProps {
    type?: string;
    title: string;
    backgroundColor: string;
    color: string;
    fullWidth?: boolean;
    icon?: ReactNode;
    disabled?: boolean;
    heightValue?: string;
    widthValue?: string;
    paddingValue?: string;
    fontSizeValue?: string;
    fontWeightValue?: number;
    handleClick?: () => void;
}

export interface ProfileProps {
    type: string;
    name: string;
    avatar: string;
    email: string;
    properties: Array | undefined;
}

export interface PropertyProps {
    _id: string;
    title: string;
    // sale/rent toggle button
    description: string;
    location: string;
    price: string;
    photo: string;
    creator: string;
}

export interface FormProps {
    type: string;
    register: any;
    onFinish: (
        values: FieldValues,
    ) => Promise<
        void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>
    >;
    // alignment: string;
    // handleDetailsChange: MouseEvent<HTMLElement>;
    formLoading: boolean;
    handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
    handleImageChange: (file) => void;
    onFinishHandler: (data: FieldValues) => Promise<void> | void;
    propertyImage: { name: string; url: string };
}