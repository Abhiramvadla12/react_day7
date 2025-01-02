

const Table_data = (props) => {
    console.log(props.data.length)
  return (
    <>
      {
        
        props.data.length > 0 ?
        props.data.map((val,index)=>(
            <>
                 <tr key={index}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.description}</td>
                    <td>{val.price ? val.price : "N/A"}</td>
                    <td>
                        <button>
                            Edit
                        </button>
                        <button>
                            Delete
                        </button>
                    </td>
                </tr>
            </>
           
        )
            
        )
        :
        <p>No Data Found</p>
      }
    </>
  )
}

export default Table_data
