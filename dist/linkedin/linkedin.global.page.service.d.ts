import { LinkedinAbstractService } from "./linkedin.abstract.service";
import { Page } from "puppeteer-core";
import { CombinedData, LinkedinServicesInterface } from "./linkedin.services.interface";
import { CDPSession } from "puppeteer-core";
export interface PageConnections {
    name: string;
    link: string;
    image: string;
    description: string;
    connect: boolean;
}
interface RequiredData {
    page: number;
    url: string;
    remove_overlapping: boolean;
}
export declare class LinkedinGlobalPageService extends LinkedinAbstractService implements LinkedinServicesInterface<RequiredData> {
    process(page: Page, cdp: CDPSession, data: CombinedData<RequiredData>): Promise<{
        url: string;
        pages: number;
        remove_overlapping?: boolean;
        values: PageConnections[];
        csv?: string;
    }>;
    startProcess(page: Page, cdp: CDPSession, data: CombinedData<RequiredData>): Promise<{
        pages: number;
        remove_overlapping?: boolean;
        values: PageConnections[];
        csv?: string;
    }>;
}
export {};
