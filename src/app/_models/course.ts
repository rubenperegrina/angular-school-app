import { Session } from "./session";

export class Course {
    id: string;
    name: string;
    totalSessions: number;
    completedSessions: number;
    sessions: Session[];
}