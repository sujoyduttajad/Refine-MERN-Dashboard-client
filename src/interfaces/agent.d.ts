import { BaseKey } from "@pankod/refine-core";

export interface AgentCardProp {
    id?: BaseKey | undefined;
    name: string;
    email: string;
    avatar: string;
    noOfProperties: number;
}

export interface InfoBarProps {
    icon: ReactNode;
    content: string;
}

export interface AgentInfoProps {
    image: string;
    name: string;
    email: string;
    creatorId: string;
    userEmail: string;
    noOfProperties?: number;
}
