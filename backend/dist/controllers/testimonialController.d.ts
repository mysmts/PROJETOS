import { Request, Response } from "express";
export declare const getTestimonials: (_: Request, res: Response) => Promise<void>;
export declare const createTestimonial: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateTestimonial: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteTestimonial: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
