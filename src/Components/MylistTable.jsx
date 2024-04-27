import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MylistTable = ({ item}) => {
    const { touristsSpotName, country_Name, seasonality } = item;

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://a10-server-beta.vercel.app/delete/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your item has been deleted.',
                            'success'
                        );
                    }
                })
                .catch(error => {
                    console.error('Error deleting item:', error);
                    Swal.fire(
                        'Error!',
                        'An error occurred while deleting the item.',
                        'error'
                    );
                });
            }
        });
    };

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra rounded-3xl">
                    <tbody className="border  border-purple-800 ">
                        <tr className="flex justify-between">
                            <th>1</th>
                            <td>{touristsSpotName}</td>
                            <td>{country_Name}</td>
                            <td>{seasonality}</td>
                        </tr>
                        <button onClick={() => handleDelete(item._id)} className="btn btn-ghost">Delete</button>
                        <Link to={`/edit/${item._id}`}><button className="btn btn-ghost">Edit</button></Link>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MylistTable;
