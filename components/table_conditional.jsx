import  { Component } from 'react'
import { Data } from './data'
import Table_data from './table_data';

export default class Table extends Component {
  render() {
    console.log(Data);
    return (
      <>
        {
           this.props.isLoggedIn ? (
            <>
                <h3>Hi welcome User</h3>
                <table border={"2px"}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>DESCRIPTION</th>
                            <th>PRICE</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Table_data data={Data} />
                    </tbody>
                </table>
            </>
           )
           :
           <h3>
                Please enter true in prompt
           </h3>
        }
      </>
    )
  }
}
