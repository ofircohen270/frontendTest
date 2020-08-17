export function separateNumberWithCommas(_number: number): string {
    return _number ? _number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","): ""
}