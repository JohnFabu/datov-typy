let text_list = [
"a",
"b",
"c",
"d",
"e"
]
let prem = 0
let zoznam = text_list.length
basic.forever(function () {
    basic.showString("" + (zoznam))
    while (prem < zoznam) {
        basic.showString("" + (text_list[prem]))
        prem += 1
    }
    basic.showIcon(IconNames.No)
})
