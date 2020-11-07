import React, { useState, useEffect } from 'react'
import { View, Boxed } from "styles/shared-components";
import Input from "./Input";
import axios from "axios";
import { DataGrid } from '@material-ui/data-grid';
import Tooltip from '@material-ui/core/Tooltip';

let cancelToken;

function SearchPost() {
    const result = require('./result.json')
    useEffect(() => {
        console.log(result)
    }, [])
    const [keyword, setKeyword] = useState("")
    const [platform, setPlatform] = useState(
        {
            Instagram: {
                checked: true
            },
            soon1: {
                checked: false
            }, 
            soon2: {
                checked: false
        }})
    const searchHandler = () => {
        // if (typeof cancelToken != typeof undefined) {
        // cancelToken.cancel();
        // }
        cancelToken = axios.CancelToken.source();
        
        const CRAWLERHUB_ADDRESS = "http://54.248.141.206/"
        const url = `${CRAWLERHUB_ADDRESS}ig/user?key=${keyword}`
        axios.get(url)
        .then(res => {
            console.log(res.data)
        }).catch(res=>{
            console.error(res.data)
        })
        }
    const columns = [
        { field: 'username', headerName: 'ID', width: 70 },
        { field: 'content', headerName: 'Content', width: 250 ,
        renderCell : (content)=> (<Tooltip placement='top-start' title={content.value}><span>{content.value}</span></Tooltip>) },
        {
            field: 'post_time',
            headerName: 'Post Time',
            type: 'dateTime',
            width: 180,
        },
        {
            field: 'likes_count',
            headerName: 'Likes',
            type: 'number',
            width: 90
        },
        {
            field: 'comments_count',
            headerName: 'Comments',
            type: 'number',
            width: 90
        },
        { field: 'post_link', headerName: 'Post Link', width: 100,
        renderCell : (uri)=> (<a href={uri}>ClickHere</a>) },
        ];

        const rows = result.result[0].posts.map(post => {
            return {...post, id: post.post_id}
        });

        const sortModel = [
            {
              field: 'post_time',
              sort: 'desc',
            },
          ];
    return (
        <View>
            <Boxed style={{zIndex:3}}>
                    <Input keyword={keyword} setKeyword={setKeyword}
                        platform={platform} setPlatform={setPlatform}
                        searchHandler={searchHandler}
                    />
            </Boxed>

                    <Boxed style={{zIndex: 2, height: 450 }}>
                        <DataGrid sortingOrder={['desc', 'asc']}
  sortModel={sortModel} rows={rows} rowHeight={25} columns={columns} pageSize={10} />
                    </Boxed>
        </View>
    )
}

export default SearchPost
