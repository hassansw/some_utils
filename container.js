const containers = [{
    contSpecID: 112,
    containerCode: "PLTS",
    contRequestedQty: 10,
    contRequestedCBM: 17.28,
    contRequestedWeight: 1200,
    volumetricWeight: 2880
}]


/**
  * Call this function to get the counter of selected Container/Pallets Etc from FCL/LCL/LCL-Air
  * @param userContainerList The containerList in the searchCriteria
  * @param containerSpecCode The Container/Unit Code for the selected Container/Unit Type from the container List
  */
function getConainersByType(userContainerList = containers, containerSpecCode = '') {
    let count = 0

    const unitList = userContainerList.filter(cont => cont.containerCode === containerSpecCode)
    unitList.forEach(pallet => {
        count += pallet.contRequestedQty
    })

    return count
}

const count = getConainersByType(containers, 'PLTS')

console.log(count)