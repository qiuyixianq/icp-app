//example data for cashOut
//These data shall be stored in mongoDB ATLAS in real life

//date docs: //MONTH START from 0 
export const cashOutData = [
    {
        category: 'Rent',
        reference: 'to Raymond',
        detail: 'monthly warehouse rent',
        amount: 1200,
        date: new Date(2021, 7, 5, 9, 29, 0, 0)
    },
    {
        category: 'Stock',
        reference: 'to Jinny Trading',
        detail: '10 premium wireless mouse',
        amount: 1000,
        date: new Date(2021, 7, 15, 15, 10, 0, 0)
    },
    {
        category: 'Stock',
        reference: 'to Quick Train Trading',
        detail: '10 wireless keyboard',
        amount: 2000,
        date: new Date(2021, 7, 15, 10, 0, 0, 0)
    },
    {
        category: 'Stock',
        reference: 'to Jinny Trading',
        detail: '20 deskmat',
        amount: 1000,
        date: new Date(2021, 7, 20, 9, 29, 0, 0)
    },
    {
        category: 'Transportation',
        reference: 'grab fee for work',
        detail: '',
        amount: 50,
        date: new Date(2021, 7, 21, 14, 0, 0, 0)
    },
    {
        category: 'Rent',
        reference: 'to Raymond',
        detail: 'montly warehosue rent',
        amount: 1200,
        date: new Date(2021, 8, 1, 10, 28, 0, 0)
    },
];