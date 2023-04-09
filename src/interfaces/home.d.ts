export interface PieChartProps {
    title: string;
    value: number;
    series: Array<number>;
    colors: Array<string>;
}

export interface ApexAxisChartSeries {
    name: string;
    data: number[];
}

export interface ApexNonAxisChartSeries {
    name: string;
    data: number;
}

export interface CustomerCardProps {
    data: Object;
    series: (ApexAxisChartSeries | ApexNonAxisChartSeries)[];
}