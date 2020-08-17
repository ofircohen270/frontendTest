export type ChangeOrder = {
    devisionCode: number,
    numberOfDays: number,
    costOfImpact: number,
    submittedCost: number,
    widgets: Widget[]
}

export type ChangeOrderDetail = {
    title: string,
    key: string,
    value: number,
    editable: Boolean,
    displayWith?: (_number: number) => string
}

export type ChangeOrderSection = {
    title: string,
    details: ChangeOrderDetail[]
}

export type Widget = {
    name: string;
    numberOfPages: number;
    sizeInMb: number;
    tagName: string;
}