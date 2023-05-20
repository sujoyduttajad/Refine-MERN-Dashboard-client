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
    id?: string | undefined;
    type?: string | undefined;
    name?: string | undefined;
    avatar?: string | undefined;
    email?: string | undefined;
    properties?: Array | undefined;
}

export interface AgentBioProps {
    id: string | undefined;
    email?: string | undefined;
}

export interface PropertyProps {
    _id: string;
    title: string;
    // sale/rent toggle button
    description: string;
    location: string;
    price: number;
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

export interface ThreeDotsProps {
    option: string;
    value: string;
    open: boolean;
    menuId: string;
    anchorEl?: null | HTMLElement;
    handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined;
    handleClose?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void | undefined;
    handleNavigate?: () => void;
}