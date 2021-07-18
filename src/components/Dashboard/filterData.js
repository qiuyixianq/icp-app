export const filterData = (rangedData,category) => {

    let data = [];
    let rangedCategory = [];

    if (rangedData.length > 0) {
        //summing each cashIn category's amount
        for (let i = 0; i < category.length; i++) {
            let groupData = rangedData.filter(el => el.category === category[i]);

            if (groupData.length !== 0) {
                rangedCategory.push(groupData[0].category);
                const amountSum = groupData.reduce((sum,curData) => ({amount: sum.amount + curData.amount}));
                data.push(amountSum.amount);
            }
        }
        return { data, rangedCategory };
    }
}