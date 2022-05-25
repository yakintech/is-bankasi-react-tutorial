import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react'


function UserGrid() {

    const [posts, setPost] = useState([]);

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 150
        },
        {
            field: 'userId',
            headerName: 'User ID',
            width: 150
        }, {
            field: 'title',
            headerName: 'Title',
            width: 150,
            editable: true
        },
    ]

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {

                let newPosts = []

                for (let index = 0; index < 100; index++) {
                   
                    res.data.forEach(element => {
                        newPosts.push(element);
                    });
                }

                setPost([...newPosts])

            })

    }, [])

    return (<>
        <div style={{ height: 400, width: '100%' }}>

        <DataGrid
            columns={columns}
            rows={posts}
            pageSize={5}
            checkboxSelection
            components={{ Toolbar: GridToolbar }}
            onCellEditCommit = {(e) => {console.log('Editcell', e);}} 
        >

        </DataGrid>

        </div>
    </>)
}

export default UserGrid