import React from "react";

const Pagination = ({orderPerPage, totalOrders, paginate}) => {
    const orderPageNumber = [];

    for (let i = 0; i < Math.ceil(totalOrders / orderPerPage); i++) {
        orderPageNumber.push(i + 1);
    }

    return (
        <div className="pages">
            {orderPageNumber.map(number => (
                <div key={number} className="number" onClick={e => paginate(number, e)}>
                    {number}
                </div>
            ))}
        </div>
    );
};

export default Pagination;
