import {TypeAlert} from "../types/notification";

export interface Notification {
    id: string;
    type: TypeAlert;
    title: string;
    message: string;
    duration: number;
}