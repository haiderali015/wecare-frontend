import React, { useState, useEffect, useContext } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import { adddata, deldata } from '../context/ContextProvider';
import { updatedata } from '../context/ContextProvider'



const Appointments = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);
  const shoot = () => {
    alert("Great Shot!");
  }

  const { udata, setUdata } = useContext(adddata);

  const { updata, setUPdata } = useContext(updatedata);

  const { dltdata, setDLTdata } = useContext(deldata);

//   const deleteuser = async (id) => {

//     const res2 = await fetch(`/deleteuser/${id}`, {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json"
//         }
//     });

//     const deletedata = await res2.json();
//     console.log(deletedata);

//     if (res2.status === 422 || !deletedata) {
//         console.log("error");
//     } else {
//         console.log("user deleted");
//         // setDLTdata(deletedata)
//         // getdata();
//     }

// }


const deleteuser = async (id) => {
  const res2 = await fetch(`/deleteuser/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });

  const deletedata = await res2.json();
  console.log(deletedata);

  if (res2.status === 422 || !deletedata) {
    console.log("error");
  } else {
    console.log("Medicine deleted");
    // setDLTdata(deletedata);
    setUserdata(getuserdata.filter((pharmacy1) => pharmacy1.id !== id)); // remove deleted doctor from state
  }
}






  const getdata = async () => {
    const res = await fetch("/getMedicines", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");

    } else {
      setUserdata(data)
      console.log("get data");

    }

  }

  useEffect(() => {
    getdata();
  }, [])

  
    
  return (
    <>

    
      

       {
        udata ?
            <>
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>{udata.name}</strong>  added succesfully!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </> : ""
       }
        {
        updata ?
            <>
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>{updata.name}</strong>  updated succesfully!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </> : ""
        }

        {
        dltdata ?
            <>
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>{dltdata.name}</strong>  deleted succesfully!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={shoot}></button>
                </div>
            </> : ""
        }


          <div className="mt-5">
          <div className='heading'>
              <h1 style={{ textAlign: "center" }}> Appointments Record </h1>
          </div>

            <div className="container">
              

              <table class="table" style={{ marginTop: "40px" }}>

                <thead>
                  <tr className="table-dark" style={{ height: "40px" }}>
                    <th scope="col" style={{ fontSize: "17px" }}>Doctor's Name</th>
                    <th scope="col" style={{ fontSize: "17px" }}>Hospital</th>
                    <th scope="col" style={{ fontSize: "17px" }}>Hospital Address</th>
                    <th scope="col" style={{ fontSize: "17px" }}>Date</th>
                    <th scope="col" style={{ fontSize: "17px" }}>Prescription</th>
                    <th></th>


                  </tr>
                </thead>
                <tbody >
                  {
                    getuserdata.map((element, id) => {
                      return (
                        <>
                          {/* <tr>
                            <th scope="row">{id + 1}</th>
                            <td>{element.name}</td>
                            <td>{element.mg}</td>
                            <td>{element.type}</td>
                            <td>{element.quantity}</td>
                            <td className="d-flex justify-content-between">
                            <NavLink to={`view/${element.id}`}> <button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink>
                              <NavLink to={`editMedicine/${element.id}`}>  <button className="btn btn-primary"><CreateIcon /></button></NavLink>
                              <button className="btn btn-danger" onClick={() => deleteuser(element.id)}><DeleteOutlineIcon /></button>
                            </td>
                          </tr> */}




                          <tr>
                            <th>Dr Tahir</th>
                            <td>Shayk Zayed</td>
                            <td>Allama Iqbal Town</td>
                            <td>3rd March</td>
                            <td>Prescription</td>
                            <td><button className="btn btn-success"><RemoveRedEyeIcon /></button></td>
                            
                          </tr>
                        </>
                      )
                    })
                  }
                  </tbody>
                    </table>


                </div>
            </div>
        </>
    )
}
export default Appointments