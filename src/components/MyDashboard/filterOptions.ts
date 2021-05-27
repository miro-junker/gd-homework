import { DateFilterGranularity } from "@gooddata/sdk-backend-spi";

const dateFrom = new Date();
dateFrom.setMonth(dateFrom.getMonth() - 1);

export const availableGranularities: DateFilterGranularity[] = [
    "GDC.time.date",
    "GDC.time.month",
    "GDC.time.quarter",
    "GDC.time.year",
];
