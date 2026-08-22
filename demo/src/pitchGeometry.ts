export const FIELD_INSET_PERCENT = 7;
const fieldSpanPercent = 100 - FIELD_INSET_PERCENT * 2;

const pitch = {
    length: 105,
    width: 68,
};

export function pitchXPercent(value: number): number {
    return FIELD_INSET_PERCENT + value / pitch.length * fieldSpanPercent;
}

export function pitchYPercent(value: number): number {
    return FIELD_INSET_PERCENT + value / pitch.width * fieldSpanPercent;
}
