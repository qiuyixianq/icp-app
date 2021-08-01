//example data for cashOut
//These data shall be stored in mongoDB ATLAS in real life

//date docs: //MONTH START from 0 
export const cashOutData = [
    {
        category: 'Rent',
        reference: 'to Raymond',
        detail: 'monthly warehouse rent',
        amount: 1200,
        date: new Date(2021, 4, 5, 9, 29, 0, 0).toDateString()
    },
    {
        category: 'Stock',
        reference: 'to Jinny Trading',
        detail: '10 premium wireless mouse',
        amount: 1000,
        date: new Date(2021, 4, 15, 15, 10, 0, 0).toDateString()
    },
    {
        category: 'Stock',
        reference: 'to Quick Train Trading',
        detail: '10 wireless keyboard',
        amount: 2000,
        date: new Date(2021, 4, 15, 10, 0, 0, 0).toDateString()
    },
    {
        category: 'Rent',
        reference: 'to Raymond',
        detail: 'monthly warehouse rent',
        amount: 1200,
        date: new Date(2021, 5, 5, 9, 11, 0, 0).toDateString()
    },
    {
        category: 'Stock',
        reference: 'to Jinny Trading',
        detail: '20 deskmat',
        amount: 1000,
        date: new Date(2021, 5, 15, 9, 29, 0, 0).toDateString()
    },
    {
        category: 'Transportation',
        reference: 'grab fee for errand',
        detail: '',
        amount: 250,
        date: new Date(2021, 5, 21, 14, 0, 0, 0).toDateString()
    },
    {
        category: 'Rent',
        reference: 'to Raymond',
        detail: 'montly warehosue rent',
        amount: 1200,
        date: new Date(2021, 6, 1, 10, 28, 0, 0).toDateString()
    },
    {
        category: 'Stock',
        reference: 'to Jacky',
        detail: '10 premium mousepad',
        amount: 500,
        date: new Date(2021, 6, 2, 10, 28, 0, 0).toDateString()
    },
    {
        category: 'Stock',
        reference: 'to Jinny Trading',
        detail: '5 wired mouse',
        amount: 150,
        date: new Date(2021, 6, 4, 11, 28, 0, 0).toDateString()
    },
    {
        category: 'Stock',
        reference: 'to Jinny Trading',
        detail: '5 wired mouse',
        amount: 200,
        date: new Date(2021, 7, 4, 11, 28, 0, 0).toDateString()
    },
];