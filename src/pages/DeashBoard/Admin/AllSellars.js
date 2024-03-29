import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../components/Loading/Loading';


const AllSellars = () => {


    const {data:allsellars, refetch, isLoading} = useQuery({
        queryKey: ["allsellars","role=Sellers"],
        queryFn: async()=>  {
            const res = await fetch(`${process.env.REACT_APP_HOST_LINK}/users/allsellars?role=Sellers`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("BB_TOKEN")}`
                }
            });
                const data = await res.json();
                return data;
        }
    })

    console.log("allsellars", allsellars)


    const deleteUser = (user) => {
        console.log(user)
       if(window.confirm("Are you sure? Delete seller")){
        fetch(`${process.env.REACT_APP_HOST_LINK}/users/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged > 0) {
                    // console.log(data)
                    toast.success(`Successfully delete ${user?.email}`)
                    refetch()
                }
            })
       }
    }


        // handleMakeSeller   Verified sellar email 
        const handleMakeSellar = (user) => {
            console.log(user);
            fetch(`${process.env.REACT_APP_HOST_LINK}/addProducts/verified/${user?.email}`, {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem("BB_TOKEN")}`
                }
            })
            .then(res=> res.json())
            .then(data=> {
                console.log(data)
                if(data.modifiedCount){
                    toast.success('ADMIN USER UPDATED GOOD JOB')
                    refetch()
                }
            })
        }


    if(isLoading){
        return(
            <Loading></Loading>
        )
    }



    return (
        <section>
            <div>
                <h3 className='text-xl lg:text-2xl font-semibold my-6 text-center'>All Sellars </h3>
            </div>
            {/* table  */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th className='text-center'>Verifed & Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                            {
                                allsellars?.map((user, idx) => <tr key={user._id}>
                                    <th>{idx + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{user?.role}</td>
                                    <td className='grid gap-5 grid-cols-2'>
                                    {user.seller !== "verified" && <button onClick={()=> handleMakeSellar(user)}  className='btn btn-sm btn-success text-white font-bold'>Not Verify</button>}
                                    {user.seller === "verified" && <button onClick={()=> handleMakeSellar(user)}  className='btn btn-sm bg-green-700 text-white font-bold'>Verified</button>}
                                        <button onClick={() => deleteUser(user)} className='btn btn-sm btn-warning'>Delete</button>
                                    </td>
                                </tr>)
                            }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllSellars;