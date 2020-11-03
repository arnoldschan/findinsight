import React, { useState } from 'react'
import { View, Boxed } from "styles/shared-components";
import Input from "./Input";
import axios from "axios";


let cancelToken;

function SearchPost() {
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
        
        const CRAWLERHUB_ADDRESS = "http://localhost:8800/"
        const url = `${CRAWLERHUB_ADDRESS}ig/user?key=${keyword}`
        axios.get(url)
        .then(res => {
            console.log(res.data)
        }).catch(res=>{
            console.error(res.data)
        })
        }
    return (
        <View>
            <Boxed>
                    <Input keyword={keyword} setKeyword={setKeyword}
                        platform={platform} setPlatform={setPlatform}
                        searchHandler={searchHandler}
                    />
            </Boxed>
        </View>
    )
}

export default SearchPost
