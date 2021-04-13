import { Class } from "./class";
import { Course } from "./course";

export class User {
    id: string;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
    course: Course;
    class: Class;
}