const secondLargest = (array) => {
    // console.log(array[0])
    sortedarray = array.sort(function (a, b) { return a - b });
    secLar = array.length - 2;
    console.log(sortedarray[secLar]);

}

// array = [12, 18, 16, 14, 178]
array = [45, 78, 12, 10, 4, 56, 100]
secondLargest(array)