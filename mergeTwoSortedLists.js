var mergeTwoLists = function (l1, l2) {
    return [...l1, ...l2].sort();
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
console.log(mergeTwoLists([], []));
console.log(mergeTwoLists([], [0]));

