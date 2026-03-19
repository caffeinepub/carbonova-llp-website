import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface ContactSubmission {
    subject: Subject;
    name: string;
    message: string;
    timestamp: Time;
    organization: string;
}
export enum Subject {
    media = "media",
    partnership = "partnership",
    investment = "investment",
    general = "general"
}
export interface backendInterface {
    getAllSubmissions(): Promise<Array<ContactSubmission>>;
    submitContact(name: string, organization: string, subject: Subject, message: string): Promise<void>;
}
