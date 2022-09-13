function ziplist(list1, list2) {
  const newlist = [];
  for (let i = 0; i < list1.length; i++) {
    newlist.push(list1[i]);
    newlist.push(list2[i]);
  }
  return newlist;
}

function ziplistTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

// Test
const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

console.log(ziplist(list1, list2));
console.log(ziplistTheSimpleWay(list1, list2));
