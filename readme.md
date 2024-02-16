# Moonshield-Table
### Created by Moonshield for the HRnet project - January 2024

This component has been created to replace a jQuery library used in the previous version of the HRnet application. It can however be used in any React application, as it adapts to the data it's given.

## Installing Moonshield-Table

To use moonshield-table, you can use npm in your project with the following command :

```
npm install moonshield-table
```

## Dependencies

| Name | Version |
| :-: | :-: |
| Node | 18.14.2 |
| React | 18.2.0 |

## Usage

Once the library is installed in your React application, create a component and import Custom Table :
```js
import { CustomTable } from 'moonshield-table';
```

Then, declare the columns your table will require in an array of objects. Each column requires a label (the name that will be displayed in your table), an accessor (same as the label, in snake_case or camelCase), and two booleans : sortable and searchable. Your array of objects should look like this :

```js
  const columns = [
    {label: 'First Name', accessor: 'firstname', sortable: true, searchable: true},
    {label: 'Last Name', accessor: 'lastname', sortable: true, searchable: true},
    {label: 'Start date', accessor: 'startday', sortable: true, searchable: true},
    {label: 'Department', accessor: 'department', sortable: false, searchable: false},
    {label: 'Birthday', accessor: 'birthday', sortable: false, searchable: true},
  ];
```

Finally, you can use the custom table in your component. It will always take 100% of the width of its container, so you can easily adapt the size of its container. You can enable or disable the search feature by changing the value of the boolean.

The data has to be provided in json format, with fields matching the accessors of the columns.

```js
  return (
    <div className='your-table-container'>
      <CustomTable columns={columns} searchFeature={true} data={tableData} />
    </div>
  );
```

### Features

- **Sort the columns :** the columns having the *sortable* boolean to true will have the sort option active, which allows them to be ascendingly sorted on the first click on the header of the column, and descendingly sorted on second click of the column.
- **Search :** if the searchFeature of the CustomTable is set to true, a search input will be displayed and will search the data of the columns having the *searchable* boolean to true.
- **Pages :** this component is meant to display a lot of data, which is why a pages feature is implemented. You can select the amount of data that will be displayed per page thanks to the select on top of the table.
- **Responsive :** the component is responsive and can be displayed on desktops and mobile screens without cropping, assuming there isn't an abusive amount of columns (up to 10).

## License

This package is released under the MIT license. You are free to use, modify and distribute this software, as long as the copyright is left intact.