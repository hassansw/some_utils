const { firstBy } = require('thenby')

function removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
}

const barGraph = [
    {
        "key": "1 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 1,
        "sortingOrder": 1
    },
    {
        "key": "10 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 10
    },
    {
        "key": "10 Dec",
        "shippingModeCode": "WAREHOUSE",
        "totalCount": 0,
        "sortingOrder": 10
    },
    {
        "key": "10 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 10
    },
    {
        "key": "10 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 10
    },
    {
        "key": "10 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 10
    },
    {
        "key": "10 Dec",
        "shippingModeCode": "GROUND TRANSPORT",
        "totalCount": 0,
        "sortingOrder": 10
    },
    {
        "key": "10 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 10
    },
    {
        "key": "11 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 11
    },
    {
        "key": "11 Dec",
        "shippingModeCode": "WAREHOUSE",
        "totalCount": 0,
        "sortingOrder": 11
    },
    {
        "key": "11 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 11
    },
    {
        "key": "11 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 11
    },
    {
        "key": "11 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 11
    },
    {
        "key": "11 Dec",
        "shippingModeCode": "GROUND TRANSPORT",
        "totalCount": 0,
        "sortingOrder": 11
    },
    {
        "key": "11 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 11
    },
    {
        "key": "12 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 12
    },
    {
        "key": "12 Dec",
        "shippingModeCode": "WAREHOUSE",
        "totalCount": 0,
        "sortingOrder": 12
    },
    {
        "key": "12 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 12
    },
    {
        "key": "12 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 12
    },
    {
        "key": "12 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 12
    },
    {
        "key": "12 Dec",
        "shippingModeCode": "GROUND TRANSPORT",
        "totalCount": 0,
        "sortingOrder": 12
    },
    {
        "key": "12 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 12
    },
    {
        "key": "13 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 2,
        "sortingOrder": 13
    },
    {
        "key": "13 Dec",
        "shippingModeCode": "GROUND TRANSPORT",
        "totalCount": 2,
        "sortingOrder": 13
    },
    {
        "key": "14 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 14
    },
    {
        "key": "14 Dec",
        "shippingModeCode": "WAREHOUSE",
        "totalCount": 0,
        "sortingOrder": 14
    },
    {
        "key": "14 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 14
    },
    {
        "key": "14 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 14
    },
    {
        "key": "14 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 14
    },
    {
        "key": "14 Dec",
        "shippingModeCode": "GROUND TRANSPORT",
        "totalCount": 0,
        "sortingOrder": 14
    },
    {
        "key": "14 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 14
    },
    {
        "key": "15 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 1,
        "sortingOrder": 15
    },
    {
        "key": "16 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 16
    },
    {
        "key": "16 Dec",
        "shippingModeCode": "WAREHOUSE",
        "totalCount": 0,
        "sortingOrder": 16
    },
    {
        "key": "16 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 16
    },
    {
        "key": "16 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 16
    },
    {
        "key": "16 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 16
    },
    {
        "key": "16 Dec",
        "shippingModeCode": "GROUND TRANSPORT",
        "totalCount": 0,
        "sortingOrder": 16
    },
    {
        "key": "16 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 16
    },
    {
        "key": "17 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 1,
        "sortingOrder": 17
    },
    {
        "key": "18 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 18
    },
    {
        "key": "18 Dec",
        "shippingModeCode": "WAREHOUSE",
        "totalCount": 0,
        "sortingOrder": 18
    },
    {
        "key": "18 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 18
    },
    {
        "key": "18 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 18
    },
    {
        "key": "18 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 18
    },
    {
        "key": "18 Dec",
        "shippingModeCode": "GROUND TRANSPORT",
        "totalCount": 0,
        "sortingOrder": 18
    },
    {
        "key": "18 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 18
    },
    {
        "key": "19 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 19
    },
    {
        "key": "19 Dec",
        "shippingModeCode": "WAREHOUSE",
        "totalCount": 0,
        "sortingOrder": 19
    },
    {
        "key": "19 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 19
    },
    {
        "key": "19 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 19
    },
    {
        "key": "19 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 19
    },
    {
        "key": "19 Dec",
        "shippingModeCode": "GROUND TRANSPORT",
        "totalCount": 0,
        "sortingOrder": 19
    },
    {
        "key": "19 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 19
    },
    {
        "key": "2 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 2
    },
    {
        "key": "2 Dec",
        "shippingModeCode": "WAREHOUSE",
        "totalCount": 0,
        "sortingOrder": 2
    },
    {
        "key": "2 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 2
    },
    {
        "key": "2 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 2
    },
    {
        "key": "2 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 2
    },
    {
        "key": "2 Dec",
        "shippingModeCode": "GROUND TRANSPORT",
        "totalCount": 0,
        "sortingOrder": 2
    },
    {
        "key": "2 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 2
    },
    {
        "key": "20 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 20
    },
    {
        "key": "20 Dec",
        "shippingModeCode": "WAREHOUSE",
        "totalCount": 0,
        "sortingOrder": 20
    },
    {
        "key": "20 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 20
    },
    {
        "key": "20 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 20
    },
    {
        "key": "20 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 20
    },
    {
        "key": "20 Dec",
        "shippingModeCode": "GROUND TRANSPORT",
        "totalCount": 0,
        "sortingOrder": 20
    },
    {
        "key": "20 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 20
    },
    {
        "key": "21 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 21
    },
    {
        "key": "21 Dec",
        "shippingModeCode": "WAREHOUSE",
        "totalCount": 0,
        "sortingOrder": 21
    },
    {
        "key": "21 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 21
    },
    {
        "key": "21 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 21
    },
    {
        "key": "21 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 21
    },
    {
        "key": "21 Dec",
        "shippingModeCode": "GROUND TRANSPORT",
        "totalCount": 0,
        "sortingOrder": 21
    },
    {
        "key": "21 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 21
    },
    {
        "key": "22 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 22
    },
    {
        "key": "22 Dec",
        "shippingModeCode": "WAREHOUSE",
        "totalCount": 0,
        "sortingOrder": 22
    },
    {
        "key": "22 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 22
    },
    {
        "key": "22 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 22
    },
    {
        "key": "22 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 22
    },
    {
        "key": "22 Dec",
        "shippingModeCode": "GROUND TRANSPORT",
        "totalCount": 0,
        "sortingOrder": 22
    },
    {
        "key": "22 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 22
    },
    {
        "key": "23 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 23
    },
    {
        "key": "23 Dec",
        "shippingModeCode": "WAREHOUSE",
        "totalCount": 0,
        "sortingOrder": 23
    },
    {
        "key": "23 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 23
    },
    {
        "key": "23 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 23
    },
    {
        "key": "23 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 23
    },
    {
        "key": "23 Dec",
        "shippingModeCode": "GROUND TRANSPORT",
        "totalCount": 0,
        "sortingOrder": 23
    },
    {
        "key": "23 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 23
    },
    {
        "key": "24 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 24
    },
    {
        "key": "24 Dec",
        "shippingModeCode": "WAREHOUSE",
        "totalCount": 0,
        "sortingOrder": 24
    },
    {
        "key": "24 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 24
    },
    {
        "key": "24 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 24
    },
    {
        "key": "24 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 24
    },
    {
        "key": "24 Dec",
        "shippingModeCode": "GROUND TRANSPORT",
        "totalCount": 0,
        "sortingOrder": 24
    },
    {
        "key": "24 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 24
    },
    {
        "key": "25 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 25
    },
    {
        "key": "25 Dec",
        "shippingModeCode": "WAREHOUSE",
        "totalCount": 0,
        "sortingOrder": 25
    },
    {
        "key": "25 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 25
    },
    {
        "key": "25 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 25
    },
    {
        "key": "25 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 25
    },
    {
        "key": "25 Dec",
        "shippingModeCode": "GROUND TRANSPORT",
        "totalCount": 0,
        "sortingOrder": 25
    },
    {
        "key": "25 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 25
    },
    {
        "key": "26 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 1,
        "sortingOrder": 26
    },
    {
        "key": "26 Dec",
        "shippingModeCode": "WAREHOUSE",
        "totalCount": 1,
        "sortingOrder": 26
    },
    {
        "key": "27 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 27
    },
    {
        "key": "27 Dec",
        "shippingModeCode": "WAREHOUSE",
        "totalCount": 0,
        "sortingOrder": 27
    },
    {
        "key": "27 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 27
    },
    {
        "key": "27 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 27
    },
    {
        "key": "27 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 27
    },
    {
        "key": "27 Dec",
        "shippingModeCode": "GROUND TRANSPORT",
        "totalCount": 0,
        "sortingOrder": 27
    },
    {
        "key": "27 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 27
    },
    {
        "key": "28 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 28
    },
    {
        "key": "28 Dec",
        "shippingModeCode": "WAREHOUSE",
        "totalCount": 0,
        "sortingOrder": 28
    },
    {
        "key": "28 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 28
    },
    {
        "key": "28 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 28
    },
    {
        "key": "28 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 28
    },
    {
        "key": "28 Dec",
        "shippingModeCode": "GROUND TRANSPORT",
        "totalCount": 0,
        "sortingOrder": 28
    },
    {
        "key": "28 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 28
    },
    {
        "key": "29 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 29
    },
    {
        "key": "29 Dec",
        "shippingModeCode": "WAREHOUSE",
        "totalCount": 0,
        "sortingOrder": 29
    },
    {
        "key": "29 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 29
    },
    {
        "key": "29 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 29
    },
    {
        "key": "29 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 29
    },
    {
        "key": "29 Dec",
        "shippingModeCode": "GROUND TRANSPORT",
        "totalCount": 0,
        "sortingOrder": 29
    },
    {
        "key": "29 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 29
    },
    {
        "key": "3 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 3
    },
    {
        "key": "3 Dec",
        "shippingModeCode": "WAREHOUSE",
        "totalCount": 0,
        "sortingOrder": 3
    },
    {
        "key": "3 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 3
    },
    {
        "key": "3 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 3
    },
    {
        "key": "3 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 3
    },
    {
        "key": "3 Dec",
        "shippingModeCode": "GROUND TRANSPORT",
        "totalCount": 0,
        "sortingOrder": 3
    },
    {
        "key": "3 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 3
    },
    {
        "key": "30 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 30
    },
    {
        "key": "30 Dec",
        "shippingModeCode": "WAREHOUSE",
        "totalCount": 0,
        "sortingOrder": 30
    },
    {
        "key": "30 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 30
    },
    {
        "key": "30 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 30
    },
    {
        "key": "30 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 30
    },
    {
        "key": "30 Dec",
        "shippingModeCode": "GROUND TRANSPORT",
        "totalCount": 0,
        "sortingOrder": 30
    },
    {
        "key": "30 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 30
    },
    {
        "key": "31 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 31
    },
    {
        "key": "31 Dec",
        "shippingModeCode": "WAREHOUSE",
        "totalCount": 0,
        "sortingOrder": 31
    },
    {
        "key": "31 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 31
    },
    {
        "key": "31 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 31
    },
    {
        "key": "31 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 31
    },
    {
        "key": "31 Dec",
        "shippingModeCode": "GROUND TRANSPORT",
        "totalCount": 0,
        "sortingOrder": 31
    },
    {
        "key": "31 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 31
    },
    {
        "key": "4 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 4
    },
    {
        "key": "4 Dec",
        "shippingModeCode": "WAREHOUSE",
        "totalCount": 0,
        "sortingOrder": 4
    },
    {
        "key": "4 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 4
    },
    {
        "key": "4 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 4
    },
    {
        "key": "4 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 4
    },
    {
        "key": "4 Dec",
        "shippingModeCode": "GROUND TRANSPORT",
        "totalCount": 0,
        "sortingOrder": 4
    },
    {
        "key": "4 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 4
    },
    {
        "key": "5 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 5
    },
    {
        "key": "5 Dec",
        "shippingModeCode": "WAREHOUSE",
        "totalCount": 0,
        "sortingOrder": 5
    },
    {
        "key": "5 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 5
    },
    {
        "key": "5 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 5
    },
    {
        "key": "5 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 5
    },
    {
        "key": "5 Dec",
        "shippingModeCode": "GROUND TRANSPORT",
        "totalCount": 0,
        "sortingOrder": 5
    },
    {
        "key": "5 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 5
    },
    {
        "key": "6 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 6
    },
    {
        "key": "6 Dec",
        "shippingModeCode": "WAREHOUSE",
        "totalCount": 0,
        "sortingOrder": 6
    },
    {
        "key": "6 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 6
    },
    {
        "key": "6 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 6
    },
    {
        "key": "6 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 6
    },
    {
        "key": "6 Dec",
        "shippingModeCode": "GROUND TRANSPORT",
        "totalCount": 0,
        "sortingOrder": 6
    },
    {
        "key": "6 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 6
    },
    {
        "key": "7 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 7
    },
    {
        "key": "7 Dec",
        "shippingModeCode": "WAREHOUSE",
        "totalCount": 0,
        "sortingOrder": 7
    },
    {
        "key": "7 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 7
    },
    {
        "key": "7 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 7
    },
    {
        "key": "7 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 7
    },
    {
        "key": "7 Dec",
        "shippingModeCode": "GROUND TRANSPORT",
        "totalCount": 0,
        "sortingOrder": 7
    },
    {
        "key": "7 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 7
    },
    {
        "key": "8 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 8
    },
    {
        "key": "8 Dec",
        "shippingModeCode": "WAREHOUSE",
        "totalCount": 0,
        "sortingOrder": 8
    },
    {
        "key": "8 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 8
    },
    {
        "key": "8 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 8
    },
    {
        "key": "8 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 8
    },
    {
        "key": "8 Dec",
        "shippingModeCode": "GROUND TRANSPORT",
        "totalCount": 0,
        "sortingOrder": 8
    },
    {
        "key": "8 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 8
    },
    {
        "key": "9 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 9
    },
    {
        "key": "9 Dec",
        "shippingModeCode": "WAREHOUSE",
        "totalCount": 0,
        "sortingOrder": 9
    },
    {
        "key": "9 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 9
    },
    {
        "key": "9 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 9
    },
    {
        "key": "9 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 9
    },
    {
        "key": "9 Dec",
        "shippingModeCode": "GROUND TRANSPORT",
        "totalCount": 0,
        "sortingOrder": 9
    },
    {
        "key": "9 Dec",
        "shippingModeCode": "SEA FREIGHT",
        "totalCount": 0,
        "sortingOrder": 9
    }
]

function extractColumn(arr, column) {
    return arr.map(x => x[column])
}

function getLegends(list) {
    const data = removeDuplicates(list, "shippingModeCode")
    const legends = extractColumn(data, 'shippingModeCode')
    return legends
}

function getColorByType(type) {
    const colors = [
        { type: 'warehouse', color: '#02bdb6' },
        { type: 'sea freight', color: '#8472d5' },
        { type: 'ground transport', color: '#435d77' },
        { type: 'air freight', color: '#00a2df' },
    ]
    return colors.find(color => color.type === type).color
}


function getColorList(legends) {
    const arrColor = legends.map(legend => getColorByType(legend.toLowerCase()))
    return arrColor
}

function getAxisData(list) {
    const sorted = list.sort(
        firstBy(function (v1, v2) { return v1.sortingOrder - v2.sortingOrder; })
    );
    const data = removeDuplicates(sorted, "key")
    const axisData = extractColumn(data, 'key')
    return axisData
}

function getSerieData(legendsList, barGraph) {

    const series = []
    legendsList.forEach(legend => {

        const sortedMode = barGraph.sort(
            firstBy(function (v1, v2) { return v1.sortingOrder - v2.sortingOrder; })
        );
        const filteredMode = sortedMode.filter(mode => mode.shippingModeCode.toLowerCase() === legend.toLowerCase())
        console.log(filteredMode.length);
        
        const dataObject = extractColumn(filteredMode, 'totalCount')
        console.log(dataObject.length);
        console.log('enddddddddd');
        

        const serie = {
            name: legend,
            type: 'bar',
            barGap: 0.1,
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 15,
                }
            },
            data: dataObject
        }
        series.push(serie)
    })
    return series
}


const legendsList = getLegends(barGraph)
const list = getColorList(legendsList)
const axisData = getAxisData(barGraph)
const data = getSerieData(legendsList, barGraph)
// console.log(legendsList);
// console.log(list);
// console.log(axisData);
// console.log(data);

// const data = barGraph.filter(bar => bar.key === '1 Dec')
// const data = barGraph.sort(
//     firstBy(function (v1, v2) { return v1.sortingOrder - v2.sortingOrder; })
// )
// const filtData = data.filter(dt => dt.totalCount > 0)
// console.log(JSON.stringify(filtData));



