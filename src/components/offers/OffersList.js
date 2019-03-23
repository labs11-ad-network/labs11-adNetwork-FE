import React from 'react'
import MaterialDatatable from "material-datatable";

const columns = [
    {   
        name: 'Name', 
        field: 'name',
        options: {
            width: 70,
        },
    },
    {
        name: 'Description', 
        field: 'description'
    },
    {
        name: 'Category', 
        field: 'category',
        options: {
            width: 100,
        },
    },
    {
        name: 'Age', 
        field: 'age'
    },
    {
        name: 'Salary', 
        field: 'salary'
    },
    {
        name: 'Veeeeery loooooooooong naaaaaaaaaaame title', 
        field: 'salary',
        options: {
            headerNoWrap: true,
            customBodyRender: (value, tableMeta, updateValue) => {
                return `${value.name} (${value.title})`; 
            }
        },
    }
];

 
const options = {
    filterType: 'checkbox',
};
 

const OffersList = props => {
  return (
    <div>
    <MaterialDatatable
    title={"Employee List"}
    data={props.offers}
    columns={columns}
    options={options}
/>
      {/* {props.offers.map(offer => {
          return <h1>
            Budget:{offer.budget}{offer.currency}
            Price Per Click:{offer.price_per_click}{offer.currency} 
            Price Per Impression:{offer.price_per_impression}{offer.currency} 
            Name:{offer.name} 
            Description:{offer.description} 
            Category: {offer.category}
          </h1>
      })} */}
    </div>
  )
}

export default OffersList