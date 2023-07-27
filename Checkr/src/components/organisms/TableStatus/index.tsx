import React from 'react';
import  TableComponent from '../../../components/molecules/TableComponent/index';

const TableStatus = () => {
    const data = [
        {search: "SSN Verification",status:{label: "CLEAR" },date:'2/22/2022'}, 
        {search: "Sex Offender",status:{label: "CLEAR" },date:'3/13/2022'},
        {search: "Global Watchlist",status:{label: "CONSIDER" },date:'7/2/2022'},
        {search: "Federal Criminal",status:{label: "CLEAR" },date:'2/20/2022'},
        {search: "County Criminal",status:{label: "CLEAR" },date:'5/19/2022'}
    ];
    return (
        <div>
            <TableComponent data = {data} />
        </div>
    );


};
export default TableStatus;