import { Request, Response } from "express";
export declare const getCourses: (_: Request, res: Response) => Promise<void>;
export declare const createCourse: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateCourse: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteCourse: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
