import React from "react";
import { CustomTable } from "../components/CustomTable";

export default {
  component: CustomTable,
}

const columns = [
  {label: 'First Name', accessor: 'firstname', sortable: true, searchable: true},
  {label: 'Last Name', accessor: 'lastname', sortable: true, searchable: true},
  {label: 'Start date', accessor: 'startday', sortable: true, searchable: true},
  {label: 'Department', accessor: 'department', sortable: false, searchable: true},
  {label: 'Birthday', accessor: 'birthday', sortable: true, searchable: true},
  {label: 'Street', accessor: 'street', sortable: true, searchable: true},
  {label: 'City', accessor: 'city', sortable: true, searchable: true},
  {label: 'State', accessor: 'state', sortable: true, searchable: true},
  {label: 'Zip Code', accessor: 'zipcode', sortable: true, searchable: true},
];

const tableData = [{'id':1,'firstname':'Noellyn','lastname':'World','birthday':'19/2/2023','startday':'18/6/2023','street':'61059 Crowley Court','city':'Montgomery','state':'Alabama','zipcode':'36119','department':'Human Resources'},
  {'id':2,'firstname':'Romain','lastname':'Januszkiewicz','birthday':'16/2/2023','startday':'30/5/2023','street':'128 Becker Alley','city':'Huntsville','state':'Alabama','zipcode':'35815','department':'Training'},
  {'id':3,'firstname':'Chalmers','lastname':'Huyton','birthday':'3/6/2023','startday':'24/7/2023','street':'8526 Westend Crossing','city':'Mobile','state':'Alabama','zipcode':'36610','department':'Research and Development'},
  {'id':4,'firstname':'Judah','lastname':'Dimanche','birthday':'16/11/2023','startday':'4/5/2023','street':'0471 7th Junction','city':'Birmingham','state':'Alabama','zipcode':'35254','department':'Accounting'},
  {'id':5,'firstname':'Cherilynn','lastname':'Cockson','birthday':'14/8/2023','startday':'21/6/2023','street':'26292 Ridgeview Lane','city':'Birmingham','state':'Alabama','zipcode':'35231','department':'Services'},
  {'id':6,'firstname':'Rab','lastname':'Debold','birthday':'28/10/2023','startday':'22/6/2023','street':'117 Heffernan Hill','city':'Birmingham','state':'Alabama','zipcode':'35279','department':'Marketing'},
  {'id':7,'firstname':'Alyss','lastname':'Bamforth','birthday':'29/3/2023','startday':'1/3/2023','street':'1 Coolidge Parkway','city':'Birmingham','state':'Alabama','zipcode':'35220','department':'Engineering'},
  {'id':8,'firstname':'Rozalie','lastname':'Gobolos','birthday':'9/6/2023','startday':'12/7/2023','street':'84 Artisan Lane','city':'Gadsden','state':'Alabama','zipcode':'35905','department':'Legal'},
  {'id':9,'firstname':'Roseanna','lastname':'Beesley','birthday':'13/6/2023','startday':'27/10/2023','street':'61811 Dorton Crossing','city':'Birmingham','state':'Alabama','zipcode':'35285','department':'Business Development'},
  {'id':10,'firstname':'Hamlen','lastname':'Vischi','birthday':'9/1/2023','startday':'17/5/2023','street':'46029 Lunder Terrace','city':'Mobile','state':'Alabama','zipcode':'36670','department':'Legal'},
  {'id':11,'firstname':'Reinald','lastname':'Hovel','birthday':'27/4/2023','startday':'28/8/2023','street':'55637 Bartelt Park','city':'Montgomery','state':'Alabama','zipcode':'36109','department':'Human Resources'},
  {'id':12,'firstname':'Derrek','lastname':'Brownstein','birthday':'18/8/2023','startday':'14/7/2023','street':'17 Bayside Center','city':'Birmingham','state':'Alabama','zipcode':'35290','department':'Marketing'},
  {'id':13,'firstname':'Dawn','lastname':'McGarvey','birthday':'5/7/2023','startday':'8/5/2023','street':'64 Utah Pass','city':'Birmingham','state':'Alabama','zipcode':'35242','department':'Engineering'},
  {'id':14,'firstname':'Artie','lastname':'Gorvette','birthday':'25/9/2023','startday':'8/8/2023','street':'81800 Daystar Avenue','city':'Mobile','state':'Alabama','zipcode':'36689','department':'Research and Development'},
  {'id':15,'firstname':'Edik','lastname':'Kirwan','birthday':'12/1/2023','startday':'17/8/2023','street':'886 Golf Point','city':'Tuscaloosa','state':'Alabama','zipcode':'35405','department':'Human Resources'},
  {'id':16,'firstname':'Enrico','lastname':'Adame','birthday':'21/5/2023','startday':'22/11/2023','street':'69786 Shopko Plaza','city':'Birmingham','state':'Alabama','zipcode':'35244','department':'Services'},
  {'id':17,'firstname':'Tamas','lastname':'Burriss','birthday':'27/1/2023','startday':'28/9/2023','street':'162 Continental Trail','city':'Birmingham','state':'Alabama','zipcode':'35210','department':'Product Management'},
  {'id':18,'firstname':'Jermayne','lastname':'Colly','birthday':'13/11/2023','startday':'23/7/2023','street':'35259 Esch Center','city':'Mobile','state':'Alabama','zipcode':'36616','department':'Human Resources'},
  {'id':19,'firstname':'Maritsa','lastname':'Delnevo','birthday':'8/9/2023','startday':'24/5/2023','street':'88 Dawn Lane','city':'Montgomery','state':'Alabama','zipcode':'36114','department':'Business Development'},
  {'id':20,'firstname':'Marget','lastname':'Matfield','birthday':'27/4/2023','startday':'26/1/2023','street':'663 6th Junction','city':'Mobile','state':'Alabama','zipcode':'36605','department':'Human Resources'},
  {'id':21,'firstname':'Thomasin','lastname':'Tapper','birthday':'14/6/2023','startday':'18/10/2023','street':'97 Brown Street','city':'Huntsville','state':'Alabama','zipcode':'35810','department':'Accounting'},
  {'id':22,'firstname':'Rosanna','lastname':'Andreassen','birthday':'14/10/2023','startday':'19/12/2023','street':'98 Ridgeway Court','city':'Birmingham','state':'Alabama','zipcode':'35242','department':'Sales'},
  {'id':23,'firstname':'Orelle','lastname':'Bernardoni','birthday':'17/12/2023','startday':'24/2/2023','street':'5460 Dapin Junction','city':'Birmingham','state':'Alabama','zipcode':'35295','department':'Support'},
  {'id':24,'firstname':'Lianne','lastname':'Schellig','birthday':'19/8/2023','startday':'28/6/2023','street':'95843 Anderson Circle','city':'Mobile','state':'Alabama','zipcode':'36641','department':'Business Development'},
  {'id':25,'firstname':'Katee','lastname':'Faithfull','birthday':'7/2/2023','startday':'21/11/2023','street':'9 Vidon Circle','city':'Birmingham','state':'Alabama','zipcode':'35242','department':'Support'}]


export const Test = {
  args: {
    data: tableData,
    columns: columns,
    searchFeature: true
  },
};